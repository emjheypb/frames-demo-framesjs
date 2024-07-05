/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {
  // The added context from the middleware will be available on `ctx` here
  if (!ctx.message?.isValid) {
    throw new Error("Invalid message");
  }

  const foo = ctx.searchParams.foo;

  return {
    image: (
      <div tw="flex">
        Route 1. {foo} {ctx.message?.requesterUserData?.username}
      </div>
    ), // foo: bar
    buttons: [
      <Button action="post" target="/route2">
        Go to route 2
      </Button>,
      <Button action="post" target="/">
        Go back
      </Button>,
    ],
  };
});
