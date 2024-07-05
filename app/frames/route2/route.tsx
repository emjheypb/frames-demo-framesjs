/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async (cntxt) => {
  let state = cntxt.state;
  let message = cntxt.message?.inputText ? `${cntxt.message?.inputText}` : "";

  return {
    image: (
      <div tw="flex">
        The count is {state.count}. The word is: {message || "NOTHING"}
      </div>
    ),
    buttons: [
      <Button action="post" target="/route1">
        ROUTE 1
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
