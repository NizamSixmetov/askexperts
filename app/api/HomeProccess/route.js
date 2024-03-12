export async function GET(request) {
  const data = [
    {
      id: 1,
      image: "/HomeProccess/photo1.svg",
    },
    {
      id: 2,
      image: "/HomeProccess/photo2.svg",
    },
    {
      id: 3,
      image: "/HomeProccess/photo3.svg",
    },
    {
      id: 4,
      image: "/HomeProccess/photo4.svg",
    },
    {
      id: 5,
      image: "/HomeProccess/photo5.svg",
    },
    {
      id: 6,
      image: "/HomeProccess/photo6.svg",
    },
  ];

  return new Response(JSON.stringify(data));
}
