import React, { Profiler } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Switch } from "react-router-dom";
import Movieinformation from "./Movieinformation/Movieinformation";
import Actors from "./Actors/Actors";
import Profile from "./profile/profile";
import Movies from "./Movies/Movies";
import NavBar from "./NavBar/NavBar";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar></NavBar>
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Routes>
          <Route
            path="/movie/:id"
            element={<Movieinformation></Movieinformation>}
          ></Route>
          <Route path="/actors/:id" element={<Actors></Actors>}></Route>
          <Route path="/" element={<Movies></Movies>}></Route>
          <Route path="/profile/:id" element={<Profile></Profile>}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
