import React, { Component } from "react"; // This import statement allows access to the React library

export default class CurrencyOutput extends Component {
  // Stateless component declaration

  render() {
    const currency = this.props.currency; // Declaring a constant for the state of currency
    const sign = this.props.sign; // Declaring a constant for unit of the currency

    // If the state of currency is not a number then this component should just
    // return an empty string because nothing is being converted
    //else it should return a label with the converted currency together with its unit

    if (currency === "NaN") {
      return "";
    } else
      return (
        <div className="output">
          <label>
            {sign}
            {currency}
          </label>
        </div>
      );
  }
}
