import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const subscribers = await sql`SELECT * FROM newslettersubscribers`;
    console.log("Subscribers retrieved successfully", subscribers);
    return NextResponse.json(subscribers);
  } catch (error) {
    console.log(error);
    return NextResponse.json("error");
  }
}
