import React from "react";
import {
  Container,
  Row,
  Col,
  Media,
  Badge,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import styled from "styled-components";

import { typeColors, typeCounters } from "./utils";

export * from "./Loading";

export const Title = styled.h1`
  color: rgb(255, 203, 6);
  padding: 0.5rem 1rem 0 1rem;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  text-shadow: 0px 0px 3px rgb(43, 110, 182), 0px 0px 3px rgb(43, 110, 182),
    0px 0px 3px rgb(43, 110, 182), 0px 0px 7px rgb(43, 110, 182),
    0px 0px 7px rgb(43, 110, 182), 0px 0px 7px rgb(43, 110, 182),
    0px 0px 7px rgb(43, 110, 182), 0px 0px 7px rgb(43, 110, 182),
    0px 0px 7px rgb(43, 110, 182);
`;

function makePokemonCounters(types) {
  let counters = [];

  var arrayLength = types.length;
  for (var i = 0; i < arrayLength; i++) {
    const counterData = typeCounters[types[i].type.name];
    counters = [...counters, counterData];
  }
  counters = counters.flat();

  const seen = new Set();
  const filteredArr = counters.filter(el => {
    const duplicate = seen.has(el.type);
    seen.add(el.type);
    return !duplicate;
  });

  return filteredArr;
}

export const PokemonDetail = ({ name, sprites, types }) => {
  return (
    <Container style={{ padding: "1rem" }}>
      <Media
        object
        src={sprites.front_default}
        alt="Generic placeholder image"
      />
      <h2 style={{ textTransform: "capitalize" }}>{name}</h2>
      {types.map(({ type }) => (
        <Badge
          className="type-label"
          key={type.name}
          style={{ backgroundColor: `${typeColors[type.name]}` }}
        >
          {type.name}
        </Badge>
      ))}

      <ListGroup style={{ marginTop: "1rem" }}>
        {makePokemonCounters(types)
          .sort((prev, curr) => curr.effectiveness - prev.effectiveness)
          .map(data => (
            <ListGroupItem
              key={data.type}
              className="d-flex justify-content-between align-items-center"
              style={{
                backgroundColor: typeColors[data.type],
                color: "white",
                height: "2em"
              }}
            >
              <span style={{ textTransform: "capitalize" }}>{data.type}</span>{" "}
              <Badge pill>{data.effectiveness}</Badge>
            </ListGroupItem>
          ))}
      </ListGroup>
    </Container>
  );
};

const EmptyContainer = styled(Container)`
  border: 1px dashed #ffcb05;
  padding: 6rem;
`;

export const PokemonEmpty = () => <EmptyContainer>No Pokémon</EmptyContainer>;

export const AppContainer = ({ children }) => (
  <Container className="App">
    <Row style={{ margin: "1em" }}>
      <Col>{children}</Col>
    </Row>
  </Container>
);
