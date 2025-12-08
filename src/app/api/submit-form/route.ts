import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { full_name, email, location, founder_type, interest, details } = data;

    // Validate required fields
    if (!full_name || !email || !founder_type || !interest) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled." },
        { status: 400 }
      );
    }

    const supabase = supabaseServer();

    const { error } = await supabase.from("form_submissions").insert({
      full_name,
      email,
      location: location || "",
      founder_type,
      interest,
      details: details || "",
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { success: false, message: "Could not save your submission." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Form submitted successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}

