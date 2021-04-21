import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'assets/scss/style.scss'
import LandingPage from 'pages/LandingPage'
import InputNumberExample from 'pages/InputNumberExample';
import InputDateExample from 'pages/InputDateExample';
import BreadcrumbExample from 'pages/BreadcrumbExample';
import DetailsPage from 'pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} exact />
        <Route path="/properties/:id" component={DetailsPage} exact />
        <Route path="/input-number" component={InputNumberExample} exact />
        <Route path="/input-date" component={InputDateExample} exact />
        <Route path="/breadcrumb" component={BreadcrumbExample} exact />
      </Router>
    </div>
  );
}

export default App;
