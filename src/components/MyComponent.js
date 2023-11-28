import React from 'react';
import { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Hoi Dan IT", age: "16" },
//       { id: 2, name: "Eric", age: "68" },
//       { id: 3, name: "Huyen", age: "34" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = [...this.state.listUsers];
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };

//   // JSX
//   render() {
//     return (
//       <>
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//           <br />
//           <br />
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = props => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: 'Hoi Dan IT', age: '16' },
    { id: 2, name: 'Eric', age: '68' },
    { id: 3, name: 'Huyen', age: '34' },
  ]);

  const handleAddNewUser = userObj => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = userId => {
    let listUsersClone = [...listUsers];
    listUsersClone = listUsersClone.filter(item => item.id !== userId);
    setListUsers(listUsersClone);
  };

  // JSX

  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
