import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { full_name, email, location, profile_type, interest, details } = data;

    // Validate required fields (only full_name and email are NOT NULL in the schema)
    if (!full_name || !email) {
      return NextResponse.json(
        { success: false, message: "Full name and email are required." },
        { status: 400 }
      );
    }

    // Prepare submission data
    // Required fields: full_name, email
    // Optional fields (can be null): location, profile_type, interest, details
    const submissionData: {
      full_name: string;
      email: string;
      location: string | null;
      profile_type: string | null;
      interest: string | null;
      details: string | null;
    } = {
      full_name: String(full_name).trim(),
      email: String(email).trim(),
      location: location && location.trim() ? location.trim() : null,
      profile_type: profile_type && profile_type.trim() ? profile_type.trim() : null,
      interest: interest && interest.trim() ? interest.trim() : null,
      details: details && details.trim() ? details.trim() : null,
    };

    // Double-check that required fields are not empty after trimming
    if (!submissionData.full_name || !submissionData.email) {
      return NextResponse.json(
        { success: false, message: "Full name and email are required." },
        { status: 400 }
      );
    }

    const supabase = supabaseServer();

    // Insert into Form_submissions table (case-sensitive, quoted name)
    const { data: insertedData, error } = await supabase
      .from("Form_submissions")
      .insert(submissionData)
      .select();

    if (error) {
      console.error("Supabase error:", error);
      console.error("Error code:", error.code);
      console.error("Error details:", JSON.stringify(error, null, 2));
      console.error("Attempted data:", JSON.stringify(submissionData, null, 2));
      console.error("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "Set" : "Missing");
      
      // Provide helpful error message based on error type
      let errorMessage = "Could not save your submission.";
      
      if (error.message?.includes("Could not find the table") || error.code === "PGRST116") {
        errorMessage = "Table 'Form_submissions' not found. Please verify the table exists in your Supabase dashboard and the name is correct.";
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      return NextResponse.json(
        { 
          success: false, 
          message: errorMessage,
          error: process.env.NODE_ENV === "development" ? {
            message: error.message,
            code: error.code,
            details: error.details,
            hint: error.hint
          } : undefined
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Form submitted successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error("API error:", err);
    const errorMessage = err instanceof Error ? err.message : "Something went wrong.";
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage,
        error: process.env.NODE_ENV === "development" ? String(err) : undefined
      },
      { status: 500 }
    );
  }
}

