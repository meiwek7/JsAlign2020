import React from "react";

let PersonComp = ({ transferedArray }) => {
  console.log(transferedArray);
  return (
    <div>
      {transferedArray.map((item) => {
        return <div>User name is {item.name}</div>;
      })}
    </div>
  );
};
export default PersonComp;

/*import React from "react";

const List = (props) => {
  const users = props.users.map((e, i) => (
    <li key={i}>
      {e.name}, {e.age}
    </li>
  ));
  return <ul>{users}</ul>;
};

export default List;
*/
