import React from "react";

class Test extends React.Component {
  addDiv() {
    return <div>Add div using class component</div>;
  }

  addThreeDivs() {
    return [<div>1</div>, <div>2</div>, <div>3</div>];
  }

  addNumberOfDivs(amount) {
    let items = [];
    for (var i = 0; i < amount; i++) {
      items.push(<div>1</div>);
    }

    return <div>{items}</div>;
  }

  render() {
    //return <div>{this.addThreeDivs()}</div>;
    return (
      <div>
        {this.addNumberOfDivs(5)}
        {this.props.text}
      </div>
    );
  }
}

export default Test;
