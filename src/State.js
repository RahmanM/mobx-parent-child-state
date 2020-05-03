import React, { useContext } from "react";
import City from "./City";
import StoreContext from "./store";
import { observer } from "mobx-react-lite";
import "./styles.css";

const State = observer(props => {
  const store = useContext(StoreContext);

  const selectedCitiesDivs = store
    .getStateCities(props.name)
    .map((city, index) => {
      return (
        <div>
          <City key={index} name={city.name} stateName={props.name} />
        </div>
      );
    });

  return (
    <div className="child state">
      <div className="title state-name">
        {props.name + " (" + store.getStateCount(props.name) + ")"}
      </div>
      <div>{selectedCitiesDivs}</div>
    </div>
  );
});

export default State;
