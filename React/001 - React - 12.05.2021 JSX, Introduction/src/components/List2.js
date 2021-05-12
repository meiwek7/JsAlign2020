import React from "react";

let List = () => {
  let arr = [1, 2, 3, 4, 5];
  let result = "";
  arr.forEach((element) => {
    result += `<div>${element}</div>`;
  });
  return result;
};

export default List;
