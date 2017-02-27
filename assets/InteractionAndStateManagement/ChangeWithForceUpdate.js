import React from "react";

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.clicks = 0;
  }

  increment = () => {
    this.clicks += 1;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>
          Click Me!
        </button>
        <p>Button was clicked { this.clicks } times.</p>
      </div>
    );
  }
}

export default Counter;
