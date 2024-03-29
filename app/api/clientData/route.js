export async function GET(request) {
  const data = [
    {
      id: 1,
      image: "/AboutClientImage/ClientIcon1.svg",
      cap: "Creative Ideas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.",
    },
    {
      id: 2,
      image: "/AboutClientImage/ClientIcon2.svg",
      cap: "Best Features",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: "/AboutClientImage/ClientIcon3.svg",
      cap: "Experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.",
    },
    {
      id: 4,
      image: "/AboutClientImage/ClientIcon4.svg",
      cap: "Easy Solutions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return new Response(JSON.stringify(data));
}
