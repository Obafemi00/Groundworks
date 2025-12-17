export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  location?: string;
  description?: string;
  interest?: string;
  message?: string;
  emailConsent: boolean;
  termsConsent: boolean;
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
} {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.firstName || data.firstName.trim().length < 1) {
    errors.firstName = "First name is required";
  }

  if (!data.lastName || data.lastName.trim().length < 1) {
    errors.lastName = "Last name is required";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.emailConsent) {
    errors.emailConsent = "You must consent to receiving emails to proceed";
  }

  if (!data.termsConsent) {
    errors.termsConsent = "You must accept the terms and policies to proceed";
  }

  // Message is optional, but if provided, it should be at least 10 characters
  if (data.message && data.message.trim().length > 0 && data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

