//import React, { createContext, useContext, useReducer } from "react";
import { observable, computed } from "mobx";
import { createContext } from "react";

class Store {
  @observable cities = [
    { name: "Penrith", state: "NSW", country: "Australia" },
    { name: "Hornsby", state: "NSW", country: "Australia" },
    { name: "Manly", state: "NSW", country: "Australia" },
    { name: "Melbourne", state: "VIC", country: "Australia" },
    { name: "Geelong", state: "VIC", country: "Australia" },
    { name: "Meldora", state: "VIC", country: "Australia" },
    { name: "Brisbane", state: "QLD", country: "Australia" },
    { name: "Goldcost", state: "QLD", country: "Australia" },
    { name: "Townsville", state: "QLD", country: "Australia" },
    { name: "Perth", state: "WA", country: "Australia" },
    { name: "Portheadland", state: "WA", country: "Australia" },
    { name: "Hobart", state: "TAS", country: "Australia" },
    { name: "Canberra", state: "ACT", country: "Australia" },
    { name: "Darwin", state: "NT", country: "Australia" }
  ];

  // [{city, state, count}]
  @observable cases = [{ city: "", state: "", count: 0 }];

  @observable states = [{ name: "", count: 0 }];

  @computed get countryCount() {
    var count = 0;
    this.cases.map(c => {
      return (count += c.count);
    });

    return count;
  }

  getStates = country => {
    var cities = this.cities.filter(c => {
      return c.country === country;
    });

    const states = cities
      .filter(c => c.country === country)
      .map(obj => {
        return obj.state;
      });

    let uniqueStates = [...new Set(states)];
    return uniqueStates;
  };

  addCase(city, stateName) {
    this.updateCity(city, stateName, "increment");
  }

  removeCase(city, stateName) {
    this.updateCity(city, stateName, "decrement");
  }

  getStateCities = state => {
    var filteredCities = this.cities.filter(c => {
      return c.state === state;
    });

    return filteredCities;
  };

  getStateCount = state => {
    var cities = this.cases.filter(c => {
      return c.state === state;
    });

    var count = 0;
    cities.map(c => {
      return (count += c.count);
    });

    return count;
  };

  getCityCases = city => {
    var result = this.cases.filter(c => {
      return c.city === city;
    });

    return result && result.length > 0 ? result[0].count : 0;
  };

  updateCity(city, state, action) {
    const index = this.cases.findIndex(e => e.city === city);

    if (index === -1) {
      this.cases.push({ city: city, count: 1, state: state });
    } else {
      if (action === "increment") {
        this.cases[index].count += 1;
      } else {
        this.cases[index].count -= 1;
      }
    }
  }
}

const StoreContext = createContext(new Store());
export default StoreContext;
