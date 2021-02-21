import React, { Component } from "react"; // This import statement allows access to the React library
import TaskSelect from "./Components/TaskSelect"; // Importing the TaskSelect component from the Components folder
import "./App.css"; // Importing local stylesheet file

export default class App extends Component {
  // Stateful component declaration
  constructor(props) {
    // Constructor declaration
    super(props);
    this.state = { value: "CurrencyConverter" }; // setting the value state to currencyConverter
    //this is going to be helpful with the choosing of different Components
  }

  handleChange = (event) => {
    //Defining a method which updates the state of value to the value of whatever element is selected
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <form>
          {/*This form is used to select the component that needs to be rendered */}
          <label>
            Pick your Task:
            <select value={this.state.value} onChange={this.handleChange}>
              {/*Setting the value of this select element to the value that is in state
              and attaching an event listener with the handleChange method attached to it */}
              <option value="CurrencyConverter">Currency Converter</option>
              {/*Select option element with CurrencyConverter as its value */}
              <option value="Win">Win!</option>
              {/*Select option element with Win as its value */}
            </select>
          </label>
        </form>

        <TaskSelect state={this.state.value} />
        {/*TaskSelect component with the state of value passed to it as a prop*/}
      </div>
    );
  }
}
