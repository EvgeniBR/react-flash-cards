import React from "react";
import Card from "./Card";
import FlashCardsApi from "../api/FlashCardsApi";

class CardDesign extends React.Component {
  state = { studyCards: [] , question:'' , answer:'' };

  getData = async () => {
    const response = await FlashCardsApi.get("Avatar");
    this.setState({ studyCards: response.data });
  };

  handleQuestionUpdateClick = async (id, state) => {
    let tempObj = {
      question: state.qValue,
    };
    
    console.log(state.qValue);
    console.log(id);
    console.log(state);
    await FlashCardsApi.put(`Avatar/${id}`, tempObj);
    await this.getData();
  };
  handleAnswerUpdateClick = async (id, state) => {
    let tempObj = {
      answer: state.aValue,
    };
    
    await FlashCardsApi.put(`Avatar/${id}`, tempObj);
    await this.getData();
  };
  handleDeleteClick = async (id) => {
    
    await FlashCardsApi.delete(`Avatar/${id}`);
    await this.getData();
  };

  componentDidMount = () => {
    this.getData();
  };
  handleCreateClick = async ()=> {
    let  newCard = {
      question: this.state.question,
      answer: this.state.answer
      }
   
   await FlashCardsApi.post("Avatar" , newCard);
   this.getData();
};

  render() {
    
    return (
      <div>
        <div className="card-create">
          <label>Question</label>
          <input
            type="text"
            name="name"
            onChange={(e) => this.setState({ question: e.target.value })}
          /><br/>
          <label>Answer </label>
          <input
            type="text"
            name="name"
            onChange={(e) => this.setState({ answer: e.target.value })}
          /><br/>

          <button onClick={this.handleCreateClick}>
            <i className="far fa-calendar-plus fa-2x"></i> Create New Card
          </button>
        </div>
        <Card
          onDelete={this.handleDeleteClick}
          onQuestionUpdate={this.handleQuestionUpdateClick}
          onAnswerUpdate={this.handleAnswerUpdateClick}
          data={this.state.studyCards}
        />
      </div>
    );
  }
}

export default CardDesign;
