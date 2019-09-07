export const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD"
};

// export const typeCounters = {
//   normal: [
//     {
//       type: "rock",
//       effectiveness: 0.5
//     },
//     {
//       type: "steel",
//       effectiveness: 0.5
//     },
//     {
//       type: "ghost",
//       effectiveness: null
//     }
//   ],
//   fire: [
//     {
//       type: "grass",
//       effectiveness: 2
//     },
//     {
//       type: "ice",
//       effectiveness: 2
//     },
//     {
//       type: "bug",
//       effectiveness: 2
//     },
//     {
//       type: "steel",
//       effectiveness: 2
//     }
//   ],
//   water: [
//     {
//       type: "fire",
//       effectiveness: 2
//     },
//     {
//       type: "ground",
//       effectiveness: 2
//     },
//     {
//       type: "rock",
//       effectiveness: 2
//     }
//   ],
//   electric: [
//     {
//       type: "water",
//       effectiveness: 2
//     },
//     {
//       type: "ground",
//       effectiveness: 2
//     }
//   ],
//   grass: [
//     {
//       type: "water",
//       effectiveness: 2
//     },
//     {
//       type: "ground",
//       effectiveness: 2
//     },
//     {
//       type: "rock",
//       effectiveness: 2
//     }
//   ],
//   ice: [
//     {
//       type: "grass",
//       effectiveness: 2
//     },
//     {
//       type: "ground",
//       effectiveness: 2
//     },
//     {
//       type: "flying",
//       effectiveness: 2
//     },
//     {
//       type: "dragon",
//       effectiveness: 2
//     }
//   ],
//   fighting: [
//     {
//       type: "normal",
//       effectiveness: 2
//     },
//     {
//       type: "ice",
//       effectiveness: 2
//     },
//     {
//       type: "rock",
//       effectiveness: 2
//     },
//     {
//       type: "dark",
//       effectiveness: 2
//     },
//     {
//       type: "steel",
//       effectiveness: 2
//     }
//   ],
//   poison: [
//     {
//       type: "grass",
//       effectiveness: 2
//     },
//     {
//       type: "fairy",
//       effectiveness: 2
//     }
//   ],
//   ground: [
//     {
//       type: "fire",
//       effectiveness: 2
//     },
//     {
//       type: "electric",
//       effectiveness: 2
//     },
//     {
//       type: "poison",
//       effectiveness: 2
//     },
//     {
//       type: "rock",
//       effectiveness: 2
//     },
//     {
//       type: "steel",
//       effectiveness: 2
//     }
//   ],
//   flying: [
//     {
//       type: "grass",
//       effectiveness: 2
//     },
//     {
//       type: "fighting",
//       effectiveness: 2
//     },
//     {
//       type: "bug",
//       effectiveness: 2
//     }
//   ],
//   psychic: [
//     {
//       type: "fighting",
//       effectiveness: 2
//     },
//     {
//       type: "poison",
//       effectiveness: 2
//     }
//   ],
//   bug: [
//     {
//       type: "grass",
//       effectiveness: 2
//     },
//     {
//       type: "psychic",
//       effectiveness: 2
//     },
//     {
//       type: "dark",
//       effectiveness: 2
//     }
//   ],
//   rock: [
//     {
//       type: "fire",
//       effectiveness: 2
//     },
//     {
//       type: "ice",
//       effectiveness: 2
//     },
//     {
//       type: "flying",
//       effectiveness: 2
//     },
//     {
//       type: "bug",
//       effectiveness: 2
//     }
//   ],
//   ghost: [
//     {
//       type: "psychic",
//       effectiveness: 2
//     },
//     {
//       type: "ghost",
//       effectiveness: 2
//     }
//   ],
//   dragon: [
//     {
//       type: "dragon",
//       effectiveness: 2
//     }
//   ],
//   dark: [
//     {
//       type: "psychic",
//       effectiveness: 2
//     },
//     {
//       type: "ghost",
//       effectiveness: 2
//     }
//   ],
//   steel: [
//     {
//       type: "ice",
//       effectiveness: 2
//     },
//     {
//       type: "rock",
//       effectiveness: 2
//     },
//     {
//       type: "fairy",
//       effectiveness: 2
//     }
//   ],
//   fairy: [
//     {
//       type: "fighting",
//       effectiveness: 2
//     },
//     {
//       type: "dragon",
//       effectiveness: 2
//     },
//     {
//       type: "dark",
//       effectiveness: 2
//     }
//   ]
// };

export const typeCounters = {
  normal: [
    {
      type: "fighting",
      effectiveness: 2
    }
  ],
  fire: [
    {
      type: "water",
      effectiveness: 2
    },
    {
      type: "ground",
      effectiveness: 2
    },
    {
      type: "rock",
      effectiveness: 2
    }
  ],
  water: [
    {
      type: "electric",
      effectiveness: 2
    },
    {
      type: "grass",
      effectiveness: 2
    }
  ],
  electric: [
    {
      type: "ground",
      effectiveness: 2
    }
  ],
  grass: [
    {
      type: "fire",
      effectiveness: 2
    },
    {
      type: "ice",
      effectiveness: 2
    },
    {
      type: "poison",
      effectiveness: 2
    },
    {
      type: "flying",
      effectiveness: 2
    },
    {
      type: "bug",
      effectiveness: 2
    }
  ],
  ice: [
    {
      type: "fire",
      effectiveness: 2
    },
    {
      type: "fighting",
      effectiveness: 2
    },
    {
      type: "rock",
      effectiveness: 2
    },
    {
      type: "steel",
      effectiveness: 2
    }
  ],
  fighting: [
    {
      type: "flying",
      effectiveness: 2
    },
    {
      type: "psychic",
      effectiveness: 2
    },
    {
      type: "fairy",
      effectiveness: 2
    }
  ],
  poison: [
    {
      type: "ground",
      effectiveness: 2
    },
    {
      type: "poison",
      effectiveness: 2
    }
  ],
  ground: [
    {
      type: "water",
      effectiveness: 2
    },
    {
      type: "grass",
      effectiveness: 2
    },
    {
      type: "ice",
      effectiveness: 2
    }
  ],
  flying: [
    {
      type: "electric",
      effectiveness: 2
    },
    {
      type: "ice",
      effectiveness: 2
    },
    {
      type: "rock",
      effectiveness: 2
    }
  ],
  psychic: [
    {
      type: "bug",
      effectiveness: 2
    },
    {
      type: "ghost",
      effectiveness: 2
    },
    {
      type: "dark",
      effectiveness: 2
    }
  ],
  bug: [
    {
      type: "fire",
      effectiveness: 2
    },
    {
      type: "flying",
      effectiveness: 2
    },
    {
      type: "rock",
      effectiveness: 2
    }
  ],
  rock: [
    {
      type: "water",
      effectiveness: 2
    },
    {
      type: "grass",
      effectiveness: 2
    },
    {
      type: "fighting",
      effectiveness: 2
    },
    {
      type: "ground",
      effectiveness: 2
    },
    {
      type: "steel",
      effectiveness: 2
    }
  ],
  ghost: [
    {
      type: "ghost",
      effectiveness: 2
    },
    {
      type: "dark",
      effectiveness: 2
    }
  ],
  dragon: [
    {
      type: "ice",
      effectiveness: 2
    },
    {
      type: "dragon",
      effectiveness: 2
    },
    {
      type: "fairy",
      effectiveness: 2
    }
  ],
  dark: [
    {
      type: "fighting",
      effectiveness: 2
    },
    {
      type: "bug",
      effectiveness: 2
    },
    {
      type: "fairy",
      effectiveness: 2
    }
  ],
  steel: [
    {
      type: "fire",
      effectiveness: 2
    },
    {
      type: "fighting",
      effectiveness: 2
    },
    {
      type: "ground",
      effectiveness: 2
    }
  ],
  fairy: [
    {
      type: "poison",
      effectiveness: 2
    },
    {
      type: "steel",
      effectiveness: 2
    }
  ]
};
