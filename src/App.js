import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceData from "./components/InvoiceData";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App d-flex flex-column align-items-center justify-content-start w-100 mt-5">
          <div className="container">
            <Switch>
              <Route exact path="/" component={InvoiceData} />
              <Route path="/new-invoice" component={InvoiceForm} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
