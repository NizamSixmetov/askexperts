import data from "../mockData";
import { NextResponse } from "next/server";

export async function GET(req) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  const item = data.find((item) => item.id == id);

  return NextResponse.json(item);
}
