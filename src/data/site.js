/**
 * Single source of truth for business details, services, FAQs and pricing.
 *
 * Anything marked `TODO(client)` must be confirmed with the client before launch.
 * Sections whose data is empty (testimonials, social links) are hidden automatically.
 */

export const SITE = {
  name: "VK Tax Consultant",
  url: "https://vktaxconsultant.com",
  foundingYear: 2024,
  tagline: "GST, Income Tax, TDS, Payroll & Accounting services in Ghaziabad",
  email: "vktaxconsultants2024@gmail.com",
  phones: [
    { display: "+91 98731 00068", tel: "+919873100068" },
    { display: "+91 98731 08188", tel: "+919873108188" },
  ],
  // TODO(client): confirm this number is on WhatsApp.
  whatsapp: "919873100068",
  address: {
    // TODO(client): full street address (shop/plot no., landmark) and correct PIN code.
    street: "Khora Colony",
    locality: "Ghaziabad",
    region: "Uttar Pradesh",
    regionCode: "UP",
    postalCode: "",
    country: "IN",
  },
  // TODO(client): confirm office hours.
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "18:00",
    label: "Mon – Sat, 10:00 AM – 6:00 PM",
  },
  // TODO(client): add real profile URLs. Empty entries are not rendered.
  social: {
    facebook: "",
    linkedin: "",
    instagram: "",
  },
  // Text used to build Google Maps links/embeds.
  mapQuery: "Khora Colony, Ghaziabad, Uttar Pradesh",
};

export const fullAddress = () =>
  [SITE.address.street, SITE.address.locality, SITE.address.region, SITE.address.postalCode]
    .filter(Boolean)
    .join(", ");

export const mapsEmbedUrl = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`;

export const mapsDirectionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapQuery)}`;

export const whatsappUrl = (text = "Hello, I would like a consultation.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const SERVICES = [
  {
    slug: "gst-services",
    icon: "FileCheck",
    title: "GST Services",
    short:
      "GST registration, monthly and quarterly returns, annual GSTR-9 filing and reconciliation.",
    description:
      "End-to-end management of your Goods and Services Tax obligations — from registration to returns, reconciliation and replies to departmental notices.",
    features: [
      "GST registration & amendments",
      "GSTR-1 & GSTR-3B filings",
      "Annual GSTR-9 / 9C reconciliation",
      "Input tax credit reconciliation (GSTR-2B)",
      "Replies to notices & departmental support",
    ],
    whoFor: ["Traders and retailers", "Manufacturers", "Service providers & freelancers", "E-commerce sellers"],
    documents: [
      "PAN of the business / proprietor",
      "Aadhaar of proprietor / partners / directors",
      "Passport-size photograph",
      "Proof of business address (electricity bill, rent agreement or NOC)",
      "Bank statement or cancelled cheque",
      "Partnership deed / incorporation certificate (if applicable)",
    ],
  },
  {
    slug: "income-tax-return-filing",
    icon: "Calculator",
    title: "Income Tax (ITR)",
    short:
      "Income tax planning and ITR filing for salaried individuals, professionals, firms and companies.",
    description:
      "Accurate ITR filing and practical tax planning so you claim every eligible deduction and file on time.",
    features: [
      "ITR filing for individuals, HUFs, firms & companies",
      "Tax planning and deduction review",
      "Capital gains computation",
      "Advance tax computation",
      "Responses to income tax notices",
    ],
    whoFor: ["Salaried employees", "Doctors, consultants & professionals", "Business owners", "Investors with capital gains"],
    documents: [
      "PAN and Aadhaar",
      "Form 16 (for salaried individuals)",
      "Form 26AS / AIS / TIS",
      "Bank statements and interest certificates",
      "Investment and deduction proofs (80C, 80D, etc.)",
      "Capital gains statements (if applicable)",
    ],
  },
  {
    slug: "tds-compliance",
    icon: "ShieldCheck",
    title: "TDS Compliance",
    short:
      "TDS computation, deposit, quarterly returns and Form 16 / 16A certificates.",
    description:
      "Complete TDS and TCS compliance so deductions are correct, deposits are on time and returns are filed without defaults.",
    features: [
      "TDS / TCS computation and deposit",
      "Quarterly TDS returns (24Q, 26Q, 27Q)",
      "Form 16 / 16A generation",
      "Correction returns and default resolution",
      "TAN registration",
    ],
    whoFor: ["Businesses with employees", "Companies & firms making contractor payments", "Landlords / tenants with TDS obligations"],
    documents: [
      "TAN and PAN of the deductor",
      "PAN of all deductees",
      "Payment / salary details for the quarter",
      "Challans of TDS deposited",
    ],
  },
  {
    slug: "payroll-services",
    icon: "Users",
    title: "Payroll Services",
    short:
      "Payroll processing, payslips, PF & ESIC filings and statutory compliance for your team.",
    description:
      "Reliable monthly payroll with all statutory deductions and filings handled, so your team is paid correctly and on time.",
    features: [
      "Monthly payroll processing & payslips",
      "PF & ESIC registration and monthly filings",
      "Professional tax compliance (where applicable)",
      "Salary TDS computation",
      "Labour law compliance support",
    ],
    whoFor: ["Startups hiring their first employees", "SMEs with growing teams", "Businesses outsourcing HR administration"],
    documents: [
      "Employee master data (name, PAN, Aadhaar, bank details)",
      "Salary structure and attendance",
      "Existing PF / ESIC registration details and UANs",
    ],
  },
  {
    slug: "accounting-services",
    icon: "BarChart3",
    title: "Accounting Services",
    short:
      "Bookkeeping, financial statements and MIS reporting using modern cloud accounting tools.",
    description:
      "Clean, up-to-date books and clear reports that help you understand your business and stay ready for audits and filings.",
    features: [
      "Bookkeeping & bank reconciliation",
      "Financial statement preparation",
      "Management (MIS) reporting",
      "Accounts receivable / payable tracking",
      "Virtual CFO support",
    ],
    whoFor: ["Small and medium businesses", "Startups", "Professionals and partnership firms"],
    documents: [
      "Bank statements",
      "Sales and purchase invoices",
      "Expense bills and receipts",
      "Previous year financial statements (if any)",
    ],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);

// TODO(client): review wording. Kept general and factual; thresholds/dates change — keep current.
export const FAQS = [
  {
    q: "How do I get started?",
    a: "Fill in the consultation form or call / WhatsApp us. We will understand your requirement, share the list of documents needed and give you a clear quote before any work begins.",
  },
  {
    q: "Do I need GST registration?",
    a: "GST registration is generally mandatory once your annual turnover crosses the threshold (₹40 lakh for most suppliers of goods and ₹20 lakh for services, lower in special category states), and in certain cases regardless of turnover — such as inter-state supply of goods or selling through e-commerce platforms. We can check your specific case.",
  },
  {
    q: "What is the last date to file my income tax return?",
    a: "For most individuals whose accounts are not audited, the due date is 31 July following the end of the financial year. Audited cases have later due dates. Dates are sometimes extended by the government, so contact us early to avoid late fees.",
  },
  {
    q: "Which documents do I need for ITR filing?",
    a: "Typically PAN, Aadhaar, Form 16 (if salaried), Form 26AS / AIS, bank statements and proofs of investments or deductions. See the full checklist on our Resources page.",
  },
  {
    q: "Can you handle my work without me visiting the office?",
    a: "Yes. Documents can be shared over email or WhatsApp and most filings are completed online. You are always welcome to visit the office if you prefer.",
  },
  {
    q: "How are your fees decided?",
    a: "Fees depend on the service, the volume of transactions and how often filings are required. We share a fixed quote upfront after understanding your requirement.",
  },
];

// TODO(client): fill in prices (e.g. "₹1,499") or leave null to show "Get a quote".
export const PRICING = [
  {
    name: "Individual",
    price: null,
    unit: "per return",
    description: "For salaried individuals and simple income profiles.",
    features: ["ITR filing", "Deduction review", "Form 26AS / AIS reconciliation", "Notice support"],
    highlighted: false,
  },
  {
    name: "Business Compliance",
    price: null,
    unit: "per month",
    description: "For small businesses that need regular GST and TDS filings.",
    features: ["GST returns (GSTR-1 & 3B)", "TDS computation & returns", "Bookkeeping", "Dedicated point of contact"],
    highlighted: true,
  },
  {
    name: "Growth",
    price: null,
    unit: "per month",
    description: "For growing teams that need payroll and reporting as well.",
    features: ["Everything in Business Compliance", "Payroll, PF & ESIC", "Monthly MIS reports", "Annual filings & GSTR-9"],
    highlighted: false,
  },
];

// TODO(client): add genuine client testimonials (with permission). Section is hidden while empty.
// Shape: { quote: "...", name: "First name L.", role: "Business owner, Ghaziabad" }
export const TESTIMONIALS = [];

// Common due dates. Subject to change by CBDT / CBIC notifications.
export const TAX_CALENDAR = [
  { when: "7th of every month", what: "TDS / TCS deposit for the previous month" },
  { when: "11th of every month", what: "GSTR-1 (monthly filers)" },
  { when: "15th of every month", what: "PF & ESIC contributions" },
  { when: "20th of every month", what: "GSTR-3B (monthly filers)" },
  { when: "15 Jun / 15 Sep / 15 Dec / 15 Mar", what: "Advance tax instalments" },
  { when: "31 Jul / 31 Oct / 31 Jan / 31 May", what: "Quarterly TDS returns" },
  { when: "31 July", what: "ITR for individuals not requiring audit" },
  { when: "30 September", what: "Tax audit report" },
  { when: "31 October", what: "ITR for audited cases" },
  { when: "31 December", what: "GSTR-9 / 9C annual return" },
];
