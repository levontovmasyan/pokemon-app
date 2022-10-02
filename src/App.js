// import './App.css';
// import {Routes , Route ,NavLink , Navigate} from 'react-router-dom'
// import PokemonListing from './containers/PokemonListing';
// import PokemonDetail from './containers/PokemonDetail';
// function App() {
//   return (
//     <div className="App">
//       <nav>
//         <NavLink to={'/'} >Search</NavLink>
//       </nav>
//      <Routes>
//       <Route path={'/'} exact element={<PokemonListing />} />
//       <Route path={'/pokemon/:pokemon'} exact element={<PokemonDetail></PokemonDetail>} />
//       <Route render={() => <Navigate to="/" />} />
//      </Routes>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import {Routes, Route, NavLink, Redirect} from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Get back to main page</NavLink>
      </nav>
      <Routes>
        <Route path={"/"} exact element={<PokemonList />} />
        <Route path={"/pokemon/:pokemon"} exact element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
