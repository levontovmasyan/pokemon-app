import { ActionTypes } from "../actions/type-actions";

const DefaultState = {
  loading: false,
  data: [],
  errMsg: "",
};

const PokemonMultipleReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case ActionTypes.POKEMON_MULTIPLE_LOADING:
      return {
        ...state,
        loading: true,
        errMsg: "",
      };
    case ActionTypes.POKEMON_MULTIPLE_FAIL:
      return {
        ...state,
        loading: false,
        errMsg: "unable to find pokemon",
      };
    case ActionTypes.POKEMON_MULTIPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        errMsg: "",
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default PokemonMultipleReducer;
