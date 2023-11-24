import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "HarryPham",
    address: "Hoi Dan IT",
    age: 26,
  };

  handleClick = (event) => {
    console.log(">> click me my button");
    // console.log(" random ", Math.floor(Math.random() * 100 + 1));
    this.setState({
      name: "Eric",
      age: Math.floor(Math.random() * 100 + 1),
    });

    // this.setState({
    //   age: Math.floor(Math.random() * 100 + 1),
    // });
  };

  handleOnMouseOver(event) {
    // console.log(event.pageX);
  }
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;
