import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'assets/scss/style.scss'
import LandingPage from 'pages/LandingPage'
import InputNumberExample from 'pages/InputNumberExample';
import InputDateExample from 'pages/InputDateExample';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} exact />
        <Route path="/input-number" component={InputNumberExample} exact />
        <Route path="/input-date" component={InputDateExample} exact />
      </Router>
    </div>
  );
}

export default App;
