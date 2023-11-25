import React from "react";

class DisplayInfor extends React.Component {
  render() {
    // destructuring array/object
    const { listUsers } = this.props;
    //console.log(listUsers);
    // const listUsers = this.props.listUsers
    // props => property

    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name's {user.name}</div>
              <div>My age's {user.age}</div>
              <hr />
            </div>
          );
        })}

        {/* <div>My name's {name}</div>
        <div>My age's {age}</div>
        <hr />
        <div>My name's {name}</div>
        <div>My age's {age}</div> */}
      </div>
    );
  }
}

export default DisplayInfor;
