import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

const endPoint = "http://localhost:3000"

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    axios.get(`${endPoint}/users`).then((users) => {
      this.setState({ users: users.data} );
    });
  }

  render() {
    return (
      <div>
        <p>Users</p>
        <ul>
          {this.state.users.map((user, i) => (
            <li key={i}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
