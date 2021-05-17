import React from "react";

let printDivFromArray = (arg) => {
  return (
    <div>
      {arg.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

let Taska1 = () => {
  return <div>{printDivFromArray([1, 2, 3])}</div>;
};

export default Taska1;
