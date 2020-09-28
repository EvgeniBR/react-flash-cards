import React from "react";
import "../Styles/Card.css";
import CardInterface from "./CardInterface";

class Card extends React.Component {
  state = { visibility: false, data: [], qValue: "", aValue: "", id: null };

  handleQuestionUpdateClick = (id , state ) => {
       console.log(id);
    this.props.onQuestionUpdate(id, state);
  };
  handleAnswerUpdateClick = (id , state) => {
    this.props.onAnswerUpdate(id, state);
  };
  handleDeleteClick = (id) => {
    this.props.onDelete(id);
  };

  renderFlashCards = () => {
    if (this.props.data == null || this.props.data.length === 0) {
      return null;
    }
    const flashCards = this.props.data.map((card) => {
      return (
        <CardInterface
          onDelete={this.handleDeleteClick}
          onQuestionUpdate={this.handleQuestionUpdateClick}
          onAnswerUpdate={this.handleAnswerUpdateClick}
          question={card.question}
          answer={card.answer}
          id={card.id}
          key={card.id}
        />
      );
    });
    return flashCards;
  };

  render() {
    return (
      <div>
        <div className="card-wraper">{this.renderFlashCards()} </div>
      </div>
    );
  }
}

export default Card;
