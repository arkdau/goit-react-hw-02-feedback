import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

// const hdrInc = (ev) => {
//   ev.preventDefault()
//   console.log('ev: ', ev);
//   console.log('source: ', ev.target.innerText);
//   if (ev.target.innerText === 'Good') {
//     this.setState((state, props) => ({
//       good: state.good +1,
//     }));
//   };
//   if (ev.target.innerText === 'Neutral') {
//     this.setState((state, props) => ({
//       neutral: state.neutral +1,
//     }));
//   };
//   if (ev.target.innerText === 'Bad') {
//     this.setState((state, props) => ({
//       bad: state.bad +1,
//     }));
//   };
// };
//
// function countTotalFeedback() {
//  return (
//    this.state.good +
//    this.state.neutral +
//    this.state.bad
//  )
// }

// function countPositiveFeedbackPercentage() {
//   return (
//     (this.countTotalFeedback() > 0) ? (this.state.good / this.countTotalFeedback())*100 : 0
//   )
// }

// export const App = () => {
//
//   return (
//     <>
//       <FeedbackOptions onLeaveFeedback={hdrInc} />
//       <Statistics good={state.good} neutral={state.neutral} bad={state.bad} />
//
//
//     </>
//   );
// };

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hdrInc = (ev) => {
    ev.preventDefault();
    // console.log("ev: ", ev);
    // console.log("source: ", ev.target.innerText);
    if (ev.target.innerText === "Good") {
      this.setState((prevState) => ({
        good: prevState.good + 1,
      }));
    }
    if (ev.target.innerText === "Neutral") {
      this.setState((prevState) => ({
        neutral: prevState.neutral + 1,
      }));
    }
    if (ev.target.innerText === "Bad") {
      this.setState((prevState) => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback() {
    return (
      this.state.good +
      this.state.neutral +
      this.state.bad
    );
  }

  countPositiveFeedbackPercentage() {
    return (
      (this.countTotalFeedback() > 0)
        ? (this.state.good / this.countTotalFeedback()) * 100
        : 0
    );
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.hdrInc} />
        </Section>
        {this.countTotalFeedback() > 0 ?
          (<Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>): (<Notification message="There is no feedback" />)}
      </>
    );
  }
}

export default App;
