import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Styles
import './App.css';

// pages
import Home from './pages/Home';
import Header from "./pages/Header";


function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
