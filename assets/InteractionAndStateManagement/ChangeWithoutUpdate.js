import React from "react";

let clicks = 0;

const increment = () => {
  clicks += 1;
};

const Form = () => {
  return (
    <form>
      <button onClick={increment}>
        Click Me!
      </button>
      <p>Button was clicked { clicks } times.</p>
    </form>
  );
};

export default Form;
