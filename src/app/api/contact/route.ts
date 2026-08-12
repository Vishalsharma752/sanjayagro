import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactMessages } from "@/db/schema";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Save to local enquiries.json
    const enquiriesDir = path.join(process.cwd(), "data");
    const filePath = path.join(enquiriesDir, "enquiries.json");
    
    await fs.mkdir(enquiriesDir, { recursive: true });
    
    let existingEnquiries: any[] = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      existingEnquiries = JSON.parse(fileContent);
    } catch (readError) {
      // Start with empty array if file does not exist
    }
    
    const newEnquiry = {
      id: existingEnquiries.length + 1,
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
      createdAt: new Date().toISOString(),
    };
    
    existingEnquiries.push(newEnquiry);
    await fs.writeFile(filePath, JSON.stringify(existingEnquiries, null, 2), "utf-8");

    // Forward lead to Tisnx API from server side (bypasses browser CORS restrictions)
    try {
      const payload = {
        name,
        contact_no: phone || "",
        email,
        message: subject ? `[${subject}] ${message}` : message,
        company_name: "Sanjay Agro",
        source: "tisnexus",
      };

      await fetch("https://www.tisnx.com/api/landing-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (tisnxError) {
      console.error("Tisnx API server-side forwarding error:", tisnxError);
    }

    // Optional DB insert if database is available
    try {
      if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("localhost") && !process.env.DATABASE_URL.includes("127.0.0.1")) {
        await db.insert(contactMessages).values({
          name,
          email,
          phone: phone || null,
          subject: subject || null,
          message,
        });
      }
    } catch (dbError) {
      console.warn("DB insert skipped or failed:", dbError);
    }

    return NextResponse.json(
      { success: true, message: "Thank you! Your enquiry has been received. We will get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
