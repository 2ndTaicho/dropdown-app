import React, { Component } from "react"; // This import statement allows access to the React library

export default class CurrencyInput extends Component {
  // Stateless component declaration
  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          placeholder="Enter amount in dollars"
          value={this.props.currency}
          onChange={this.props.handleChange}
        />
        {/*Input element that is used to enter the currency that is going to be converted
         */}
      </div>
    );
  }
}
