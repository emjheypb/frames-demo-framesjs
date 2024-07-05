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
        <p>
          {foo} {ctx.message?.requesterUserData?.username}
        </p>
        <p>{ctx.message?.requesterUserData?.username}</p>
        <p>
          {ctx.message?.requesterFid} - {ctx.message?.connectedAddress}
        </p>
      </div>
    ), // foo: bar
    buttons: [
      <Button action="post" target="/route2">
        ROUTE 2
      </Button>,
      <Button action="post" target="/">
        HOME
      </Button>,
    ],
    imageOptions: {
      // Tell the client how long to cache the image for using the Cache-Control header
      headers: {
        "Cache-Control": "public, max-age=0",
      },
    },
  };
});
