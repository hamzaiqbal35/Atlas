import { NextRequest, NextResponse } from "next/server";
import { getLatestPapers } from "@/lib/arxiv";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Missing query parameter" }, { status: 400 });
  }

  try {
    const papers = await getLatestPapers(query, 5);
    return NextResponse.json(papers);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch papers" }, { status: 500 });
  }
}
