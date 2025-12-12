"use client";

import { useState, FormEvent } from "react";
import { validateContactForm, type ContactFormData } from "@/lib/validations/contact";
import Button from "@/components/buttons/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    location: "",
    description: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Map form data to Supabase schema
    const apiData = {
      full_name: formData.name,
      email: formData.email,
      location: formData.location || null,
      profile_type: formData.description || null,
      interest: formData.interest || null,
      details: formData.message || null,
    };

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiData),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        // Show more detailed error in development, user-friendly in production
        const errorMsg = result.message || "Something went wrong. Please try again.";
        setSubmitError(errorMsg);
        setIsSubmitting(false);
        if (process.env.NODE_ENV === "development") {
          console.error("Form submission error:", result);
        }
        return;
      }

      // Success
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", location: "", description: "", interest: "", message: "" });
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error(error);
      }
      setSubmitError("Network error. Try again.");
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-fg-sand rounded-md p-8 text-center">
        <h3 className="font-cormorant text-3xl font-semibold text-fg-navy mb-4 tracking-tight">
          Thank you for getting in touch with Founder Groundworks.
        </h3>
        <p className="font-inter text-base md:text-[18px] text-fg-grey">
          We will review your message and respond with the most appropriate next step.
        </p>
      </div>
    );
  }

  return (
    <>
      <p className="font-inter text-base md:text-[18px] text-fg-grey mb-6 leading-relaxed">
        Please complete the form below and we will respond with the most appropriate next step.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-inter font-medium text-fg-navy mb-2">
          Full name *
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-fg-grey rounded-md focus:outline-none focus:ring-2 focus:ring-fg-gold focus:border-fg-gold font-inter text-fg-navy"
          required
        />
        <p className="mt-1 text-sm text-fg-grey font-inter">Your legal name.</p>
        {errors.name && (
          <p className="mt-1 text-sm text-red-600 font-inter">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block font-inter font-medium text-fg-navy mb-2">
          Email address *
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-fg-grey rounded-md focus:outline-none focus:ring-2 focus:ring-fg-gold focus:border-fg-gold font-inter text-fg-navy"
          required
        />
        <p className="mt-1 text-sm text-fg-grey font-inter">We'll use this to reply to you.</p>
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 font-inter">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="location" className="block font-inter font-medium text-fg-navy mb-2">
          Country *
        </label>
        <select
          id="location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="w-full px-4 py-3 border border-fg-grey rounded-md focus:outline-none focus:ring-2 focus:ring-fg-gold focus:border-fg-gold font-inter text-fg-navy bg-white"
          required
        >
          <option value="">Select a country</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="Argentina">Argentina</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Belgium">Belgium</option>
          <option value="Brazil">Brazil</option>
          <option value="Canada">Canada</option>
          <option value="China">China</option>
          <option value="Colombia">Colombia</option>
          <option value="Denmark">Denmark</option>
          <option value="Egypt">Egypt</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Greece">Greece</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Ireland">Ireland</option>
          <option value="Israel">Israel</option>
          <option value="Italy">Italy</option>
          <option value="Japan">Japan</option>
          <option value="Kenya">Kenya</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Mexico">Mexico</option>
          <option value="Netherlands">Netherlands</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Norway">Norway</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Philippines">Philippines</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Russia">Russia</option>
          <option value="Singapore">Singapore</option>
          <option value="South Africa">South Africa</option>
          <option value="South Korea">South Korea</option>
          <option value="Spain">Spain</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Thailand">Thailand</option>
          <option value="Turkey">Turkey</option>
          <option value="Ukraine">Ukraine</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="Vietnam">Vietnam</option>
        </select>
        <p className="mt-1 text-sm text-fg-grey font-inter">Select your country.</p>
      </div>

      <div>
        <label className="block font-inter font-medium text-fg-navy mb-2">
          What best describes you? *
        </label>
        <div className="space-y-2">
          {[
            "I am a first-time founder",
            "I am thinking about becoming a founder",
            "I represent an organisation or institution",
            "Other",
          ].map((option) => (
            <label key={option} className="flex items-center font-inter text-fg-grey">
              <input
                type="radio"
                name="description"
                value={option}
                checked={formData.description === option}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mr-2"
                required
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-inter font-medium text-fg-navy mb-2">
          What are you interested in? *
        </label>
        <div className="space-y-2">
          {[
            "Joining the Founder Foundations Programme",
            "Learning more about our programmes",
            "Exploring a partnership",
            "Media or speaking enquiry",
            "Other",
          ].map((option) => (
            <label key={option} className="flex items-center font-inter text-fg-grey">
              <input
                type="radio"
                name="interest"
                value={option}
                checked={formData.interest === option}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="mr-2"
                required
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-inter font-medium text-fg-navy mb-2">
          Tell us a little more.
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={6}
          className="w-full px-4 py-3 border border-fg-grey rounded-md focus:outline-none focus:ring-2 focus:ring-fg-gold font-inter resize-none text-fg-navy"
        />
        <p className="mt-1 text-sm text-fg-grey font-inter">Briefly describe your situation, context or questions.</p>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 font-inter">{errors.message}</p>
        )}
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-sm text-red-600 font-inter">{submitError}</p>
        </div>
      )}
      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
    </>
  );
}

