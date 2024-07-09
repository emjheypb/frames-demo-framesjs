import { fetchMetadata } from "frames.js/next";

export async function generateMetadata() {
  return {
    title: "New Format",
    description:
      "New format because the prev code doesn't work anymore for some reason",
    openGraph: {
      title: "New Format",
      description:
        "New format because the prev code doesn't work anymore for some reason",
      images: [`https://${process.env.NEXT_PUBLIC_SITE_URL}/human.png`],
    },
    // provide a full URL to your /frames endpoint
    other: {
      "fc:frame": "vNext",
      "fc:frame:image": `https://${process.env.NEXT_PUBLIC_SITE_URL}/human.png`,
      "fc:frame:image:aspect_ratio": "1:1",
      "fc:frame:button:1": `REGISTER`,
      "fc:frame:button:1:post_url": `https://${process.env.NEXT_PUBLIC_SITE_URL}/frames/register`,
      "fc:frame:button:2": `PLAY ROCK, PAPER, SCISSORS`,
      "fc:frame:button:2:post_url": `https://${process.env.NEXT_PUBLIC_SITE_URL}/frames/rps`,
      "fc:frame:input:text": `Email Address`,
      ...(await fetchMetadata(
        new URL("/frames", `https://${process.env.NEXT_PUBLIC_SITE_URL}`)
      )),
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
