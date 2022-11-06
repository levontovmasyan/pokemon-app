import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GetPokemon } from "../actions/pokemonActions";
import PokemonTypes from "./PokemonTypes";
import Loading from '../pages/Loading'
import _ from "lodash";
const Pokemon = () => {
  const { pokemon } = useParams();
  const dispatch = useDispatch();  
  const pokemonState = useSelector((state) => state.Pokemon);
  React.useEffect(() => {
    dispatch(GetPokemon(pokemon));
  }, [pokemon]);
  const pokeData = pokemonState.data[pokemon];
  return (
    <div className={"poke"}>
      {pokemonState.loading ?<Loading /> : null}
      {pokeData === undefined ? (
        <div>
          <h1>{pokemonState.errMsg}</h1>
          <h1>
            Get back to{" "}
            <Link to={`/pokemons/:page`} className="back">
              main page
            </Link>
            ?
          </h1>
        </div>
      ) : null}
      {!_.isEmpty(pokeData) ? (
        <>
          <div className="whole-div bg-white">
          <p className="poke-back">
              Get back to
              <Link to={"/"} className="back">
                main page
              </Link>
              ?
            </p>
            <h1>{pokemon}</h1> 

            <div className={"pokemon-div"}>
              <div className={"img-div"}>
                {pokeData.sprites.other.dream_world.front_default ? (
                  <img
                    src={pokeData.sprites.other.dream_world.front_default}
                    alt=""
                  />
                ) : (
                  <h3>there is no image for this pokemon</h3>
                )}
              </div>
              <div className="stats-div">
                <div className="stat-div">
                  <h1>Stats</h1>
                  {pokeData.stats.map((el) => {
                    return (
                      <p key={el.stat.name}>
                        <span style={{ color: `white` }}>{el.stat.name}</span>:{" "}
                        {el.base_stat}
                      </p>
                    );
                  })}
                </div>

                <div className="ability">
                  <h1>Abilities</h1>
                  {pokeData.abilities.map((el) => {
                    return (
                      <h3 key={el.slot} style={{ color: "white" }}>
                        {el.ability.name}
                      </h3>
                    );
                  })}
                  <h3 className="weight">
                    Weight: <span>{pokeData.weight}g</span>
                  </h3>
                  <h3>
                    Height: <span>{pokeData.height}cm</span>
                  </h3>
                </div>
              </div>
              <div className="poke-type">
                <h3>Type:</h3>
                <PokemonTypes />
              </div>
            </div>
            
          </div>
        </>
      ) : null}
      {pokemonState.errorMsg !== "" && <p>{pokemonState.errorMsg}</p>}
    </div>
  );
};

export default Pokemon;
