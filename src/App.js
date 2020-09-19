import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

/* en los corchetes significa que es lo basico que queremos importar. solo queremos a render,
el cual reemplazara a reactdom*/
/* igual que de pet solo queremos la funcion pet solo tenemos que poner import { Pet } from "./Pet";, como lo queremos
todo ponemos Pet en general */
/*
basicamente solo se pone entre corchete el metodo que se quiere importar
 */
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
