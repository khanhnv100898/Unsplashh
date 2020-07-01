import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
