import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'assets/scss/style.scss'
import LandingPage from 'pages/LandingPage'
import InputNumberExample from 'pages/InputNumberExample';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} exact />
        <Route path="/input-number" component={InputNumberExample} exact />
      </Router>
    </div>
  );
}

export default App;
