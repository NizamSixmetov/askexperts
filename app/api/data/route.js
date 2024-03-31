// import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
// import data from "./mockdata";

// import { NextResponse } from "next/server";
// import { useSearchParams } from "next/navigation";

// export async function GET(request) {
//   return new Response(JSON.stringify(data));
// }

// import { data } from "./mockdata";
// export async function GET(request, context: {params}) {
//   const team = context.params.team
// }

// export async function GET(request) {
//   const team = context.params.team;
// }

// export default function GET(req, res) {
//   res.status(200).json(data);
// }

// export async function GET(req, res) {
//   // const { searchParams } = new URL(req.url);
//   const { pid } = req.query;
//   res.end(`data: ${pid}`);

//   return NextResponse.json(data);
// }

import { NextResponse } from "next/server";
import data from "./mockdata";

export async function GET(req) {
  return NextResponse.json(data);
}
