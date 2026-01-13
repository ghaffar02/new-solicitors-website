import { NextResponse } from "next/server";

export const revalidate = 21600;

type PlacesReview = {
  rating?: number;
  text?: { text?: string };
  publishTime?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

export async function GET() {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.CONQUEST_PLACE_ID;
  if (!key || !placeId) {
    return NextResponse.json(
      { error: "Missing GOOGLE_MAPS_API_KEY or CONQUEST_PLACE_ID" },
      { status: 500 }
    );
  }

  const fields = [
    "rating",
    "userRatingCount",
    "reviews.authorAttribution",
    "reviews.rating",
    "reviews.text",
    "reviews.publishTime",
  ].join(",");

  const url = `https://places.googleapis.com/v1/places/${placeId}?fields=${encodeURIComponent(
    fields
  )}&key=${key}`;
  const res = await fetch(url, {
    headers: { "X-Goog-FieldMask": fields },
    cache: "no-store",
  });

  if (!res.ok) {
    const detail = await res.text();
    return NextResponse.json(
      { error: "Places API error", detail },
      { status: 502 }
    );
  }

  const json = await res.json();

  const reviews: PlacesReview[] = json?.reviews ?? [];
  const normalized = reviews.map((r) => ({
    authorName: r.authorAttribution?.displayName || "Google user",
    authorUri: r.authorAttribution?.uri,
    authorPhotoUri: r.authorAttribution?.photoUri,
    rating: r.rating || 0,
    dateISO: r.publishTime || "",
    text: r.text?.text || "",
  }));

  return NextResponse.json({
    rating: json?.rating ?? null,
    userRatingCount: json?.userRatingCount ?? 0,
    reviews: normalized,
  });
}
