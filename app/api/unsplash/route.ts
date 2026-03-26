import { NextRequest, NextResponse } from "next/server";
import { getRandomPhoto } from "@/lib/unsplash";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const mode = searchParams.get("mode");

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
  }

  try {
    const photo = await getRandomPhoto(query);

    if (!photo) {
      return NextResponse.json({ error: "No photo found" }, { status: 404 });
    }

    if (mode === "image") {
      return NextResponse.redirect(photo.urls.regular, { status: 307 });
    }

    return NextResponse.json({
      id: photo.id,
      url: photo.urls.regular,
      fullUrl: photo.urls.full,
      altDescription: photo.alt_description,
      photographer: {
        name: photo.user.name,
        username: photo.user.username,
        link: photo.user.links.html,
      },
    });
  } catch (error) {
    console.error("Error fetching Unsplash photo:", error);
    return NextResponse.json({ error: "Failed to fetch photo" }, { status: 500 });
  }
}
