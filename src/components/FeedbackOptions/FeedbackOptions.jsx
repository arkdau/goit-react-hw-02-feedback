import { Component } from "react";

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.onLeaveFeedback}>Good</button>
        <button onClick={this.props.onLeaveFeedback}>Neutral</button>
        <button onClick={this.props.onLeaveFeedback}>Bad</button>
      </>
    );
  }
}

export default FeedbackOptions;
