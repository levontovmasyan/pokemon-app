import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  let { page } = useParams();
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  const FetchData = () => {
    dispatch(GetPokemonList(page));
  };

  useEffect(() => {
    FetchData(page);
  }, [page]);

  const handleSearch = (event) => {
    const result = event.target.value.toLowerCase();
    setSearch(result);
  };
  return (
    <div>
      <div className={"search-wrapper"}>
        <input type="text" onChange={handleSearch} />
        <button
          className="button-32"
          onClick={() => navigate(`/pokemons/pokemon/${search}`)}
        >
          Search
        </button>
      </div>

      <div>
        {pokemonList.loading ? <p>Loading...</p> : null}
        {!_.isEmpty(pokemonList.data) ? (
          <div>
            <div className={"list-wrapper"}>
              {pokemonList.data.map((el) => {
                return (
                  <div className={"pokemon-item"} key={el.url}>
                    <h2>{el.name}</h2>
                    <Link className="more" to={`/pokemons/pokemon/${el.name}`}>
                      More...
                    </Link>
                  </div>
                );
              })}
            </div>
            <ReactPaginate
              pageCount={Math.ceil(pokemonList.count / 15)}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              containerClassName={"pagination"}
              onPageChange={(data) =>
                navigate(`/pokemons/${data.selected + 1}`)
              }
              activeClassName={"active"}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PokemonList;
