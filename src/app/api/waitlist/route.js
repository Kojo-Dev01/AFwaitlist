import { NextResponse } from "next/server";

// Temporary in-memory store — will be replaced with Supabase
let waitlist = [];

export async function POST(request) {
  try {
    const { email, name } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Check for duplicate
    if (waitlist.find((entry) => entry.email === email)) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    waitlist.push({
      email,
      name: name || "",
      joinedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "You're on the list",
      position: waitlist.length,
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong — please try again" },
      { status: 500 }
    );
  }
}
