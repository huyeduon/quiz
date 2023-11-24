import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Eric",
    address: "Hoi Dan IT",
    age: 26,
  };

  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name}
        and I'm from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
