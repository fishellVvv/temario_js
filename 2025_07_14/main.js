const videogames = [
  {
    title: "Super Mario Odyssey",
    year: 2017,
    cover: "https://gaming-cdn.com/images/products/2618/orig/super-mario-odyssey-switch-nintendo-eshop-cover.jpg",
    platforms: ["Switch"],
    developer: "Nintendo EPD",
    genres: ["Platformer"],
    opencritic: 97
  },
  {
    title: "Super Mario Galaxy",
    year: 2007,
    cover: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/wii_24/SI_Wii_SuperMarioGalaxy.jpg",
    platforms: ["Wii"],
    developer: "Nintendo EAD",
    genres: ["Platformer"],
    opencritic: 97
  },
  {
    title: "Super Mario Galaxy 2",
    year: 2010,
    cover: "https://i.ytimg.com/vi/OpNt9bC4jrc/maxresdefault.jpg",
    platforms: ["Wii"],
    developer: "Nintendo EAD",
    genres: ["Platformer"],
    opencritic: 97
  },
  {
    title: "Baldur's Gate 3",
    year: 2023,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    platforms: ["PC", "PS5", "Xbox Series"],
    developer: "Larian Studios",
    genres: ["RPG"],
    opencritic: 96
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    year: 2017,
    cover: "https://gaming-cdn.com/images/products/2616/orig/the-legend-of-zelda-breath-of-the-wild-switch-juego-nintendo-eshop-europe-cover.jpg",
    platforms: ["Switch", "Wii U"],
    developer: "Nintendo EPD",
    genres: ["Action-Adventure","Open World"],
    opencritic: 96
  },
  {
    title: "Red Dead Redemption 2",
    year: 2018,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
    platforms: ["PS4","Xbox One","PC"],
    developer: "Rockstar Games",
    genres: ["Action-Adventure","Open World"],
    opencritic: 96
  },
  {
    title: "The Legend of Zelda: Tears of the Kingdom",
    year: 2023,
    cover: "https://media.vandal.net/m/2-2023/20232915302552_1.jpg",
    platforms: ["Switch"],
    developer: "Nintendo EPD",
    genres: ["Action-Adventure","Open World"],
    opencritic: 96
  },
  {
    title: "Elden Ring",
    year: 2022,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
    platforms: ["PS5","PS4","Xbox Series","Xbox One","PC"],
    developer: "FromSoftware",
    genres: ["Action RPG","Open World"],
    opencritic: 95
  },
  {
    title: "Disco Elysium: The Final Cut",
    year: 2021,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg",
    platforms: ["PC","PS4","PS5","Xbox One","Xbox Series","Switch"],
    developer: "ZA/UM",
    genres: ["RPG","Narrative"],
    opencritic: 95
  },
  {
    title: "Persona 5 Royal",
    year: 2019,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg",
    platforms: ["PS4","PS5","PC","Switch","Xbox One","Xbox Series"],
    developer: "Atlus",
    genres: ["JRPG"],
    opencritic: 95
  },
  {
    title: "Grand Theft Auto IV",
    year: 2008,
    cover: "https://cdn.mos.cms.futurecdn.net/pFL5M6w7wK68xCQ6bLAdji.png",
    platforms: ["PS3","Xbox 360","PC"],
    developer: "Rockstar North",
    genres: ["Action-Adventure","Open World"],
    opencritic: 95
  },
  {
    title: "Metroid Prime Remastered",
    year: 2023,
    cover: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_MetroidPrimeRemastered_image1600w.jpg",
    platforms: ["Switch"],
    developer: "Retro Studios",
    genres: ["Action-Adventure","FPS"],
    opencritic: 94
  },
  {
    title: "God of War",
    year: 2018,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
    platforms: ["PS4","PS5","PC"],
    developer: "Santa Monica Studio",
    genres: ["Action-Adventure"],
    opencritic: 94
  },
  {
    title: "Portal 2",
    year: 2011,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/header.jpg",
    platforms: ["PC","PS3","Xbox 360"],
    developer: "Valve",
    genres: ["Puzzle","FPS"],
    opencritic: 94
  },
  {
    title: "Half-Life: Alyx",
    year: 2020,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/header.jpg",
    platforms: ["PC (VR)"],
    developer: "Valve",
    genres: ["FPS","VR"],
    opencritic: 93
  },
  {
    title: "Hades",
    year: 2020,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg",
    platforms: ["PC","Switch","PS4","PS5","Xbox One","Xbox Series"],
    developer: "Supergiant Games",
    genres: ["Action","Roguelike"],
    opencritic: 93
  },
  {
    title: "The Witcher 3: Wild Hunt",
    year: 2015,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
    platforms: ["PC","PS4","PS5","Xbox One","Xbox Series","Switch"],
    developer: "CD Projekt Red",
    genres: ["RPG","Open World"],
    opencritic: 92
  },
  {
    title: "Bloodborne",
    year: 2015,
    cover: "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/NVmnBXze9ElHzU6SmykrJLIV.png",
    platforms: ["PS4"],
    developer: "FromSoftware",
    genres: ["Action RPG"],
    opencritic: 92
  },
  {
    title: "Celeste",
    year: 2018,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg",
    platforms: ["PC","Switch","PS4","Xbox One"],
    developer: "Maddy Makes Games",
    genres: ["Platformer"],
    opencritic: 92
  },
  {
    title: "Red Dead Redemption",
    year: 2010,
    cover: "https://gaming-cdn.com/images/products/7047/orig/red-dead-redemption-pc-juego-steam-cover.jpg",
    platforms: ["PS3","Xbox 360","Switch","PS4"],
    developer: "Rockstar San Diego",
    genres: ["Action-Adventure","Open World"],
    opencritic: 92
  },
  {
    title: "Resident Evil 2 (Remake)",
    year: 2019,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/883710/header.jpg",
    platforms: ["PS4","PS5","Xbox One","Xbox Series","PC"],
    developer: "Capcom",
    genres: ["Survival Horror"],
    opencritic: 91
  },
  {
    title: "Sekiro: Shadows Die Twice",
    year: 2019,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
    platforms: ["PS4","PS5","Xbox One","Xbox Series","PC"],
    developer: "FromSoftware",
    genres: ["Action-Adventure"],
    opencritic: 91
  },
  {
    title: "Hollow Knight",
    year: 2017,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
    platforms: ["PC","Switch","PS4","Xbox One"],
    developer: "Team Cherry",
    genres: ["Metroidvania"],
    opencritic: 90
  },
  {
    title: "Monster Hunter: World",
    year: 2018,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg",
    platforms: ["PS4","Xbox One","PC"],
    developer: "Capcom",
    genres: ["Action RPG"],
    opencritic: 90
  },
  {
    title: "Portal",
    year: 2007,
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/400/header.jpg",
    platforms: ["PC","PS3","Xbox 360"],
    developer: "Valve",
    genres: ["Puzzle","FPS"],
    opencritic: 90
  }
];

document.querySelector("#themeBtn").addEventListener("click", (ev) => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    ev.target.textContent = "🌑";
  } else {
    ev.target.textContent = "☀️";
  };
});

const renderVideogames = (vgList) => {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  if (!vgList.length) {
    container.innerHTML = `
    <h2>No hay coincidencias</h2>
    `;
  } else {
    for (const vg of vgList) {
        const li = document.createElement("li");
        li.innerHTML = `
        <h2>${vg.title}</h2>
        <div class="cover">
          <img src="${vg.cover}" alt="${vg.title} cover"/>
          <p class="badge">${vg.opencritic}</p>
        </div>
        `;
        container.appendChild(li);
    };
  };
};

document.querySelector("#vgInput").addEventListener("input", (ev) => {
  const q = ev.target.value.trim();
  const isNumeric = /^\d+$/.test(q);

  const filteredVideogames = videogames.filter(vg => {
    if (q === "") return true;
    if (isNumeric) return vg.opencritic === Number(q);
    return vg.title.toLowerCase().includes(q.toLowerCase());
  });

  renderVideogames(filteredVideogames);
});

window.addEventListener("DOMContentLoaded", () => {
  renderVideogames(videogames);
});
