const urls = [
  "https://askexpressdata.vercel.app/aboutPricing/",
  "https://askexpressdata.vercel.app/blogNewsData/",
  "https://askexpressdata.vercel.app/clientData/",
  "https://askexpressdata.vercel.app/data/",
  "https://askexpressdata.vercel.app/homeBlog/",
  "https://askexpressdata.vercel.app/HomeProccess/",
  "https://askexpressdata.vercel.app/projectNumber/",
  "https://askexpressdata.vercel.app/servicesSingleData/",
  "https://askexpressdata.vercel.app/teamData/",
  "https://askexpressdata.vercel.app/teamFullData/",
];

export default async function ApiFetcher() {
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const results = await Promise.all(
      responses.map((response) => {
        if (!response.ok) {
          throw new Error(
            `Ошибка при запросе к ${response.url}: ${response.statusText}`
          );
        }
        return response.json();
      })
    );

    return results;
  } catch (error) {
    console.error("Ошибка:", error.message);
    throw error;
  }
}

ApiFetcher()
  .then((data) => {
    console.log("Данные:", data);
  })
  .catch((error) => {
    console.error("Ошибка при вызове ApiFetcher:", error.message);
  });
