import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  increment = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>
          Click Me!
        </button>
        <p>Button was clicked { this.state.clicks } times.</p>
      </div>
    );
  }
}

export default Counter;
