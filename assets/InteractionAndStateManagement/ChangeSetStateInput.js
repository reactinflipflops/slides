import React from "react";

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: "write in here …"
    };
  }

  updateText = (changeEvent) => {
    this.setState({
      inputText: changeEvent.target.value
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.updateText}
        />
        <p>Preview: {this.state.inputText}</p>
      </form>
    );
  }
}

export default Form;
