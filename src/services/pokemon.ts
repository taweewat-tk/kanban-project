import axios from "axios";

const getPokemonList = () => {
  return axios.get("https://pokeapi.co/api/v2");
};

export { getPokemonList };
