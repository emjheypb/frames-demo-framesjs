import { fetchMetadata } from "frames.js/next";

export async function generateMetadata() {
  return {
    title: "Frames Demo",
    openGraph: {
      title: "Frames Demo",
    },
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL(
        "/frames",
        process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000"
      )
    ),
  };
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      My existing page
    </main>
  );
}
