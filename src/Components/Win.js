import React, { Component } from "react"; // This import statement allows access to the React library
import Card from "./Card"; // Importing the Card component
var randomNumber = Math.floor(Math.random() * 3) + 1; // Declaring a variable that stores a random number
//between 1 and 3
export default class Win extends Component {
  // Stateful component declaration
  constructor() {
    // Constructor declaration
    super();
    this.state = {
      cardOneFlipped: false, //Setting the state of card one to false
      cardTwoFlipped: false, //Setting the state of card two to false
      cardThreeFlipped: false, //Setting the state of card three to false
      anyCardFlipped: false, //Setting the state of anyCard to false
    };
  }
  handleClick1 = (e) => {
    //Defining a method which flips card one
    e.preventDefault();

    //If the state of anyCard is false that means that no card has been flipped over
    // and therefore the state of card one can be negated and set to true therefore
    //flipping card one and setting the state of anyCard flipped to true because card one
    // has been flipped.

    if (!this.state.anyCardFlipped) {
      this.setState((prevState) => ({
        cardOneFlipped: !prevState.cardOneFlipped,
        anyCardFlipped: true,
      }));
    }
  };
  handleClick2 = (e) => {
    //Defining a method which flips card two
    e.preventDefault();
    //If the state of anyCard is false that means that no card has been flipped over
    // and therefore the state of card two can be negated and set to true therefore
    //flipping card two and setting the state of anyCard flipped to true because card two
    // has been flipped.

    if (!this.state.anyCardFlipped) {
      this.setState((prevState) => ({
        cardTwoFlipped: !prevState.cardTwoFlipped,
        anyCardFlipped: true,
      }));
    }
  };
  handleClick3 = (e) => {
    //Defining a method which flips card three
    e.preventDefault();
    //If the state of anyCard is false that means that no card has been flipped over
    // and therefore the state of card three can be negated and set to true therefore
    //flipping card three and setting the state of anyCard flipped to true because card three
    // has been flipped.
    if (!this.state.anyCardFlipped) {
      this.setState((prevState) => ({
        cardThreeFlipped: !prevState.cardThreeFlipped,
        anyCardFlipped: true,
      }));
    }
  };

  tryAgain = (e) => {
    //Defining a method which resets the states of the cards to false
    e.preventDefault();
    randomNumber = Math.floor(Math.random() * 3) + 1; //Generating a new random number between one and three

    //Checking if any card has been flipped over. if so then reset all the card states to false
    if (this.state.cardOneFlipped) {
      this.setState({
        cardOneFlipped: false,
        anyCardFlipped: false,
      });
    } else if (this.state.cardTwoFlipped) {
      this.setState({
        cardTwoFlipped: false,
        anyCardFlipped: false,
      });
    } else if (this.state.cardThreeFlipped) {
      this.setState({
        cardThreeFlipped: false,
        anyCardFlipped: false,
      });
    }
  };

  quit = (e) => {
    //Defining a method which resets the states of the cards to false
    e.preventDefault();
    //Checking if any card has been flipped over. if so then reset all the card states to false
    if (this.state.cardOneFlipped) {
      this.setState({
        cardOneFlipped: false,
        anyCardFlipped: false,
      });
    } else if (this.state.cardTwoFlipped) {
      this.setState({
        cardTwoFlipped: false,
        anyCardFlipped: false,
      });
    } else if (this.state.cardThreeFlipped) {
      this.setState({
        cardThreeFlipped: false,
        anyCardFlipped: false,
      });
    }
  };

  render() {
    const winMessage = "You  have won a R1000 voucher :)"; // Declaring constant for the win message
    const loseMessage = "Sorry No Prize :("; // Declaring constant for the lose message

    //The random number that was generated will be used to determine the sequence of the
    //cards.The number ensures that the sequence of the cards is always random

    console.log(randomNumber);
    if (randomNumber === 3) {
      //If the random number is equals to 3, the winning card will be on the left side
      return (
        <div className="gameContainer">
          {/*A div that contains the whole game */}
          <div className="gameHeading">
            {/*A div that contains the heading for the game */}
            <h5>
              {" "}
              Welcome to the Win game click any card and stand a chance to win a
              voucher
            </h5>
          </div>
          <div className="buttonsContainer">
            {/*A div that contains the buttons */}
            <button
              className={this.state.anyCardFlipped ? " active" : "tryAgainBtn"}
              onClick={this.tryAgain}
            >
              Try Again
            </button>
            {/*The try again button*/}
            <button className="quitBtn" onClick={this.quit}>
              Quit
            </button>
            {/*The quit button*/}
          </div>
          <div className="cardContainer">
            {/*A div that contains the card components */}
            <Card
              isFlipped={this.state.cardOneFlipped}
              handleClick={this.handleClick1}
              message={winMessage}
            />{" "}
            {/*winning card */}
            <Card
              isFlipped={this.state.cardTwoFlipped}
              handleClick={this.handleClick2}
              message={loseMessage}
            />{" "}
            {/*losing card */}
            <Card
              isFlipped={this.state.cardThreeFlipped}
              handleClick={this.handleClick3}
              message={loseMessage}
            />{" "}
            {/*losing card */}
          </div>
        </div>
      );
    } else if (randomNumber === 2) {
      //If the random number is equals to 2, the winning card will be on the right side
      return (
        <div className="gameContainer">
          <div className="gameHeading">
            <h5>
              {" "}
              Welcome to the Win game click any card and stand a chance to win a
              voucher
            </h5>
          </div>
          <div className="buttonsContainer">
            <button
              className={this.state.anyCardFlipped ? " active" : "tryAgainBtn"}
              onClick={this.tryAgain}
            >
              Try Again
            </button>
            <button className="quitBtn" onClick={this.quit}>
              Quit
            </button>
          </div>
          <div className="cardContainer">
            <Card
              isFlipped={this.state.cardTwoFlipped}
              handleClick={this.handleClick2}
              message={loseMessage}
            />{" "}
            {/*losing card */}
            <Card
              isFlipped={this.state.cardThreeFlipped}
              handleClick={this.handleClick3}
              message={loseMessage}
            />{" "}
            {/*losing card */}
            <Card
              isFlipped={this.state.cardOneFlipped}
              handleClick={this.handleClick1}
              message={winMessage}
            />{" "}
            {/*winning card */}
          </div>
        </div>
      );
    } else if (randomNumber === 1) {
      //If the random number is equals to 1, the winning card will be on the middle
      return (
        <div className="gameContainer">
          <div className="gameHeading">
            <h5>
              {" "}
              Welcome to the Win game click any card and stand a chance to win a
              voucher
            </h5>
          </div>
          <div className="buttonsContainer">
            <button
              className={this.state.anyCardFlipped ? " active" : "tryAgainBtn"}
              onClick={this.tryAgain}
            >
              Try Again
            </button>
            <button className="quitBtn" onClick={this.quit}>
              Quit
            </button>
          </div>
          <div className="cardContainer">
            <Card
              isFlipped={this.state.cardTwoFlipped}
              handleClick={this.handleClick2}
              message={loseMessage}
            />{" "}
            {/*losing card */}
            <Card
              isFlipped={this.state.cardOneFlipped}
              handleClick={this.handleClick1}
              message={winMessage}
            />{" "}
            {/*winning card */}
            <Card
              isFlipped={this.state.cardThreeFlipped}
              handleClick={this.handleClick3}
              message={loseMessage}
            />{" "}
            {/*losing card */}
          </div>
        </div>
      );
    }
  }
}
