import data from "./mockData";
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json(data);
}
