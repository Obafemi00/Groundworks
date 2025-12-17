import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

// Force dynamic rendering for form submissions
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { first_name, last_name, full_name, email, location, profile_type, interest, details, email_consent, terms_consent } = data;

    // Validate required fields
    if (!first_name || !last_name || !email) {
      return NextResponse.json(
        { success: false, message: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    // Validate consent checkboxes
    if (!email_consent || !terms_consent) {
      return NextResponse.json(
        { success: false, message: "You must consent to receiving emails and accept the terms and policies." },
        { status: 400 }
      );
    }

    // Prepare submission data
    // Required fields: first_name, last_name, email, email_consent, terms_consent
    // Optional fields (can be null): full_name (for backward compatibility), location, profile_type, interest, details
    const submissionData: {
      first_name: string;
      last_name: string;
      full_name?: string;
      email: string;
      location: string | null;
      profile_type: string | null;
      interest: string | null;
      details: string | null;
      email_consent: boolean;
      terms_consent: boolean;
    } = {
      first_name: String(first_name).trim(),
      last_name: String(last_name).trim(),
      full_name: full_name ? String(full_name).trim() : `${String(first_name).trim()} ${String(last_name).trim()}`.trim(),
      email: String(email).trim(),
      location: location && location.trim() ? location.trim() : null,
      profile_type: profile_type && profile_type.trim() ? profile_type.trim() : null,
      interest: interest && interest.trim() ? interest.trim() : null,
      details: details && details.trim() ? details.trim() : null,
      email_consent: Boolean(email_consent),
      terms_consent: Boolean(terms_consent),
    };

    // Double-check that required fields are not empty after trimming
    if (!submissionData.first_name || !submissionData.last_name || !submissionData.email) {
      return NextResponse.json(
        { success: false, message: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    const supabase = supabaseServer();

    // Insert into Form_submissions table (case-sensitive, quoted name)
    const { error } = await supabase
      .from("Form_submissions")
      .insert(submissionData);

    if (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Supabase error:", error);
        console.error("Error code:", error.code);
        console.error("Error details:", JSON.stringify(error, null, 2));
        console.error("Attempted data:", JSON.stringify(submissionData, null, 2));
        console.error("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "Set" : "Missing");
      }
      
      // Provide helpful error message based on error type
      let errorMessage = "Could not save your submission.";
      
      if (error.message?.includes("Could not find the table") || error.code === "PGRST116") {
        errorMessage = "Table 'Form_submissions' not found. Please verify the table exists in your Supabase dashboard and the name is correct.";
      } else if (error.message?.includes("row-level security") || error.code === "42501") {
        errorMessage = "Row-Level Security (RLS) policy is blocking the insert. Please check your Supabase RLS policies or ensure you're using the service role key.";
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
    if (process.env.NODE_ENV === "development") {
      console.error("API error:", err);
    }
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

