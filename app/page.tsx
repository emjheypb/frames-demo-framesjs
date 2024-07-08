import { fetchMetadata } from "frames.js/next";
import { Metadata } from "next";

export async function generateMetadata() {
  return {
    title: "New Format",
    description:
      "New format because the prev code doesn't work anymore for some reason",
    openGraph: {
      title: "New Format",
      description:
        "New format because the prev code doesn't work anymore for some reason",
      images: [
        `${
          process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : "http://localhost:3000"
        }/vercel.svg`,
      ],
    },
    // provide a full URL to your /frames endpoint
    other: {
      "fc:frame": "vNext",
      "fc:frame:image": `${
        process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000"
      }/vercel.svg`,
      "fc:frame:post_url": `${
        process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000"
      }/frames`,
      "fc:frame:button:1": `Start`,
    },
  };
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello, world!
    </main>
  );
}
