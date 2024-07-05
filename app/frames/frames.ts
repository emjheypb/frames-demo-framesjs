import { farcasterHubContext } from "frames.js/middleware";
import { createFrames } from "frames.js/next";

export type State = {
  count: number;
};

export const frames = createFrames({
  basePath: "/frames",
  initialState: {
    count: 0,
  },
  middleware: [farcasterHubContext()],
});
