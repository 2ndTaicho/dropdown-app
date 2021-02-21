import React, { Component } from "react"; // This import statement allows access to the React library
import ReactCardFlip from "react-card-flip"; // Importing the ReactCardFlip component

export default class Card extends Component {
  //Stateless Component declaration
  render() {
    return (
      <div>
        <div className="Card">
          {/*A div that holds the card */}
          <ReactCardFlip
            isFlipped={this.props.isFlipped}
            flipDirection="horizontal"
          >
            {/*The back of the card */}
            <div className="backCard" onClick={this.props.handleClick}>
              This is the back of the card.
            </div>

            {/*The front of the card */}
            <div className="frontCard">{this.props.message}</div>
          </ReactCardFlip>
        </div>
      </div>
    );
  }
}
