import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";

import App from "./App";

// Mocked Server to simulate APi requests
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

// Tests if header "Dictionary" is visible on the page
it("should display the word 'Dictionary", () => {
  render(<App />);
  // Get the text "Dictionary" and expect it to be visible
  expect(screen.getByText("Dictionary")).toBeVisible();
});

// Tests if the page displays an error message when user hit search before entering a word.
it("should display 'Please enter a word to search for definitions.'  when the search button is clicked without entering a word", async () => {
  render(<App />);

  expect(screen.getByText("Dictionary")).toBeVisible();
  const searchButton = screen.getByRole("button", {
    name: "Search",
  });
  // Wait for user to click on Search-button
  await userEvent.click(searchButton);
  expect(
    screen.getByText("Please enter a word to search for definitions.")
  ).toBeVisible();
});

// Tests if the searched word is displayed when submitting an existing word from the API
it("should render the searched word 'hello' if it exists", async () => {
  render(<App />);
  // Make a user to simulate user-activity
  const user = userEvent.setup();
  const input = screen.getByPlaceholderText("search for a word..");

  // Wait for user to enter a word
  await user.type(input, "hello");

  const searchButton = screen.getByRole("button", {
    name: "Search",
  });
  // Wait for user to click on Search-button and expect "hello" to be rendered
  await user.click(searchButton);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
