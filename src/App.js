import React from "react";
import "./styles.css";
import Country from "./Country";

const CasesContext = React.createContext();

const App = () => {
  return (
    <div className="App">
      <Country name="Australia" />
    </div>
  );
};

export { App, CasesContext };
