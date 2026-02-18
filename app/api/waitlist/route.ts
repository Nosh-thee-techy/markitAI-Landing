import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const resendApiKey = process.env.RESEND_API_KEY!;
const resendFrom = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, businessType, budget } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const trimmedEmail = String(email).trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      const { error } = await supabase.from("waitlist").insert({
        name: String(name).trim(),
        email: trimmedEmail,
        business_type: businessType || null,
        monthly_budget: budget || null,
      });

      if (error) {
        if (error.code === "23505") {
          return NextResponse.json(
            { error: "This email is already on the waitlist." },
            { status: 409 }
          );
        }
        console.error("Supabase waitlist insert error:", error);
        return NextResponse.json(
          { error: "Could not save your signup. Please try again." },
          { status: 500 }
        );
      }
    }

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: resendFrom,
        to: trimmedEmail,
        subject: "You're on the MarkitAI waitlist",
        html: `
          <p>Hi ${String(name).trim()},</p>
          <p>Thanks for joining the MarkitAI waitlist. We'll notify you as soon as we launch.</p>
          <p>— The MarkitAI team</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
