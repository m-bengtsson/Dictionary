import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";
import mockedWord from "./mockedWord.json"

import App from "../App";

// Mocked Server to simulate APi requests
const server = setupServer(
  rest.get(
    "https://api.dictionaryapi.dev/api/v2/entries/en/hello",
    (_req, res, ctx) => {
      return res(
        ctx.json(mockedWord)
      );
    }
  ),
  rest.get(
   "https://api.dictionaryapi.dev/api/v2/entries/en/asdfg",(_req, res, ctx)=> {;
      return res(ctx.status(404));
   })
);

beforeAll(() => server.listen());
afterAll(() => server.close());



// Tests if header "Dictionary" is visible on the page
it("should display the word 'Dictionary", () => {
  render(<App />);
  // Get the text "Dictionary" and expect it to be visible
  expect(screen.getByText("Free Dictionary")).toBeVisible();
});

// Tests if the page displays an error message when user hit search before entering a word.
it("should display 'Please enter a word to search for definitions.'  when the search button is clicked without entering a word", async () => {
  render(<App />);

  const searchIcon = screen.getByLabelText("search-icon");
  expect(searchIcon).toBeInTheDocument();
  // Wait for user to click on Search-button
  await userEvent.click(searchIcon);
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
  expect(input).toBeInTheDocument();

  // Wait for user to enter a word
  await user.type(input, "hello");

  const searchIcon = screen.getByLabelText("search-icon");
  screen.debug()
  // Wait for user to click on Search-button and expect "hello" to be rendered
  await user.click(searchIcon);
  expect(screen.getByText("hello")).toBeInTheDocument();
});

it("should render 'Sorry pal, we couldn't find definitions for the word you were looking for.'", async() => {
   render(<App/>)
     // Make a user to simulate user-activity
  const user = userEvent.setup();
  const input = screen.getByPlaceholderText("search for a word..");

  // Wait for user to enter a word
  await user.type(input, "asdfg");

  const searchIcon = screen.getByLabelText("search-icon");
  // Wait for user to click on Search-button and expect "hello" to be rendered
  user.click(searchIcon);

  await waitFor( () => {
    expect(screen.getByText("Sorry pal, we couldn't find definitions for the word you were looking for.")).toBeInTheDocument();
  })
})