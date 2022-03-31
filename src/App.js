import React from "react";
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import Firstpage from "./components/Firstpage";
import SecondPage from "./components/SecondPage";


function App() {

    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash)


  return (
    <div className="App">
       <h1> Hello World</h1>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Firstpage} />
                <Route path="/step2" component={SecondPage} />
                {/*<Route path="/result" component={Result} />*/}
            </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
