import React from "react";
import "./App.css";
import {Navigate , Routes, Route, Link } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
import Error from "./pages/Error";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/pokemons/1">Pokemon Page</Link>
        <Link to={"/aboutUs"}>aboutUs</Link>
      </nav>
      <Routes>
      <Route path="/" element={<Navigate to="/pokemons/1" />} />
      <Route path="/pokemon-app/" element={<Navigate to="/pokemons/1" />} />
        <Route path={"/aboutUs"} exact element={<About />} />
        <Route path={"/pokemons/:page"} exact element={<PokemonList />} />
        <Route path={"*"} exact element={<Error />} />
        <Route
          path={"/pokemons/pokemon/:pokemon"}
          exact
          element={<Pokemon />}
        />
      </Routes>
    </div>
  );
}

export default App;
