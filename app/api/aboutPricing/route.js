export async function GET(request) {
  const data = [
    {
      id: 1,
      planName: "Basic Plan",
      description:
        "The argument in favor of using to filler text goes something.",
      price: "$35",
      time: "Monthly",
      services1: "24/7 system monitoring",
      services2: "Security management",
      services3: "Secure finance backup",
      services4: "Remote support",
    },
    {
      id: 2,
      planName: "Standard Plan",
      description:
        "The argument in favor of using to filler text goes something.",
      price: "$56",
      time: "Monthly",
      services1: "24/7 system monitoring",
      services2: "Security management",
      services3: "Secure finance backup",
      services4: "Remote support",
    },
    {
      id: 3,
      planName: "Standard Plan",
      description:
        "The argument in favor of using to filler text goes something.",
      price: "$75",
      time: "Monthly",
      services1: "24/7 system monitoring",
      services2: "Security management",
      services3: "Secure finance backup",
      services4: "Remote support",
    },
  ];

  return new Response(JSON.stringify(data));
}
