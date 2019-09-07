import React, { useState, useEffect } from "react";
import Downshift from "downshift";

import { Menu, Label, Item, Input, css } from "./shared";

const SearchPokemon = ({ setPokemon }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
      .then(res => res.json())
      .then(data =>
        setItems(
          data.results.map(pokemon => {
            return { value: pokemon.name, url: pokemon.url };
          })
        )
      );
  }, []);

  return (
    <Downshift
      onChange={selection => setPokemon(selection.value)}
      itemToString={item => (item ? item.value : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
      }) => (
        <div {...css({ width: 250, margin: "auto" })}>
          <Label {...getLabelProps()}>Search Pokémon</Label>
          <div {...css({ position: "relative" })}>
            <Input {...getInputProps({ placeholder: "Enter a name" })} />
          </div>
          <div {...css({ position: "relative" })}>
            <Menu {...getMenuProps()}>
              {isOpen
                ? items
                    .filter(
                      item =>
                        !inputValue ||
                        item.value.includes(inputValue.toLowerCase())
                    )
                    .map((item, index) => (
                      <Item
                        {...getItemProps({
                          key: item.value,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index
                                ? "lightgray"
                                : "white",
                            fontWeight:
                              selectedItem === item ? "bold" : "normal"
                          }
                        })}
                      >
                        {item.value}
                      </Item>
                    ))
                : null}
            </Menu>
          </div>
        </div>
      )}
    </Downshift>
  );
};

export default SearchPokemon;
