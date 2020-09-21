import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("seattle, WA");

  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  console.log(pet);

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: ApiBreeds }) => {
      const breedStrings = ApiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]); // this breeds is diferently to the breeds of const breeds

  return (
    <div className="search-params">
      <form>
        <label htmlFor="locationn">
          Location
          <input
            id="locationn"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            onBlur={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />

        <button>Submit</button>
      </form>
    </div>
  );
};
// donde esta animals.map se puede poner animal =>() en vez de animal=>{}, lo unico que si se pone corchete debe ir return
export default SearchParams;
