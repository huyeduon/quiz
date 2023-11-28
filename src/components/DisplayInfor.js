import React from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log('>>> call construtor');
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log('>>> call me component did mount');
    setTimeout(() => {
      document.title = 'Eric hoi dan IT';
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('>>> call me component update', this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert('You got 5');
      }
    }
  }

  handleShowHide = () => {
    this.setState({ isShowListUser: !this.state.isShowListUser });
  };
  render() {
    console.log('>>> call me render');
    // destructuring array/object
    const { listUsers } = this.props;
    // const listUsers = this.props.listUsers
    return (
      <div className="display-infor-container">
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? 'Hide list users'
              : 'Show list users'}
          </span>
        </div>
        {this.state.isShowListUser && (
          <>
            {listUsers.map(user => {
              return (
                <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
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
  }
}

export default DisplayInfor;
