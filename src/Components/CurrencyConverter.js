import React, { Component } from "react"; // This import statement allows access to the React library
import CurrencyOutput from "./CurrencyOutput"; // Importing the CurrencyOutput component
import CurrencyInput from "./CurrencyInput"; // Importing the CurrencyInput component

export default class CurrencyConverter extends Component {
  // Stateful component declaration
  constructor(props) {
    // Constructor declaration
    super(props);
    this.state = {
      currency: "",
    };
    // setting the currency state to an empty string
  }

  handleChange = (e) => {
    //Defining a method which updates the state of currency to the currency that is being inputed
    this.setState({
      currency: e.target.value,
    });
  };

  render() {
    const currency = this.state.currency;
    // Declaring a constant for the state of currency
    const rands = (parseInt(currency) * 16.86).toFixed(2);
    // Declaring a constant for the conversion of dollars to rands
    const euros = (parseInt(currency) / 1.13).toFixed(2);
    // Declaring a constant for the conversion of dollars to euros
    const pounds = (parseInt(currency) / 1.27).toFixed(2);
    // Declaring a constant for the conversion of dollars to pounds

    return (
      <div className="converterContainer">
        <h6 className="mainHeading"> Currency Converter</h6>

        <CurrencyInput
          currency={this.state.currency}
          handleChange={this.handleChange}
        />
        {/*CurrencyInput component which is used to enter the currency that
        is going to be converted. This component takes the state of currency
        and the handleChange method as props */}

        <CurrencyOutput currency={rands} sign={"R"} />
        <CurrencyOutput currency={euros} sign={"€"} />
        <CurrencyOutput currency={pounds} sign={"£"} />

        {/*CurrencyOutput components which are used to display the currencies that
        are converted. These components take the converted currencies constants
        and their respective currency units as props */}
      </div>
    );
  }
}
