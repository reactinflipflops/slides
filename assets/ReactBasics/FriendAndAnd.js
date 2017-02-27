import React from 'react';

const Friend = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      {!!props.isBrother && <i>Your Brother</i>}
    </div>
  );
};

export default Friend;
