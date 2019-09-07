import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  Container,
  Form,
  Input,
  Button,
  InputGroupAddon,
  InputGroup
} from "reactstrap";

import {
  Loading,
  AppContainer,
  Title,
  PokemonEmpty,
  PokemonDetail
} from "./components";
import SearchPokemon from "./search-pokemon";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

function App() {
  const [pokemon, setPokemon] = useState("dragonite");
  const [inputSearch, setInputSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (pokemon === "") return;
    let isCurrent = true;
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
      .then(res => res.json())
      .then(data => isCurrent && setData(data))
      .finally(() => isCurrent && setLoading(false));
    return () => {
      isCurrent = false;
    };
  }, [pokemon]);

  return (
    <AppContainer>
      <Title>
        Pokémon GO <br />
        <span style={{ fontSize: "1.5rem" }}>Raid Counters</span>
      </Title>

      <Container
        style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
        className="container"
      >
        <SearchPokemon setPokemon={setPokemon} />
      </Container>

      {loading && (
        <Container padding="6rem">
          <Loading />
        </Container>
      )}
      {!loading && (!data ? <PokemonEmpty /> : <PokemonDetail {...data} />)}
    </AppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
