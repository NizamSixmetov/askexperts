import { NextResponse } from "next/server";
import data from "./mockdata";

export async function GET(req) {
  return NextResponse.json(data);
}
