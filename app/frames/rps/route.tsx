/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {
  // The added context from the middleware will be available on `ctx` here
  if (!ctx.message?.isValid) {
    throw new Error("Invalid message");
  }

  let state = ctx.state;
  const choice = ctx.searchParams.choice;
  const cpuChoice = Math.floor(Math.random() * 3);

  const win = () => {
    state = { ...state, pScore: state.pScore + 1 };
  };

  const lose = () => {
    state = { ...state, cScore: state.cScore + 1 };
  };

  switch (choice) {
    case "r":
      if (cpuChoice === 1) lose;
      else if (cpuChoice === 2) win;
      break;
    case "p":
      if (cpuChoice === 2) lose;
      else if (cpuChoice === 0) win;
      break;
    case "s":
      if (cpuChoice === 0) lose;
      else if (cpuChoice === 1) win;
      break;
  }

  return {
    image: (
      <div tw="flex">
        {choice && (
          <p>
            {choice === "r" ? "🪨" : choice === "p" ? "📄" : "✂️"} vs{" "}
            {cpuChoice === 0 ? "🪨" : cpuChoice === 1 ? "📄" : "✂️"}
          </p>
        )}
        <p>You: {state.pScore}</p>
        <p>CPU: {state.cScore}</p>
      </div>
    ),
    imageOptions: { aspectRatio: "1:1" },
    buttons: [
      <Button action="post" target="/">
        HOME
      </Button>,
      <Button
        action="post"
        target={{ query: { choice: "r" }, pathname: "/rps" }}>
        🪨
      </Button>,
      <Button
        action="post"
        target={{ query: { choice: "p" }, pathname: "/rps" }}>
        📄
      </Button>,
      <Button
        action="post"
        target={{ query: { choice: "s" }, pathname: "/rps" }}>
        ✂️
      </Button>,
    ],
  };
});
