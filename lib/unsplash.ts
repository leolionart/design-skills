import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || "",
});

export type UnsplashPhoto = {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string | null;
  user: {
    name: string;
    username: string;
    links: {
      html: string;
    };
  };
};

/**
 * Search Unsplash photos by query
 */
export async function searchPhotos(
  query: string,
  page: number = 1,
  perPage: number = 1
): Promise<UnsplashPhoto[]> {
  try {
    const result = await unsplash.search.getPhotos({
      query,
      page,
      perPage,
      orientation: "landscape",
    });

    if (result.errors) {
      console.error("Unsplash API errors:", result.errors);
      return [];
    }

    return result.response?.results || [];
  } catch (error) {
    console.error("Failed to search Unsplash photos:", error);
    return [];
  }
}

/**
 * Get a random photo by topic
 */
export async function getRandomPhoto(query: string): Promise<UnsplashPhoto | null> {
  try {
    const result = await unsplash.photos.getRandom({
      query,
      orientation: "landscape",
    });

    if (result.errors) {
      console.error("Unsplash API errors:", result.errors);
      return null;
    }

    return Array.isArray(result.response) ? result.response[0] : result.response;
  } catch (error) {
    console.error("Failed to get random Unsplash photo:", error);
    return null;
  }
}

/**
 * Trigger download event (required by Unsplash API guidelines)
 */
export async function triggerDownload(downloadLocation: string): Promise<void> {
  try {
    await fetch(downloadLocation);
  } catch (error) {
    console.error("Failed to trigger Unsplash download:", error);
  }
}
