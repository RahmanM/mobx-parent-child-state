import React from "react";
import "./styles.css";
import State from "./State";
import StoreContext from "./store";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

const Country = observer(props => {
  const store = useContext(StoreContext);

  var states = store.getStates(props.name);
  var statesList = states.map(s => {
    return <State key={s} name={s} />;
  });

  return (
    <div className="country">
      <div className="title">
        {props.name} ({store.countryCount}){" "}
      </div>

      {statesList}
    </div>
  );
});

export default Country;
