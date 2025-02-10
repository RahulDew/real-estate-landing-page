import client from "@/lib/sanity";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    const { name, email, message } = await req.json();
    console.log({ name, email, message });

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    try {
      await client.create({
        _type: "visitorLead",
        name,
        email,
        message,
        submittedAt: new Date().toISOString(),
      });

      return NextResponse.json(
        { message: "Form submitted successfully!" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }
  } else {
    res.headers.set("Allow", "POST");
    return NextResponse.json(
      { error: `Method ${req.method} not allowed` },
      { status: 405 }
    );
  }
}
