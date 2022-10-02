// import {combineReducers} from "redux";
// import PokemonMultipleReducer from "./PokemonMultipleReducer";
// import PokemonReducer from "./PokemonReducer";

// const RootReducer = combineReducers({
//   PokemonList: PokemonReducer,
//   Pokemon:PokemonMultipleReducer

// });


// export default RootReducer;

import {combineReducers} from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer
});

export default RootReducer;