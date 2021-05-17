import React from "react";

class Task2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "text"
    };
  }

  printHardcodedOutput(args) {
    const { a, b } = args;

    setTimeout(() => {
      this.setState({
        text: "new text"
      });
    }, 5000);

    console.log(a);
    console.log(b);
    console.log(args);
    return (
      <div>
        <div>{args.a + "+" + args.b + "=" + (args.a + args.b)}</div>
        <div>{args.a + "-" + args.b + "=" + (args.a - args.b)}</div>
        <div>{args.a + "/" + args.b + "=" + args.a / args.b}</div>
        <div>{args.a + "*" + args.b + "=" + args.a * args.b}</div>
        {this.state.text}
      </div>
    );
  }

  render() {
    console.log(this.props);
    //return <div>{this.addThreeDivs()}</div>;
    return this.printHardcodedOutput(this.props);
  }
}

export default Task2;
