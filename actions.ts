"use server";
import { sql } from "@vercel/postgres";

export async function addSubscriber(email: string) {
  console.log("Adding subscriber to database");

  try {
    await sql`INSERT INTO newslettersubscribers (email) VALUES (${email})`;
    console.log("Subscriber added successfully");
  } catch (error) {
    console.log(error);
  }
}
