import React from "react";
import './App.css';
import { Link, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Firstpage from "./components/Firstpage";
import SecondPage from "./components/SecondPage";
import Homepage from "./components/Homepage";
import {RoutingPage} from "./routing/Routing";


function App() {
  return (
      <>
    <div className="App">
        <div>
            <header className='header'>
                <Link  to={RoutingPage.home}>{RoutingPage.textTitle.homePage}</Link>
                <Link to={RoutingPage.firstpage}>{RoutingPage.textTitle.firstPage}</Link>
                <Link to={RoutingPage.secondpage}>{RoutingPage.textTitle.secondPage}</Link>
            </header>
        </div>

            <Switch>
                <Route exact path={RoutingPage.home} component={Homepage}/>
                <Route exact path={RoutingPage.firstpage} component={Firstpage} />
                <Route exact path={RoutingPage.secondpage} component={SecondPage} />
            </Switch>
    </div>
      </>
  );
}

export default App;
