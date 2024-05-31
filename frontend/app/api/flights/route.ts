import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const leaving = searchParams.get("leaving");
  const going = searchParams.get("going");
  const departing = searchParams.get("departing");

  console.log(
    `Received params: leaving=${leaving}, going=${going}, departing=${departing}`
  );

  const params = new URLSearchParams({
    leaving: leaving || "",
    going: going || "",
    departing: departing || "",
  }).toString();

  try {
    const response = await fetch(`http://localhost:8000/api/flights?${params}`);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Erro ao conectar ao backend" },
      { status: 500 }
    );
  }
}
