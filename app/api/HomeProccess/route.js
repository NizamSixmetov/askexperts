export async function GET(request) {
  const queryParams = new URL(request.url).searchParams;
  const limit = parseInt(queryParams.get("limit"));

  const data = [
    {
      id: 1,
      image: "/HomeProccess/photo1.svg",
      name: "Taxes & Efficiency",
      description: "Business",
    },
    {
      id: 2,
      image: "/HomeProccess/photo2.svg",
      name: "Planning Guide",
      description: "Hobbies",
    },
    {
      id: 3,
      image: "/HomeProccess/photo3.svg",
      name: "Investment banking",
      description: "Business",
    },
    {
      id: 4,
      image: "/HomeProccess/photo4.svg",
      name: "Financial Plan",
      description: "Study",
    },
    {
      id: 5,
      image: "/HomeProccess/photo5.svg",
      name: "Audit & Evaluation",
      description: "Business",
    },
    {
      id: 6,
      image: "/HomeProccess/photo6.svg",
      name: "Thematic Study",
      description: "Hobbies",
    },
  ];

  const limitedData = data.slice(0, limit);

  return new Response(JSON.stringify(limit ? limitedData : data));
}
