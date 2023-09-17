import React from 'react';
import './App.css';
import Header from "./components/Header";
import RandomTeams from "./components/RandomTeams";
import {Route, Routes} from "react-router-dom";
import RandomPlayer from "./components/RandomPlayer";
import RandomClub from "./components/RandomClub";
import RandomCountry from "./components/RandomCountry";

function App() {
  return (
      <div className="app">
          <Header/>
          <Routes>
              <Route path={"/random-teams"} element={<RandomTeams/>}/>
              <Route path={"/random-player"} element={<RandomPlayer/>}/>
              <Route path={"/random-club"} element={<RandomClub/>}/>
              <Route path={"/random-country"} element={<RandomCountry/>}/>
          </Routes>
      </div>
  );
}

export default App;
