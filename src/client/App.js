import React, { Component } from "react";
import "./app.css";
export default class App extends Component {
  state = {
    data: "natalia",
  };

  componentDidMount() {
    fetch("/api/main")
      .then((response) => response.json())
      .then((res) => this.setState({ data: res.data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data ? <h1>{`Hello ${data}`}</h1> : <h1>Loading.. please wait!</h1>}
      </div>
    );
  }
}
