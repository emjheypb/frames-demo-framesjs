import { createFrames } from "frames.js/next";

export type State = {
  count: number;
};

export const frames = createFrames({
  basePath: "/frames",
  baseUrl: process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000",
  initialState: {
    count: 0,
  },
});
