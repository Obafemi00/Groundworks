export type ProgrammeData = {
  id: string;
  number: string;
  label: string;
  name: string;
  summary: string;
  whoItsFor: string;
  format: {
    duration?: string;
    items: string[];
  };
  whatYoullCover: string[];
  outcome: string;
  cta?: string;
};

export const programmeData: ProgrammeData[] = [
  {
    id: "founder-foundations",
    number: "01",
    label: "Programme 01",
    name: "Founder Foundations Programme",
    summary: "A structured, cohort-based programme teaching the core fundamentals every first-time founder is expected to understand.",
    whoItsFor: 'People with little or no previous startup experience who want to build a serious business, not just "try something".',
    format: {
      duration: "4–6 weeks",
      items: [
        "Weekly live sessions (online)",
        "Guided assignments",
        "Practical tools and frameworks",
      ],
    },
    whatYoullCover: [
      "Problem vs solution vs delivery",
      "Simple business models",
      "MVP and early validation",
      "Basic KPIs and traction",
      "How to frame your idea clearly",
      "How to communicate like a founder",
    ],
    outcome: "By the end of the programme, you will be able to describe your idea clearly, understand its core structure, and speak about it with the level of seriousness expected by partners and institutions.",
    cta: "Apply to the Foundations Programme",
  },
  {
    id: "groundworks-clinics",
    number: "02",
    label: "Programme 02",
    name: "Groundworks Clinics",
    summary: "Small-group working sessions focused on applying the principles to your specific context.",
    whoItsFor: "Founders who have completed the Foundations Programme and want guided support as they refine and test their ideas.",
    format: {
      items: [
        "Small group clinics",
        "Scenario-based discussions",
        "Feedback on your framing and structure",
        "Short, focused implementation cycles",
      ],
    },
    whatYoullCover: [
      "Tightening your problem statement",
      "Stress-testing your solution",
      "Choosing simple, realistic KPIs",
      "Practicing short, precise explanations",
      "Getting used to real questions and pushback",
    ],
    outcome: "You leave with a clearer, more robust understanding of what you are building and how to continue developing it.",
  },
  {
    id: "founder-readiness-review",
    number: "03",
    label: "Programme 03",
    name: "Founder Readiness Review",
    summary: "A structured review of your current founder profile, your idea, and your level of preparedness for serious next steps.",
    whoItsFor: "Founders who have completed our earlier programmes and want a clear, honest assessment of where they stand.",
    format: {
      items: [
        "One-to-one review session",
        "Structured diagnostic criteria",
        "Written summary of strengths and gaps",
        "Suggested next steps",
      ],
    },
    whatYoullCover: [
      "A clear picture of how you're currently thinking and operating as a founder",
      "An external, structured assessment rather than self-guessing",
      "Direction on what to strengthen next",
    ],
    outcome: "You walk away with a grounded understanding of your readiness – not as a judgment, but as a map.",
  },
];

