import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./space_x_logo.png";
import "./App.css";

import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <div
              className="container-fluid"
              style={{ padding: "20px", backgroundColor: "#f2f2f2" }}>
              <img
                src={logo}
                alt="SpaceX"
                style={{ width: 500, display: "block", margin: "0 auto" }}
              />
            </div>
            <div className="container">
              <Route exact path="/" component={Launches} />
              <Route exact path="/launch/:flight_number" component={Launch} />
            </div>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
