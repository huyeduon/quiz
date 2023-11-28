import React, { useState } from 'react';
import './DisplayInfor.scss';

// class DisplayInfor extends React.Component {
//   componentDidMount() {
//     console.log('>>> call me component did mount');
//     setTimeout(() => {
//       document.title = 'Eric hoi dan IT';
//     }, 3000);
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('>>> call me component update', this.props, prevProps);
//     if (this.props.listUsers !== prevProps.listUsers) {
//       if (this.props.listUsers.length === 5) {
//         alert('You got 5');
//       }
//     }
//   }

//   render() {
//     console.log('>>> call me render');
//     // destructuring array/object
//     const { listUsers } = this.props;
//     // const listUsers = this.props.listUsers
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map(user => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
//                   <div>My name's {user.name}</div>
//                   <div>My age's {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = props => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={handleShowHideListUser}>
          {isShowHideListUser ? 'Hide List users' : 'Show List users'}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map(user => {
            return (
              <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                <div>My name's {user.name}</div>
                <div>My age's {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
