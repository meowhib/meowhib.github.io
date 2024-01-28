"use server";
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "51.178.87.24",
  database: "postgres",
  password: "hahamadafakasyss",
  port: 5432,
});

export async function addSubscriber(email: string) {
  console.log("Adding subscriber to database");

  try {
    await pool.query("INSERT INTO newslettersubscribers (email) VALUES ($1)", [
      email,
    ]);
    console.log("Subscriber added successfully");
    return { status: "success" };
  } catch (error) {
    console.log(error);
    return { status: "error" };
  }
}
