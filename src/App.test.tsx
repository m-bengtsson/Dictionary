import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import App from "./App";
const server = setupServer(
  rest.get(
    "https://api.dictionaryapi.dev/api/v2/entries/en/hello",
    (_req, res, ctx) => {
      return res(
        ctx.json([{
         
        }])
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

it("should have hello world", () => {
  render(<App />);
  const message = screen.queryByText("Dictionary");
  expect(message).toBeVisible();
});
