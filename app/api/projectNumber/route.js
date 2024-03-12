export async function GET(request) {
  const data = [
    {
      id: 1,
      cap: 1128,
      description: "Successful Work",
    },
    {
      id: 2,
      cap: 908,
      description: "Team member",
    },
    {
      id: 3,
      cap: 258,
      description: "Happy Customers",
    },
    {
      id: 4,
      cap: 564,
      description: "Creative Idea",
    },
  ];

  return new Response(JSON.stringify(data));
}
