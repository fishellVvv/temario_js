const pokemonList = [
  { number: 1,  name: "bulbasaur", types: ["grass", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
  { number: 2,  name: "ivysaur", types: ["grass", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
  { number: 3,  name: "venusaur", types: ["grass", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
  { number: 4,  name: "charmander", types: ["fire"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
  { number: 5,  name: "charmeleon", types: ["fire"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
  { number: 6,  name: "charizard", types: ["fire", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
  { number: 7,  name: "squirtle", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
  { number: 8,  name: "wartortle", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
  { number: 9,  name: "blastoise", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
  { number: 10, name: "caterpie", types: ["bug"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" },
  { number: 11, name: "metapod", types: ["bug"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" },
  { number: 12, name: "butterfree", types: ["bug", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" },
  { number: 13, name: "weedle", types: ["bug", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" },
  { number: 14, name: "kakuna", types: ["bug", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" },
  { number: 15, name: "beedrill", types: ["bug", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" },
  { number: 16, name: "pidgey", types: ["normal", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" },
  { number: 17, name: "pidgeotto", types: ["normal", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" },
  { number: 18, name: "pidgeot", types: ["normal", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" },
  { number: 19, name: "rattata", types: ["normal"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png" },
  { number: 20, name: "raticate", types: ["normal"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png" },
  { number: 21, name: "spearow", types: ["normal", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png" },
  { number: 22, name: "fearow", types: ["normal", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png" },
  { number: 23, name: "ekans", types: ["poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png" },
  { number: 24, name: "arbok", types: ["poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png" },
  { number: 25, name: "pikachu", types: ["electric"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
  { number: 26, name: "raichu", types: ["electric"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png" },
  { number: 27, name: "sandshrew", types: ["ground"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png" },
  { number: 28, name: "sandslash", types: ["ground"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png" },
  { number: 29, name: "nidoran♀", types: ["poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png" },
  { number: 30, name: "nidorina", types: ["poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png" },
  { number: 31, name: "nidoqueen", types: ["poison", "ground"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png" },
  { number: 32, name: "nidoran♂", types: ["poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png" },
  { number: 33, name: "nidorino", types: ["poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png" },
  { number: 34, name: "nidoking", types: ["poison", "ground"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png" },
  { number: 35, name: "clefairy", types: ["fairy"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png" },
  { number: 36, name: "clefable", types: ["fairy"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png" },
  { number: 37, name: "vulpix", types: ["fire"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png" },
  { number: 38, name: "ninetales", types: ["fire"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png" },
  { number: 39, name: "jigglypuff", types: ["normal", "fairy"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" },
  { number: 40, name: "wigglytuff", types: ["normal", "fairy"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png" },
  { number: 41, name: "zubat", types: ["poison", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png" },
  { number: 42, name: "golbat", types: ["poison", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png" },
  { number: 43, name: "oddish", types: ["grass", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png" },
  { number: 44, name: "gloom", types: ["grass", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png" },
  { number: 45, name: "vileplume", types: ["grass", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png" },
  { number: 46, name: "paras", types: ["bug", "grass"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png" },
  { number: 47, name: "parasect", types: ["bug", "grass"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png" },
  { number: 48, name: "venonat", types: ["bug", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png" },
  { number: 49, name: "venomoth", types: ["bug", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png" },
  { number: 50, name: "diglett", types: ["ground"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png" },
  { number: 51, name: "dugtrio", types: ["ground"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png" },
  { number: 52, name: "meowth", types: ["normal"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png" },
  { number: 53, name: "persian", types: ["normal"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png" },
  { number: 54, name: "psyduck", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png" },
  { number: 55, name: "golduck", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png" },
  { number: 56, name: "mankey", types: ["fighting"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png" },
  { number: 57, name: "primeape", types: ["fighting"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png" },
  { number: 58, name: "growlithe", types: ["fire"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png" },
  { number: 59, name: "arcanine", types: ["fire"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png" },
  { number: 60, name: "poliwag", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png" },
  { number: 61, name: "poliwhirl", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png" },
  { number: 62, name: "poliwrath", types: ["water", "fighting"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png" },
  { number: 63, name: "abra", types: ["psychic"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png" },
  { number: 64, name: "kadabra", types: ["psychic"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png" },
  { number: 65, name: "alakazam", types: ["psychic"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png" },
  { number: 66, name: "machop", types: ["fighting"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png" },
  { number: 67, name: "machoke", types: ["fighting"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png" },
  { number: 68, name: "machamp", types: ["fighting"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png" },
  { number: 69, name: "bellsprout", types: ["grass", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png" },
  { number: 70, name: "weepinbell", types: ["grass", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png" },
  { number: 71, name: "victreebel", types: ["grass", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png" },
  { number: 72, name: "tentacool", types: ["water", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png" },
  { number: 73, name: "tentacruel", types: ["water", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png" },
  { number: 74, name: "geodude", types: ["rock", "ground"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png" },
  { number: 75, name: "graveler", types: ["rock", "ground"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png" },
  { number: 76, name: "golem", types: ["rock", "ground"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png" },
  { number: 77, name: "ponyta", types: ["fire"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png" },
  { number: 78, name: "rapidash", types: ["fire"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png" },
  { number: 79, name: "slowpoke", types: ["water", "psychic"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png" },
  { number: 80, name: "slowbro", types: ["water", "psychic"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png" },
  { number: 81, name: "magnemite", types: ["electric", "steel"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png" },
  { number: 82, name: "magneton", types: ["electric", "steel"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png" },
  { number: 83, name: "farfetch’d", types: ["normal", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png" },
  { number: 84, name: "doduo", types: ["normal", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png" },
  { number: 85, name: "dodrio", types: ["normal", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png" },
  { number: 86, name: "seel", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png" },
  { number: 87, name: "dewgong", types: ["water", "ice"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png" },
  { number: 88, name: "grimer", types: ["poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png" },
  { number: 89, name: "muk", types: ["poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png" },
  { number: 90, name: "shellder", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png" },
  { number: 91, name: "cloyster", types: ["water", "ice"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png" },
  { number: 92, name: "gastly", types: ["ghost", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png" },
  { number: 93, name: "haunter", types: ["ghost", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png" },
  { number: 94, name: "gengar", types: ["ghost", "poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" },
  { number: 95, name: "onix", types: ["rock", "ground"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png" },
  { number: 96, name: "drowzee", types: ["psychic"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png" },
  { number: 97, name: "hypno", types: ["psychic"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png" },
  { number: 98, name: "krabby", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png" },
  { number: 99, name: "kingler", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png" },
  { number: 100, name: "voltorb", types: ["electric"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png" },
  { number: 101, name: "electrode", types: ["electric"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png" },
  { number: 102, name: "exeggcute", types: ["grass", "psychic"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png" },
  { number: 103, name: "exeggutor", types: ["grass", "psychic"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png" },
  { number: 104, name: "cubone", types: ["ground"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png" },
  { number: 105, name: "marowak", types: ["ground"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png" },
  { number: 106, name: "hitmonlee", types: ["fighting"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png" },
  { number: 107, name: "hitmonchan", types: ["fighting"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png" },
  { number: 108, name: "lickitung", types: ["normal"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png" },
  { number: 109, name: "koffing", types: ["poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png" },
  { number: 110, name: "weezing", types: ["poison"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png" },
  { number: 111, name: "rhyhorn", types: ["ground", "rock"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png" },
  { number: 112, name: "rhydon", types: ["ground", "rock"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png" },
  { number: 113, name: "chansey", types: ["normal"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png" },
  { number: 114, name: "tangela", types: ["grass"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png" },
  { number: 115, name: "kangaskhan", types: ["normal"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png" },
  { number: 116, name: "horsea", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png" },
  { number: 117, name: "seadra", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png" },
  { number: 118, name: "goldeen", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png" },
  { number: 119, name: "seaking", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png" },
  { number: 120, name: "staryu", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png" },
  { number: 121, name: "starmie", types: ["water", "psychic"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png" },
  { number: 122, name: "mr. mime", types: ["psychic", "fairy"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png" },
  { number: 123, name: "scyther", types: ["bug", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png" },
  { number: 124, name: "jynx", types: ["ice", "psychic"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png" },
  { number: 125, name: "electabuzz", types: ["electric"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png" },
  { number: 126, name: "magmar", types: ["fire"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png" },
  { number: 127, name: "pinsir", types: ["bug"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png" },
  { number: 128, name: "tauros", types: ["normal"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png" },
  { number: 129, name: "magikarp", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png" },
  { number: 130, name: "gyarados", types: ["water", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png" },
  { number: 131, name: "lapras", types: ["water", "ice"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png" },
  { number: 132, name: "ditto", types: ["normal"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" },
  { number: 133, name: "eevee", types: ["normal"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" },
  { number: 134, name: "vaporeon", types: ["water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png" },
  { number: 135, name: "jolteon", types: ["electric"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png" },
  { number: 136, name: "flareon", types: ["fire"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png" },
  { number: 137, name: "porygon", types: ["normal"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png" },
  { number: 138, name: "omanyte", types: ["rock", "water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png" },
  { number: 139, name: "omastar", types: ["rock", "water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png" },
  { number: 140, name: "kabuto", types: ["rock", "water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png" },
  { number: 141, name: "kabutops", types: ["rock", "water"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png" },
  { number: 142, name: "aerodactyl", types: ["rock", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png" },
  { number: 143, name: "snorlax", types: ["normal"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png" },
  { number: 144, name: "articuno", types: ["ice", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png" },
  { number: 145, name: "zapdos", types: ["electric", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png" },
  { number: 146, name: "moltres", types: ["fire", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png" },
  { number: 147, name: "dratini", types: ["dragon"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png" },
  { number: 148, name: "dragonair", types: ["dragon"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png" },
  { number: 149, name: "dragonite", types: ["dragon", "flying"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png" },
  { number: 150, name: "mewtwo", types: ["psychic"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" },
  { number: 151, name: "mew", types: ["psychic"], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" }
];

const container = document.querySelector("main>ul");
for (const pokemon of pokemonList) {
  const frontUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`;
  const backUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.number}.png`;


  const li = document.createElement("li");
  li.classList.add("pokemonCard");
  li.classList.add(pokemon.types[0]);
    
  li.innerHTML = `
  <div class="top">
    <h2 class="name">${pokemon.name}</h2>
    <p class="number">#${pokemon.number}</p>
  </div>
  <div class="image">
    <img src="${frontUrl}" alt="${pokemon.name}" data-front="${frontUrl}" data-back="${backUrl}" loading="lazy" decoding="async"/>
  </div>
  <div class="bottom">
    <div class="types"></div>
    <span class="material-symbols-outlined back">undo</span>
  </div>
  `

  const typesDiv = li.querySelector(".types");
  for (const type of pokemon.types) {
    const p = document.createElement("p");
    p.textContent = type;
    p.classList.add("type");
    p.classList.add(type);
    typesDiv.appendChild(p);
  };

  container.appendChild(li);

  const img  = li.querySelector(".image img");
  const back = li.querySelector(".back");

  back.addEventListener("mouseenter", () => { img.src = img.dataset.back; });
  back.addEventListener("mouseleave", () => { img.src = img.dataset.front; });
};
