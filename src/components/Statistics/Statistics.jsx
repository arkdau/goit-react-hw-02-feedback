const { Component } = require("react");

class Statistics extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  hdrInc = (ev) => {
    ev.preventDefault()
    console.log('ev: ', ev);
    console.log('source: ', ev.target.innerText);
    if (ev.target.innerText === 'Good') {
      this.setState((state, props) => ({
        good: state.good +1,
      }));
    };
    if (ev.target.innerText === 'Neutral') {
      this.setState((state, props) => ({
        neutral: state.neutral +1,
      }));
    };
    if (ev.target.innerText === 'Bad') {
      this.setState((state, props) => ({
        bad: state.bad +1,
      }));
    };
  };

  render() {
    return(
    <>
        <h1>Please leave feedback</h1>
        <button onClick={this.hdrInc}>Good</button>
        <button onClick={this.hdrInc}>Neutral</button>
        <button onClick={this.hdrInc}>Bad</button>
        <h1>Statistics</h1>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
    </>
    );
  }
}

export default Statistics
