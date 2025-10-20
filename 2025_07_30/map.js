// MAP
const numeros = [1, 2, 3, 4, 5, 6];

const porDos = numeros.map((num) => num * 2);
console.log(porDos);

//
const habitantes = ["👦", "👦", "👦", "👦", "🐶", "👦", "👦"];

const infeccion = habitantes.map((habitante) =>
  habitante === "👦" ? "🧟" : habitante
);
console.log(infeccion);

//
const pokemonList = [
  {
    name: "Pikachu",
    id: 25,
    sprites: {
      front: "http://picachu-front.png",
      front_default: "http://picachu-front_default.png",
      world_dream: {
        front: "http://picachu-bueno.png",
      },
    },
    dni: "23456789P",
    height: 87,
  },
  {
    name: "Bulbasour",
    id: 1,
    sprites: {
      front: "http://bulbasour-front.png",
      front_default: "http://bulbasour-front_default.png",
      world_dream: {
        front: "http://bulbasour-bueno.png",
      },
    },
    dni: "23456781B",
    height: 62,
  },
  {
    name: "Charmander",
    id: 7,
    sprites: {
      front: "http://charmander-front.png",
      front_default: "http://charmander-front_default.png",
      world_dream: {
        front: "http://charmander-bueno.png",
      },
    },
    dni: "23456782C",
    height: 93,
  },
];

const newPokemonList = pokemonList.map((pokemon) => ({
  name: pokemon.name,
  id: pokemon.id,
  Image: pokemon.sprites.world_dream.front,
}));

console.log(newPokemonList);
