// Nodos

// recuperar
const title = document.querySelector("#title");

// recuperar varios
const parrafos = document.querySelectorAll(".parrafo");

// modificar
title.textContent = "Ahora este es otro título";
title.id = "titulito";

for (const parrafo of parrafos) {
  parrafo.textContent = "PARRAFO";
};

// eliminar
parrafos[0].remove();

// crear
const h2 = document.createElement("h2");
h2.id = "subtitulo";
h2.textContent = "Esto es un subtítulo";

// injectar
document.body.appendChild(h2);

// alterar el orden de inyección dinámica
const mejoresJuegos = [
  "Tetris",
  "Super Mario Bros.",
  "The Legend of Zelda: Ocarina of Time",
  "Super Mario 64",
  "Final Fantasy VII",
  "Minecraft",
  "Pac-Man",
  "Doom",
  "Street Fighter II",
  "Super Mario Bros. 3",
  "The Legend of Zelda: A Link to the Past",
  "Grand Theft Auto V",
  "Metal Gear Solid",
  "Half-Life 2",
  "GoldenEye 007",
  "Super Mario World",
  "Resident Evil 4",
  "The Legend of Zelda: Breath of the Wild",
  "Halo: Combat Evolved",
  "Chrono Trigger",
  "Red Dead Redemption 2",
  "The Last of Us",
  "Dark Souls",
  "Mass Effect 2",
  "Uncharted 2: Among Thieves",
  "Persona 5",
  "God of War (2018)",
  "Bloodborne",
  "Shadow of the Colossus",
  "BioShock",
  "The Witcher 3: Wild Hunt",
  "Portal 2",
  "Skyrim (The Elder Scrolls V)",
  "Castlevania: Symphony of the Night",
  "Super Metroid",
  "Sekiro: Shadows Die Twice",
  "Hollow Knight",
  "Undertale",
  "Celeste"
];

const ul = document.querySelector("#lista");

mejoresJuegos.sort().reverse();

for (const videojuego of mejoresJuegos) {
  const li = document.createElement("li");
  li.textContent = videojuego;
  ul.appendChild(li);
};
