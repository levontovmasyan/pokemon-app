import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetPokemon } from "../actions/pokemonActions";

function PokemonTypes() {
  const { pokemon } = useParams();
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);
  React.useEffect(() => {
    dispatch(GetPokemon(pokemon));
  }, []);
  const pokeType = pokemonState.data[pokemon].types;
  return (
    <div className="types-div">
      {pokeType.map((el) => {
        return (
          <div className="type" key={el.slot}>
            {el.type.name === "fire" ? (
              <p style={{ backgroundColor: `#fd7d24` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "fighting" ? (
              <p style={{ backgroundColor: `#d56723` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "electric" ? (
              <p style={{ backgroundColor: `#eed535` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "fairy" ? (
              <p style={{ backgroundColor: `#fdb9e9` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "rock" ? (
              <p style={{ backgroundColor: `#a38c21` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "dark" ? (
              <p style={{ backgroundColor: `#707070` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "dragon" ? (
              <p style={{ backgroundColor: `#f16e57` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "steel" ? (
              <p style={{ backgroundColor: `#9eb7b8` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "psychic" ? (
              <p style={{ backgroundColor: `#f366b9` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "ground" ? (
              <p style={{ backgroundColor: `#ab9842` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "normal" ? (
              <p style={{ backgroundColor: `#a4acaf` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "flying" ? (
              <p style={{ backgroundColor: `#3dc7ef` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "poison" ? (
              <p style={{ backgroundColor: `#b97fc9` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "water" ? (
              <p style={{ backgroundColor: ` #4592c4` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "bug" ? (
              <p style={{ backgroundColor: ` #729f3f` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "ghost" ? (
              <p style={{ backgroundColor: ` #7b62a3` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "ice" ? (
              <p style={{ backgroundColor: ` #51c4e7` }}>{el.type.name}</p>
            ) : null}
            {el.type.name === "grass" ? (
              <p style={{ backgroundColor: `#9bcc50` }}>{el.type.name}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default PokemonTypes;
