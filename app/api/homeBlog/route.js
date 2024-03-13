export async function GET(request) {
  const data = [
    {
      id: 1,
      image: "/homeBlog/homeBlog.svg",
      profileImage: "/homeBlog/johnCarter.svg",
      cap: "Consulting Fees Study 2019 (And How To Raise Your Rates)",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
      name: "John Carter",
      date: "September 1, 2022",
    },
    {
      id: 2,
      image: "/homeBlog/homeBlog.svg",
      profileImage: "/homeBlog/nayraMelson.svg",
      cap: "What is growth hacking and how to apply it to your startup",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
      name: "Nayra Melson",
      date: "September 1, 2022",
    },
  ];

  return new Response(JSON.stringify(data));
}
