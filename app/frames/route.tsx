/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";

const frameHandler = frames(async (ctx) => {
  let state = ctx.state;

  switch (ctx.searchParams.action) {
    case "increment":
      state = { ...state, count: state.count + 1 };
      break;
    case "decrement":
      state = { ...state, count: state.count - 1 };
      break;
  }

  return {
    image: <div tw="flex">The count is {state.count}.</div>,
    buttons: [
      <Button
        action="post"
        target={{ query: { foo: "Hello" }, pathname: "/route1" }}
      >
        ROUTE 1
      </Button>,
      <Button action="post" target="/route2">
        ROUTE 2
      </Button>,
      <Button action="post" target={{ query: { action: "increment" } }}>
        +
      </Button>,
      <Button action="post" target={{ query: { action: "decrement" } }}>
        -
      </Button>,
    ],
    state,
    textInput: "TEXT FOR ROUTE 2",
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
