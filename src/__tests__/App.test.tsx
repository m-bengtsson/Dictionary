import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";

import mockedWord from "./mockedWord.json";
import App from "../App";
import Searchbar from "../components/Searchbar";

// Mocked Server to simulate APi requests
const server = setupServer(
  rest.get(
    "https://api.dictionaryapi.dev/api/v2/entries/en/hello",
    (_req, res, ctx) => {
      return res(ctx.json(mockedWord));
    }
  ),
  rest.get(
    "https://api.dictionaryapi.dev/api/v2/entries/en/asdfg",
    (_req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),
  rest.get(
    "https://api.dictionaryapi.dev/api/v2/entries/en/error",
    (req, res, ctx) => {
      return res(ctx.status(500));
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

it("should display the word 'Dictionary", () => {
  render(<App />);
  // Get the text "Dictionary" and expect it to be visible
  expect(screen.getByText("Free Dictionary")).toBeVisible();
});

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

// Tests if the searched word is displayed when submitting an existing word from the API. The properties tested are word, definition, phonetic, and partOfScpeech
it("should render the searched word 'hello' and some of its properties", async () => {
  render(<App />);
  // Make a user to simulate user-activity
  const user = userEvent.setup();

  const input = screen.getByPlaceholderText("search for a word..");
  expect(input).toBeInTheDocument();

  await user.type(input, "hello");
  const searchIcon = screen.getByLabelText("search-icon");

  await user.click(searchIcon);
  expect(screen.getByText("hello")).toBeInTheDocument();
  expect(screen.getByText("greeting")).toBeInTheDocument();
  expect(screen.getByText("/həˈləʊ/")).toBeInTheDocument();
  expect(screen.getByText("1. noun")).toBeInTheDocument();
  expect(screen.getByText('* "Hello!" or an equivalent greeting.')).toBeInTheDocument();

});

it("should clear the input when a search has been made", async () => {
  render(<App />);
  const user = userEvent.setup();

  const input = screen.getByPlaceholderText("search for a word..");
  await user.type(input, "hello");

  const searchIcon = screen.getByLabelText("search-icon");

  await user.click(searchIcon);
  expect(input).toHaveValue("");
});

// Test displaying error message when searching a word that is not in the api
it("should render 'Sorry pal, we couldn't find definitions for the word you were looking for.'", async () => {
  render(<App />);
  const user = userEvent.setup();

  const input = screen.getByPlaceholderText("search for a word..");
  await user.type(input, "asdfg");

  const searchIcon = screen.getByLabelText("search-icon");
  user.click(searchIcon);

  // Wait for api response
  await waitFor(() => {
    expect(
      screen.getByText(
        "Sorry pal, we couldn't find definitions for the word you were looking for."
      )
    ).toBeInTheDocument();
  });
});

it("should play the audio correctly", async () => {
  // Mock calling the play method on the audio element
  const playMock = vi.fn();
  vi.spyOn(global.HTMLAudioElement.prototype, "play").mockImplementation(
    playMock
  );

  render(<App />);
  const user = userEvent.setup();

  const input = screen.getByPlaceholderText("search for a word..");
  await user.type(input, "hello");

  const searchIcon = screen.getByLabelText("search-icon");
  await user.click(searchIcon);

  const audioIconList = await screen.findAllByLabelText("audio-icon");
  expect(audioIconList.length).toBeGreaterThan(0);

  const audioIcon = audioIconList[0];
  expect(audioIcon).toBeInTheDocument();

  await user.click(audioIcon);
  expect(playMock).toHaveBeenCalled();
});

it("should handle internal server error by showing error message'Failed to fetch data'", async () => {
  render(<App />);
  const user = userEvent.setup();

  const input = screen.getByPlaceholderText("search for a word..");
  await user.type(input, "error");

  const searchIcon = screen.getByLabelText("search-icon");
  await user.click(searchIcon);

  expect(screen.getByText("Failed to fetch data")).toBeInTheDocument();
});

it("should render searchbar with placeholder text 'search for a word..' when there is no input", () => {
  render(
    <Searchbar searchedWord="" setSearchedWord={() => {}} onSubmit={() => {}} />
  );
  const inputElement = screen.getByPlaceholderText("search for a word..");
  expect(inputElement).toBeInTheDocument();
});
