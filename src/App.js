import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstpage from './components/Firstpage';
import SecondPage from './components/SecondPage';
import Homepage from './components/Homepage';
import { RoutingPage } from './routing/Routing';
import Thirdpage from './components/Thirdpage';
import Form from './components/Form';
import PageWrapper from './components/PageWrapper';
import TaskForMovies from './components/TaskForMovies';

function App() {
  return (
    <>
      <div className="App">
        <div>
          <header className="header">
            <Link to={RoutingPage.home}>{RoutingPage.textTitle.homePage}</Link>
            <Link to={RoutingPage.firstpage}>{RoutingPage.textTitle.firstPage}</Link>
            <Link to={RoutingPage.secondpage}>{RoutingPage.textTitle.secondPage}</Link>
            <Link to={RoutingPage.thirdpage}>{RoutingPage.textTitle.thirdpage}</Link>
            <Link to={RoutingPage.forms}>{RoutingPage.textTitle.formTitle}</Link>
            <Link to={RoutingPage.pageWrapper}>Page wrapper</Link>
            <Link to={RoutingPage.taskMovies}>Test</Link>
          </header>
        </div>

        <Switch>
          <Route exact path={RoutingPage.firstpage} component={Firstpage} />
          <Route exact path={RoutingPage.secondpage} component={SecondPage} />
          <Route exact path={RoutingPage.thirdpage} component={Thirdpage} />
          <Route exact path={RoutingPage.forms} component={Form} />
          <Route exact path={RoutingPage.pageWrapper} component={PageWrapper} />
          <Route exact path={RoutingPage.taskMovies} component={TaskForMovies} />
          <Route path={'/'} component={Homepage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
