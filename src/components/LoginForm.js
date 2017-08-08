import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  usernameChanged = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  passwordChanged = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  formSubmitted = (event) => {
    event.preventDefault()
    if (!this.state.username === '' || !this.state.password === ''){
      this.props.onSubmit(event);
    }
  }
  
  render() {
    return (
      <form onSubmit={this.formSubmitted}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.usernameChanged} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.passwordChanged} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
