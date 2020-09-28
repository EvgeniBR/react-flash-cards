import React from "react";
import FlashCardsApi from "../api/FlashCardsApi";
import "../Styles/Test.css";
import TestCard from "./TestCard";

class Test extends React.Component {
  state = { studyCards: [], question: "", answer: "", index: 0 };

  componentDidMount = () => {
    this.getData();
  };
  nextCard = () => {
    this.setState({ index: this.state.index + 1 });
    this.renderCard();
  };

  getData = async () => {
    const response = await FlashCardsApi.get("Avatar");
    this.setState({ studyCards: response.data });
    this.setState({ dataLength: this.state.studyCards.length });
    this.renderCard();
  };

  renderCard = async () => {
    if (
      this.state.studyCards.length > 0 &&
      this.state.index < this.state.studyCards.length
    ) {
      const card = await this.state.studyCards[this.state.index];
      this.setState({ question: card.question });
      this.setState({ answer: card.answer });
    } else {
      this.setState({ index: 0 }, () => {
        const card = this.state.studyCards[this.state.index];
        this.setState({ question: card.question });
        this.setState({ answer: card.answer });
      });
    }
  };

  render() {
    return (
        <div className="test-page">
      <div className="test-container">
        <TestCard
          data={this.state.studyCards}
          index={this.state.quantity}
          question={this.state.question}
          answer={this.state.answer}
        />
        <div>
          <br />
          <button className="next-btn" onClick={this.nextCard}>
            next card
          </button>
        </div>
        <span>
          {this.state.index +1} / {this.state.studyCards.length +1}
        </span>
      </div>
      </div>
    );
  }
}

export default Test;
