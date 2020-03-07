import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Table from "./components/Table";
import { Route, Redirect, Switch } from "react-router-dom";
import FarmerList from "./components/FarmerList";

class App extends Component {
  state = {
    farmer_data: ""
  };

  handleClick = farmer_id => {
    console.log(farmer_id);
    const farmerId = { ...farmer_id };
    console.log(farmerId);
    this.setState({
      farmer_data: farmer_id
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" render={props => <Table {...props} handleChange={this.handleClick} />} />
          <Route exact path="/farmer/:id" render={props => <FarmerList {...props} data={this.state.farmer_data} />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
