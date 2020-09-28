import React from "react";

class CardInterface extends React.Component {
  state = { visibility: false, data: [], qValue: "", aValue: "" };

  handleQuestionUpdateClick = () => {
    this.props.onQuestionUpdate(this.props.id, this.state);
  };
  handleAnswerUpdateClick = () => {
    this.props.onAnswerUpdate(this.props.id, this.state);
  };
  handleDeleteClick = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <div className="card-container" key={this.props.id}>
        <p>
          {this.props.question}
          <br />
          <input
            type="text"
            onChange={(e) => this.setState({ qValue: e.target.value })}
          />
          <button
            value={this.props.id}
            onClick={this.handleQuestionUpdateClick}
          >
            <i className="far fa-edit"></i>
          </button>
        </p>
        <p>
          {this.props.answer}
          <br />
          <input
            type="text"
            onChange={(e) => this.setState({ aValue: e.target.value })}
          />

          <button value={this.props.id} onClick={this.handleAnswerUpdateClick}>
            <i className="far fa-edit"></i>
          </button>
        </p>
        <br />
        <button
          value={this.props.id}
          onClick={this.handleDeleteClick}
          className="card-delete"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    );
  }
}

export default CardInterface;
