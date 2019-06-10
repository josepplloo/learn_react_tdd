import React from "react";
import { render, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Joke from '../joke';
import JokeGenerator from '../jokeGenerator';


test("Should allow Joke component recives props and then render text", () => {
  const {getByTestId} = render (
    <Joke text="The funnies joke in the year."></Joke>
  );

  expect(getByTestId("joke-text")).toHaveTextContent("The funnies joke in the year.") 
});

test("Should fetches a random joke (component) and render it", () =>{
  const {getByText} = render (
    <JokeGenerator />
  );

  expect(getByText("You haven't loaded any jokes yet!")).toBeInTheDocument();

  fireEvent.click(getByText("Load a random joke"));

  expect(getByText("Loading...")).toBeInTheDocument ();

})