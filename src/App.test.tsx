import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";

import App from "./App";
const server = setupServer(
  rest.get(
    "https://api.dictionaryapi.dev/api/v2/entries/en/hello",
    (_req, res, ctx) => {
      return res(
        ctx.json([
          {
            word: "hello",
            phonetic: "hələʊ",
            phonetics: [
              {
                text: "hələʊ",
                audio:
                  "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3",
              },
              {
                text: "hɛləʊ",
              },
            ],
            origin:
              "early 19th century: variant of earlier hollo ; related to holla.",
            meanings: [
              {
                partOfSpeech: "exclamation",
                definitions: [
                  {
                    definition:
                      "used as a greeting or to begin a phone conversation.",
                    example: "hello there, Katie!",
                    synonyms: [],
                    antonyms: [],
                  },
                ],
              },
              {
                partOfSpeech: "verb",
                definitions: [
                  {
                    definition: "say or shout.",
                    example: "I pressed the phone button and helloed",
                    synonyms: [],
                    antonyms: [],
                  },
                ],
              },
            ],
          },
        ])
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

it("should display the word 'Dictionary", () => {
  render(<App />);
  const message = screen.queryByText("Dictionary");
  expect(message).toBeVisible();
});

it("should display 'Please enter a word to search for definitions.' when user click search before entering a word", async () => {
  render(<App />);
  const user = userEvent.setup();
  expect(screen.queryByText("Dictionary")).toBeVisible();
  const searchButton = screen.getByRole("button", {
    name: "Search",
  });

  await user.click(searchButton);
  expect(
    screen.queryByText("Please enter a word to search for definitions.")
  ).toBeVisible();
});
