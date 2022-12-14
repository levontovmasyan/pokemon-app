import { ActionTypes } from "../actions/type-actions";
const DefaultState = {
  loading: false,
  data: [],
  errMsg: "",
  count: 0,
};

const PokemonListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case ActionTypes.POKEMON_LIST_LOADING:
      return {
        ...state,
        loading: true,
        errMsg: "",
      };
    case ActionTypes.POKEMON_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errMsg: "unable to get pokemon",
      };
    case ActionTypes.POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errMsg: "",
        count: action.payload.count,
      };
    default:
      return state;
  }
};

export default PokemonListReducer;
