import { NextResponse } from "next/server";
import supabaseAdmin from "@/lib/supabase";

export async function POST(request) {
  try {
    const { email, name } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check for duplicate
    const { data: existing } = await supabaseAdmin
      .from("waitlist")
      .select("id")
      .eq("email", normalizedEmail)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    // Insert new entry
    const { data, error: insertError } = await supabaseAdmin
      .from("waitlist")
      .insert({
        email: normalizedEmail,
        name: name?.trim() || null,
      })
      .select("id")
      .single();

    if (insertError) throw insertError;

    // Get position (total count)
    const { count } = await supabaseAdmin
      .from("waitlist")
      .select("id", { count: "exact", head: true });

    return NextResponse.json({
      message: "You're on the list",
      position: count,
    });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json(
      { error: "Something went wrong — please try again" },
      { status: 500 }
    );
  }
}
