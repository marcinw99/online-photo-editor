import React, { Component } from "react";

class Login extends Component {
  goToApp = () => {
    this.props.history.push(`/app`);
  };
  render() {
    return (
      <div>
        <p>ekran logowania</p>
        <p>albo i rejestrowania</p>
        <button onClick={this.goToApp}>Go to app</button>
      </div>
    );
  }
}

export default Login;
