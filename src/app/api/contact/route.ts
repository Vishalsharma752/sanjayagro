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

    try {
      await db.insert(contactMessages).values({
        name,
        email,
        phone: phone || null,
        subject: subject || null,
        message,
      });
    } catch (dbError) {
      console.warn("Database insert failed, using JSON file fallback:", dbError);
      
      // Fallback: Save to local enquiries.json in the workspace
      const enquiriesDir = path.join(process.cwd(), "data");
      const filePath = path.join(enquiriesDir, "enquiries.json");
      
      // Ensure directory exists
      await fs.mkdir(enquiriesDir, { recursive: true });
      
      let existingEnquiries: any[] = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        existingEnquiries = JSON.parse(fileContent);
      } catch (readError) {
        // File doesn't exist or is invalid, start with empty array
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
