import data from "./mockdata";
export async function GET(request) {
  const queryParams = new URL(request.url).searchParams;
  const limit = parseInt(queryParams.get("limit"));
  const limitedData = data.slice(0, limit);
  return new Response(JSON.stringify(limit ? limitedData : data));
}
