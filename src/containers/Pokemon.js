import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom"
import {GetPokemon} from "../actions/pokemonActions";
import _ from "lodash";
const Pokemon = () => {

  const {pokemon}  = useParams();
  const dispatch = useDispatch(); 
  const pokemonState = useSelector(state => state.Pokemon);
  React.useEffect(() => {
    dispatch(GetPokemon(pokemon))
  }, []);
  
  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemon])) {
      const pokeData = pokemonState.data[pokemon];
      return(
        <>
        <div className={"pokemon-div"}>
          <div className={"img-div"}>
           {pokeData.sprites.other.dream_world.front_default ? <img src={pokeData.sprites.other.dream_world.front_default} alt=""/> : <h1>no img</h1>}
          </div>
          <div className="stats-div">
            <div className='stat-div'>
            <h1>Stats</h1>
              {pokeData.stats.map(el => {
              return <p><span style={{color:`white`}}>{el.stat.name}</span>: {el.base_stat}</p>
            })}</div>
              
              <div className="ability">
            <h1>Abilities</h1>
            {pokeData.abilities.map(el => {
              return <h3 style={{color: 'white'}}>{el.ability.name}</h3>
            })}
            <h3 className='weight'>Weight: <span>{pokeData.weight}g</span></h3>
            <h3>Height: <span>{pokeData.height}cm</span></h3>
          </div>
              
          </div>
         
          
         

        </div>
        <div className="types-div">
          Types:
        {pokeData.types.map(el => {
                return (
                  

                  <div className='type'>
                      {el.type.name ==='fire' ? <h2 style={{backgroundColor:`#fd7d24`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='fighting' ? <h2 style={{backgroundColor:`#d56723`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='electric' ? <h2 style={{backgroundColor:`#eed535`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='fairy' ? <h2 style={{backgroundColor:`#fdb9e9`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='rock' ? <h2 style={{backgroundColor:`#a38c21`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='dark' ? <h2 style={{backgroundColor:`#707070`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='dragon' ? <h2 style={{backgroundColor:`#f16e57`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='steel' ? <h2 style={{backgroundColor:`#9eb7b8`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='psychic' ? <h2 style={{backgroundColor:`#f366b9`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='ground' ? <h2 style={{backgroundColor:`#ab9842`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='normal' ? <h2 style={{backgroundColor:`#a4acaf`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='flying' ? <h2 style={{backgroundColor:`#3dc7ef`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='poison' ? <h2 style={{backgroundColor:`#b97fc9`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='water' ? <h2 style={{backgroundColor:` #4592c4`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='bug' ? <h2 style={{backgroundColor:` #729f3f`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='ghost' ? <h2 style={{backgroundColor:` #7b62a3`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='ice' ? <h2 style={{backgroundColor:` #51c4e7`}}>{el.type.name}</h2>:null}
                      {el.type.name ==='grass' ? <h2 style={{backgroundColor:`#9bcc50`}}>{el.type.name}</h2>:null}
                  </div>
                )


            })}
                </div>

        </>
      )
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>
    }

    return <p>error getting pokemon</p>
  }

  return(
    <div className={"poke"}>
      <h1>{pokemon}</h1>
      {ShowData()}
    </div>
  )
};

export default Pokemon