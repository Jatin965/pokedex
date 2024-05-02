export function absoluteUrl(path: string) {
  if (typeof window !== "undefined") return path;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`;
  return `http://localhost:${process.env.PORT ?? 3000}${path}`;
}

export function parseTypes(types: string): string[] {
  try {
    const parsed = JSON.parse(types);
    if (Array.isArray(parsed) && parsed.every((type) => typeof type === "string")) {
      return parsed;
    }
  } catch (error) {
    console.error("Failed to parse types", error);
  }
  return []; // Return an empty array if parsing fails or types are not as expected
}
