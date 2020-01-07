import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExerciseList from "./components/exerciselist.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Navbar from "./components/navbar.component";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
