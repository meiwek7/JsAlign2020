import React from "react";

let List = ({ arr }) => {
  //let arr = [1, 2, 3, 4, 5];
  //let result="";
  //let renderArray = [];

  //arr.forEach((item) => renderArray.push(<div>{item}</div>));

  //arr.forEach((element) => {
  //  result += "<div>`${element}`</div>";
  //});

  //return result;

  /*return <div>{[<div>hello</div>, <div>hello1</div>]}</div>;*/
  console.log(arr);
  return (
    <div>
      {arr.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default List;
