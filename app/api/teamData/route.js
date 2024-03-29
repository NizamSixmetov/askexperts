export async function GET(request) {
  const data = [
    {
      id: 1,
      image: "/AboutTeamImage/Sara1.svg",
      name: "Sarah Jasmine",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      position: "CEO at Company",
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
    },
    {
      id: 2,
      image: "/AboutTeamImage/John2.svg",
      name: "John Carter",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      position: "Manger",
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
    },
    {
      id: 3,
      image: "/AboutTeamImage/Daisy3.svg",
      name: "Daisy Stella",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      position: "CEO at Company",
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
    },
  ];

  return new Response(JSON.stringify(data));
}
