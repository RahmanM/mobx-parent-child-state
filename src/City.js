import "./styles.css";
import React from "react";
import { useContext } from "react";
import StoreContext from "./store";
import { observer } from "mobx-react-lite";

const City = observer(props => {
  const store = useContext(StoreContext);

  return (
    <div className="child city">
      <span className="city-title"> {props.name} </span>
      <span className="city-cases">
        Cases: ({store.getCityCases(props.name, props.stateName)}){" "}
      </span>

      <span className="city-buttons">
        <span>
          <button
            onClick={() => {
              store.addCase(props.name, props.stateName);
            }}
          >
            Add Case{" "}
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              store.removeCase(props.name, props.stateName);
            }}
          >
            Remove Case
          </button>
        </span>
      </span>
    </div>
  );
});

export default City;
