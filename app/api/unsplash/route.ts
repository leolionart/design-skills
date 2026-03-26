import { NextRequest, NextResponse } from "next/server";
import { getRandomPhoto } from "@/lib/unsplash";

function picsumFallback(query: string) {
  const seed = encodeURIComponent(query.trim().toLowerCase().replace(/\s+/g, "-"));
  return `https://picsum.photos/seed/${seed}/1200/800`;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const mode = searchParams.get("mode");

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
  }

  try {
    const photo = await getRandomPhoto(query);
    const fallbackUrl = picsumFallback(query);

    if (!photo) {
      if (mode === "image") {
        return NextResponse.redirect(fallbackUrl, { status: 307 });
      }
      return NextResponse.json({
        id: `fallback-${query}`,
        url: fallbackUrl,
        fullUrl: fallbackUrl,
        altDescription: `Fallback image for ${query}`,
        photographer: {
          name: "Picsum",
          username: "picsum",
          link: "https://picsum.photos/",
        },
      });
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
    const fallbackUrl = picsumFallback(query);
    if (mode === "image") {
      return NextResponse.redirect(fallbackUrl, { status: 307 });
    }
    return NextResponse.json({
      id: `fallback-${query}`,
      url: fallbackUrl,
      fullUrl: fallbackUrl,
      altDescription: `Fallback image for ${query}`,
      photographer: {
        name: "Picsum",
        username: "picsum",
        link: "https://picsum.photos/",
      },
    });
  }
}
