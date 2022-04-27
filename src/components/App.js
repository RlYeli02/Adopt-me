import React, { useState} from "react";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import Details from "./Details"



const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to ="/">Adopt me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
          
        </div>{" "}
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
