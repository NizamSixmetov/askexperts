export async function GET(request) {
  const data = [
    {
      id: 1,
      url: "/HomeServices/Icon1.svg",
      cap: "Audit & Evaluation",
      description:
        "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
    },
    {
      id: 2,
      url: "/HomeServices/Icon2.svg",
      cap: "Financial Projections",
      description:
        "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
    },
    {
      id: 3,
      url: "/HomeServices/Icon3.svg",
      cap: "Funds and investments",
      description:
        "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
    },
    {
      id: 4,
      url: "/HomeServices/Icon4.svg",
      cap: "Finance & Restructuring",
      description:
        "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
    },
    {
      id: 5,
      url: "/HomeServices/Icon5.svg",
      cap: "Taxes & Efficiency",
      description:
        "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
    },
    {
      id: 6,
      url: "/HomeServices/Icon6.svg",
      cap: "Investment banking",
      description:
        "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
    },
  ];

  return new Response(JSON.stringify(data));
}
