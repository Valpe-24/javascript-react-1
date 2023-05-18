import React from "react";

export const Tweet = ({ message, color}) => {

  return (
    <div>
      <div style={{ backgroundColor: color }}>{message}</div>
    </div>
  );
};


// export default Tweet;


