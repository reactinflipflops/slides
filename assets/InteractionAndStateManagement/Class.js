import React from "react";

// const Wrapper = (props) => {
//   return (
//     <div>
//       <h2>Hello {props.name}!</h2>
//     </div>
//   );
// };

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.name}!</h2>
      </div>
    );
  }
}

export default Wrapper;
