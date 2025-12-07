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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", location: "", description: "", interest: "", message: "" });
    }, 1000);
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
          Location
        </label>
        <input
          type="text"
          id="location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="w-full px-4 py-3 border border-fg-grey rounded-md focus:outline-none focus:ring-2 focus:ring-fg-gold focus:border-fg-gold font-inter text-fg-navy"
        />
        <p className="mt-1 text-sm text-fg-grey font-inter">City and country.</p>
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

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
}

