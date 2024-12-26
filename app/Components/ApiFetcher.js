// // apiFetcher.js
// export async function fetchAllData() {
//   const urls = [
//     "https://askexpressdata.vercel.app/aboutPricing/",
//     "https://askexpressdata.vercel.app/blogNewsData/",
//     "https://askexpressdata.vercel.app/clientData/",
//     "https://askexpressdata.vercel.app/data/",
//     "https://askexpressdata.vercel.app/homeBlog/",
//     "https://askexpressdata.vercel.app/HomeProccess/",
//     "https://askexpressdata.vercel.app/projectNumber/",
//     "https://askexpressdata.vercel.app/servicesSingleData/",
//     "https://askexpressdata.vercel.app/teamData/",
//     "https://askexpressdata.vercel.app/teamFullData/",
//   ];

//   const fetchData = async (url) => {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch ${url}`);
//     }
//     return response.json();
//   };

//   const results = await Promise.all(urls.map(fetchData));
//   return {
//     aboutPricing: results[0],
//     blogNewsData: results[1],
//     clientData: results[2],
//     data: results[3],
//     homeBlog: results[4],
//     homeProccess: results[5],
//     projectNumber: results[6],
//     servicesSingleData: results[7],
//     teamData: results[8],
//     teamFullData: results[9],
//   };
// }
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
    // Отправляем запросы параллельно
    const responses = await Promise.all(urls.map((url) => fetch(url)));

    // Проверяем каждый ответ и извлекаем JSON
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

    return results; // Возвращаем массив данных
  } catch (error) {
    console.error("Ошибка:", error.message);
    throw error; // Пробрасываем ошибку для обработки
  }
}

// Вызываем функцию и выводим результат
ApiFetcher()
  .then((data) => {
    console.log("Данные:", data);
  })
  .catch((error) => {
    console.error("Ошибка при вызове ApiFetcher:", error.message);
  });
