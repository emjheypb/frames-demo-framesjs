import { farcasterHubContext } from "frames.js/middleware";
import { createFrames } from "frames.js/next";

export type State = {
  count: number;
  pScore: number;
  cScore: number;
};

export const frames = createFrames({
  basePath: "/frames",
  initialState: {
    count: 0,
    pScore: 0,
    cScore: 0,
  },
  middleware: [farcasterHubContext()],
});
