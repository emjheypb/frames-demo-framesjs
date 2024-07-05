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
    image: <div tw="flex">Count: {state.count}</div>,
    buttons: [
      <Button
        action="post"
        target={{ query: { foo: "wazzaaaaap?!" }, pathname: "/route1" }}
      >
        Go to route 1
      </Button>,
      <Button action="post" target="/route2">
        Go to route 2
      </Button>,
      <Button action="post" target={{ query: { action: "increment" } }}>
        Increment
      </Button>,
      <Button action="post" target={{ query: { action: "decrement" } }}>
        Decrement
      </Button>,
    ],
    state,
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
