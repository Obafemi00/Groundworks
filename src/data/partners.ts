export type Partner = {
  name: string;
  description: string;
  benefits: string[];
};

export const partnerTypes: Partner[] = [
  {
    name: "Venture Capital Firms",
    description: "We partner with VC firms to support their portfolio companies.",
    benefits: [
      "Portfolio support and development",
      "Founder readiness assessments",
      "Strategic guidance",
    ],
  },
  {
    name: "Accelerators & Incubators",
    description: "Collaborate with accelerators to enhance their founder development programmes.",
    benefits: [
      "Programme enhancement",
      "Expert workshops",
      "Mentor training",
    ],
  },
  {
    name: "Corporate Innovation Labs",
    description: "Help corporate innovation teams build and scale internal ventures.",
    benefits: [
      "Internal venture support",
      "Innovation methodology",
      "Team development",
    ],
  },
];

