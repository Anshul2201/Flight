import React from "react";
import "./App.css";
import Fli from "./pages/Fli";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
//import Rooms from "./pages/Rooms";
//import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
//import BasicForm from "./components/forms/basicForm";
import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Calendar/" component={Calendar} />
        <Route exact path="/Fli/" component={Fli} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
