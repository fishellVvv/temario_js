fetch("https://rickandmortyapi.com/api/character")
  .then((result) => result.json())
  .then((result) => {
    for (const character of result.results) {
      document.querySelector("#container").innerHTML += `
        <li>
          <p>${character.name}</p>
          <img src="${character.image}" alt="${character.name}"/>
        </li>
        `;
    }
    console.log("Terminado!");
  });
