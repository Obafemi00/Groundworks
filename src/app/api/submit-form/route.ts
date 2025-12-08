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

    // Prepare submission data - ensure all fields are strings (Supabase requires all fields)
    // Use empty string for optional fields if not provided
    const submissionData = {
      full_name: String(full_name || "").trim(),
      email: String(email || "").trim(),
      location: String(location || "").trim(),
      founder_type: String(founder_type || "").trim(),
      interest: String(interest || "").trim(),
      details: String(details || "").trim(),
    };

    // Double-check that required fields are not empty after trimming
    if (!submissionData.full_name || !submissionData.email || !submissionData.founder_type || !submissionData.interest) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled." },
        { status: 400 }
      );
    }

    const supabase = supabaseServer();

    const { data: insertedData, error } = await supabase
      .from("form_submissions")
      .insert(submissionData)
      .select();

    if (error) {
      console.error("Supabase error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      console.error("Attempted data:", JSON.stringify(submissionData, null, 2));
      
      // Return more detailed error message for debugging
      const errorMessage = error.message || "Could not save your submission.";
      return NextResponse.json(
        { 
          success: false, 
          message: errorMessage,
          error: process.env.NODE_ENV === "development" ? error : undefined
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

