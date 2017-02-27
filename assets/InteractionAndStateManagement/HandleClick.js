import React from "react";

const handleClick = (clickEvent) => {
  console.log(clickEvent);
  alert("Clicked!");
};

const App = () => {
  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
};

export default App;
