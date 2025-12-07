export type Programme = {
  id: string;
  sectionLabel: string;
  title: string;
  summary: string;
  whoItsFor: string;
  format: string[];
  whatYoullCover: string[];
  outcome: string;
  cta: string;
};

export const programmes: Programme[] = [
  {
    id: "founder-foundations",
    sectionLabel: "Programme 01",
    title: "Founder Foundations Programme",
    summary: "A structured, cohort-based programme teaching the core fundamentals every first-time founder is expected to understand.",
    whoItsFor: 'People with little or no previous startup experience who want to build a serious business, not just "try something".',
    format: [
      "Duration: 4–6 weeks",
      "Weekly live sessions (online)",
      "Guided assignments",
      "Practical tools and frameworks",
    ],
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
    sectionLabel: "Programme 02",
    title: "Groundworks Clinics",
    summary: "Small-group working sessions focused on applying the principles to your specific context.",
    whoItsFor: "Founders who have completed the Foundations Programme and want guided support as they refine and test their ideas.",
    format: [
      "Small group clinics",
      "Scenario-based discussions",
      "Feedback on your framing and structure",
      "Short, focused implementation cycles",
    ],
    whatYoullCover: [
      "Tightening your problem statement",
      "Stress-testing your solution",
      "Choosing simple, realistic KPIs",
      "Practicing short, precise explanations",
      "Getting used to real questions and pushback",
    ],
    outcome: "You leave with a clearer, more robust understanding of what you are building and how to continue developing it.",
    cta: "Join Groundworks Clinics",
  },
  {
    id: "founder-readiness-review",
    sectionLabel: "Programme 03",
    title: "Founder Readiness Review",
    summary: "A structured review of your current founder profile, your idea, and your level of preparedness for serious next steps.",
    whoItsFor: "Founders who have completed our earlier programmes and want a clear, honest assessment of where they stand.",
    format: [
      "One-to-one review session",
      "Structured diagnostic criteria",
      "Written summary of strengths and gaps",
      "Suggested next steps",
    ],
    whatYoullCover: [
      "A clear picture of how you're currently thinking and operating as a founder",
      "An external, structured assessment rather than self-guessing",
      "Direction on what to strengthen next",
    ],
    outcome: "You walk away with a grounded understanding of your readiness – not as a judgment, but as a map.",
    cta: "Book your Founder Readiness Review",
  },
];

