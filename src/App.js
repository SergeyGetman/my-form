import React from "react";
import './App.css';
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Firstpage from "./components/Firstpage";
import SecondPage from "./components/SecondPage";


function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Firstpage} />
                <Route path="/step2" component={SecondPage} />
                <Route path={'/'} />
            </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
