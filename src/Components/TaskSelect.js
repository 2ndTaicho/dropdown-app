import React, { Component } from "react"; // This import statement allows access to the React library
import CurrencyConverter from "./CurrencyConverter"; // Importing the CurrencyConverter component
import Win from "./Win"; // Importing the Win component

export default class TaskSelect extends Component {
  // Stateful component declaration
  render() {
    const state = this.props.state; // Declaring a constant and assigning the state that is in props to it

    {
      /* if the state that is in props is equals to currencyConverter then this component will render
    the currencyConverter component, if not this component will render the Win component*/
    }
    if (state === "CurrencyConverter") {
      return <CurrencyConverter />;
    } else {
      return <Win />;
    }
  }
}
