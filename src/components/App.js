import React, { useState} from "react";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import Details from "./Details"

/* en los corchetes significa que es lo basico que queremos importar. solo queremos a render,
el cual reemplazara a reactdom*/
/* igual que de pet solo queremos la funcion pet solo tenemos que poner import { Pet } from "./Pet";, como lo queremos
todo ponemos Pet en general */
/*
basicamente solo se pone entre corchete el metodo que se quiere importar
 */


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
