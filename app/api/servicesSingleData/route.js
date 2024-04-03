export async function GET(request) {
  const data = [
    {
      id: 1,
      cap: "The Balance Sheet",
      description:
        "The Balance Sheet is a summary of the assets and liabilities and equity of a business at a specific point of time.",
    },
    {
      id: 2,
      cap: "Income Statement",
      description:
        "The Income (Profit and Loss) Statement, commonly referred to as the P&L statement, summarizes the revenue and expenses for a specific time period (one month, one quarter, one year, etc.)",
    },
    {
      id: 3,
      cap: "Financial Plan",
      description:
        "Keep your information current and review the documents on a regular basis (monthly or more often if needed). Review them with key individuals within your company.",
    },
    {
      id: 4,
      cap: "Financial Ratios",
      description:
        "Ratios are useful when comparing your company with the competition on financial performance and also when benchmarking the performance of your company.",
    },
  ];

  return new Response(JSON.stringify(data));
}
