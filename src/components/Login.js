import React, { Component, Fragment } from "react";

class Login extends Component {
  goToPage = name => {
    this.props.history.push(`/app/${name}`);
  };
  render() {
    return (
      <Fragment>
        <p>ekran logowania</p>
        <p>albo i rejestrowania</p>
        <button onClick={() => this.goToPage("home")}>Go to homepage</button>
        <button onClick={() => this.goToPage("docs")}>Go to docs</button>
        <button onClick={() => this.goToPage("account")}>Go to account</button>
      </Fragment>
    );
  }
}

export default Login;
