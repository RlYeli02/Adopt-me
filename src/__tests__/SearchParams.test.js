import React from "react";
import { render, cleanup } from "@testing-library/react";
import pet, { _breeds, _dogs, ANIMALS } from "@frontendmasters/pet";
import SearchParams from "../SearchParams";

afterEach(cleanup);

test("SearchParams", async () => {
  const { getByTestId } = render(<SearchParams />);

  const animalDropdown = getByTestId("use-dropdown-animal");
  expect(animalDropdown.children.length).toBe(ANIMALS.length + 1 );

  expect(pet.breeds).toHaveBeenCalled();
  const breedDropdown = getByTestId("use-dropdown-breed");
  expect(breedDropdown.children.length).toBe(_breeds.length +1);// el select de dropdown de option all le suma 7 a breeds

  
});