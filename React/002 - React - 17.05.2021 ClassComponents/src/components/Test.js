import React from "react";

let addHeader = (str, body, color) => {
  return (
    <div>
      <h1>{str}</h1>
      <div>{body}</div>
    </div>
  );
};

let TestFunctional = () => {
  //return <div>{this.addDiv()}Test 1</div>; - функциональный не видит контекста
  return (
    <div>
      {addHeader("Header1", "Summer!")}
      {addHeader("Autumn!")}
      {addHeader("Spring!")}
    </div>
  );
};

export default TestFunctional;
