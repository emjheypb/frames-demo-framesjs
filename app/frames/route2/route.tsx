/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async (cntxt) => {
  let state = cntxt.state;
  let message = cntxt.message?.inputText
    ? `, Typed: ${cntxt.message?.inputText}`
    : "";

  return {
    image: (
      <div tw="flex">
        <span>The count is {state.count}.</span>
        <span>{message}</span>
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
  };
});
