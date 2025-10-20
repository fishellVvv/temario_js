const superheroes = [
  {
    name: "Spider-Man",
    age: 18,
    city: "Queens, New York",
    realName: "Peter Parker",
  },
  {
    name: "Iron Man",
    age: 48,
    city: "Malibú, California",
    realName: "Tony Stark",
  },
  {
    name: "Captain America",
    age: 105,
    city: "Brooklyn, New York",
    realName: "Steve Rogers",
  },
  {
    name: "Thor",
    age: 1500,
    city: "Asgard / New Asgard",
    realName: "Thor Odinson",
  },
  {
    name: "Black Widow",
    age: 35,
    city: "Rusia / New York",
    realName: "Natasha Romanoff",
  },
  { name: "Hulk", age: 45, city: "Dayton, Ohio", realName: "Bruce Banner" },
  { name: "Hawkeye", age: 42, city: "Iowa", realName: "Clint Barton" },
  {
    name: "Black Panther",
    age: 39,
    city: "Wakanda (Birnin Zana)",
    realName: "T'Challa",
  },
  {
    name: "Doctor Strange",
    age: 42,
    city: "New York",
    realName: "Stephen Strange",
  },
  {
    name: "Scarlet Witch",
    age: 32,
    city: "Sokovia / Westview",
    realName: "Wanda Maximoff",
  },
  {
    name: "Vision",
    age: 5,
    city: "Westview / New York",
    realName: "Vision",
  },
  { name: "Ant-Man", age: 40, city: "San Francisco", realName: "Scott Lang" },
  { name: "Wasp", age: 38, city: "San Francisco", realName: "Hope van Dyne" },
  {
    name: "Captain Marvel",
    age: 40,
    city: "Los Ángeles / Espacio",
    realName: "Carol Danvers",
  },
  {
    name: "Star-Lord",
    age: 38,
    city: "Misuri / Knowhere",
    realName: "Peter Quill",
  },
  {
    name: "Winter Soldier",
    age: 106,
    city: "Brooklyn, New York",
    realName: "Bucky Barnes",
  },
  { name: "Falcon", age: 38, city: "Harlem, New York", realName: "Sam Wilson" },
  {
    name: "War Machine",
    age: 50,
    city: "Philadelphia, Pennsylvania",
    realName: "James Rhodes",
  },
  { name: "Nick Fury", age: 70, city: "New York", realName: "Nicholas Fury" },
  {
    name: "Maria Hill",
    age: 38,
    city: "Washington, D.C.",
    realName: "Maria Hill",
  },
  {
    name: "Phil Coulson",
    age: 50,
    city: "Los Angeles, California",
    realName: "Phil Coulson",
  },
  {
    name: "Daredevil",
    age: 33,
    city: "Hell's Kitchen, New York",
    realName: "Matt Murdock",
  },
  {
    name: "Jessica Jones",
    age: 35,
    city: "New York",
    realName: "Jessica Jones",
  },
  {
    name: "Luke Cage",
    age: 40,
    city: "Harlem, New York",
    realName: "Carl Lucas",
  },
  { name: "Iron Fist", age: 33, city: "New York", realName: "Danny Rand" },
  { name: "Punisher", age: 42, city: "New York", realName: "Frank Castle" },
  {
    name: "She-Hulk",
    age: 35,
    city: "Los Angeles, California",
    realName: "Jennifer Walters",
  },
  {
    name: "Moon Knight",
    age: 40,
    city: "Chicago, Illinois",
    realName: "Marc Spector",
  },
  {
    name: "Ms. Marvel",
    age: 16,
    city: "Jersey City, New Jersey",
    realName: "Kamala Khan",
  },
  { name: "Kate Bishop", age: 22, city: "New York", realName: "Kate Bishop" },
  {
    name: "Yelena Belova",
    age: 27,
    city: "Saint Petersburg, Russia",
    realName: "Yelena Belova",
  },
  {
    name: "Shang-Chi",
    age: 24,
    city: "San Francisco, California",
    realName: "Shang-Chi",
  },
  { name: "Wong", age: 50, city: "Kamar-Taj / New York", realName: "Wong" },
  { name: "Okoye", age: 35, city: "Wakanda (Birnin Zana)", realName: "Okoye" },
  { name: "Shuri", age: 21, city: "Wakanda (Birnin Zana)", realName: "Shuri" },
  { name: "Nakia", age: 34, city: "Wakanda (Birnin Zana)", realName: "Nakia" },
  {
    name: "Valkyrie",
    age: 1500,
    city: "New Asgard, Norway",
    realName: "Brunnhilde",
  },
  { name: "Korg", age: 1000, city: "New Asgard, Norway", realName: "Korg" },
  { name: "Sif", age: 1500, city: "Asgard / New Asgard", realName: "Lady Sif" },
  {
    name: "Quicksilver",
    age: 30,
    city: "Sokovia",
    realName: "Pietro Maximoff",
  },
  {
    name: "Beast",
    age: 40,
    city: "Salem Center, New York",
    realName: "Hank McCoy",
  },
  {
    name: "Cyclops",
    age: 35,
    city: "Westchester County, New York",
    realName: "Scott Summers",
  },
  {
    name: "Jean Grey",
    age: 34,
    city: "Westchester County, New York",
    realName: "Jean Grey",
  },
  { name: "Storm", age: 35, city: "New York", realName: "Ororo Munroe" },
  {
    name: "Wolverine",
    age: 150,
    city: "Westchester / Alberta",
    realName: "James 'Logan' Howlett",
  },
  {
    name: "Professor X",
    age: 60,
    city: "Westchester County, New York",
    realName: "Charles Xavier",
  },
  {
    name: "Nightcrawler",
    age: 28,
    city: "Westchester County, New York",
    realName: "Kurt Wagner",
  },
  {
    name: "Colossus",
    age: 30,
    city: "Siberia, Russia",
    realName: "Piotr Nikolayevich Rasputin",
  },
  {
    name: "Rogue",
    age: 28,
    city: "Westchester County, New York",
    realName: "Anna Marie",
  },
  {
    name: "Gambit",
    age: 32,
    city: "New Orleans, Louisiana",
    realName: "Remy LeBeau",
  },
  { name: "Deadpool", age: 39, city: "New York", realName: "Wade Wilson" },
  {
    name: "Spider-Man (Miles)",
    age: 16,
    city: "Brooklyn, New York",
    realName: "Miles Morales",
  },
  {
    name: "Ghost-Spider",
    age: 17,
    city: "Queens, New York",
    realName: "Gwen Stacy",
  },
  { name: "Nebula", age: 40, city: "Knowhere / Space", realName: "Nebula" },
  { name: "Gamora", age: 29, city: "Knowhere / Space", realName: "Gamora" },
  { name: "Mantis", age: 30, city: "Knowhere / Space", realName: "Mantis" },
  {
    name: "Drax",
    age: 49,
    city: "Knowhere / Space",
    realName: "Drax the Destroyer",
  },
  { name: "Groot", age: 25, city: "Knowhere / Space", realName: "Groot" },
  {
    name: "Rocket Raccoon",
    age: 35,
    city: "Knowhere / Space",
    realName: "Rocket",
  },
  {
    name: "Adam Warlock",
    age: 2,
    city: "Sovereign / Space",
    realName: "Adam Warlock",
  },
  {
    name: "Cosmo",
    age: 7,
    city: "Knowhere / Space",
    realName: "Cosmo the Spacedog",
  },

  { name: "Ikaris", age: 7000, city: "Global / Earth", realName: "Ikaris" },
  { name: "Sersi", age: 7000, city: "London, UK", realName: "Sersi" },
  {
    name: "Kingo",
    age: 7000,
    city: "Los Angeles, California",
    realName: "Kingo",
  },
  { name: "Sprite", age: 7000, city: "London, UK", realName: "Sprite" },
  {
    name: "Phastos",
    age: 7000,
    city: "Chicago, Illinois",
    realName: "Phastos",
  },
  { name: "Makkari", age: 7000, city: "Domo / Space", realName: "Makkari" },
  { name: "Druig", age: 7000, city: "South America, Earth", realName: "Druig" },
  { name: "Thena", age: 7000, city: "Global / Earth", realName: "Thena" },
  {
    name: "Gilgamesh",
    age: 7000,
    city: "Global / Earth",
    realName: "Gilgamesh",
  },

  {
    name: "Black Bolt",
    age: 40,
    city: "Attilan",
    realName: "Blackagar Boltagon",
  },
  {
    name: "Medusa",
    age: 38,
    city: "Attilan",
    realName: "Medusalith Amaquelin",
  },

  { name: "Namor", age: 100, city: "Atlantis", realName: "Namor McKenzie" },
  {
    name: "Silver Surfer",
    age: 1000,
    city: "Zenn-La / Space",
    realName: "Norrin Radd",
  },
  { name: "Nova", age: 30, city: "Xandar / Space", realName: "Richard Rider" },
  {
    name: "Captain Britain",
    age: 35,
    city: "London, UK",
    realName: "Brian Braddock",
  },
  {
    name: "Spider-Woman",
    age: 34,
    city: "San Francisco, California",
    realName: "Jessica Drew",
  },
  {
    name: "Ironheart",
    age: 19,
    city: "Chicago, Illinois",
    realName: "Riri Williams",
  },
  {
    name: "Blue Marvel",
    age: 80,
    city: "New York, New York",
    realName: "Adam Brashear",
  },
  {
    name: "Squirrel Girl",
    age: 20,
    city: "New York, New York",
    realName: "Doreen Green",
  },
  {
    name: "Moon Girl",
    age: 10,
    city: "New York, New York",
    realName: "Lunella Lafayette",
  },
  { name: "Echo", age: 30, city: "New York, New York", realName: "Maya Lopez" },
  {
    name: "Monica Rambeau",
    age: 35,
    city: "New Orleans, Louisiana",
    realName: "Monica Rambeau",
  },
  {
    name: "Quake",
    age: 32,
    city: "Washington, D.C.",
    realName: "Daisy Johnson",
  },

  { name: "Psylocke", age: 32, city: "London, UK", realName: "Betsy Braddock" },
  {
    name: "Jubilee",
    age: 25,
    city: "Westchester County, New York",
    realName: "Jubilation Lee",
  },
  {
    name: "Iceman",
    age: 30,
    city: "Westchester County, New York",
    realName: "Bobby Drake",
  },
  {
    name: "Angel",
    age: 32,
    city: "Westchester County, New York",
    realName: "Warren Worthington III",
  },
  {
    name: "Bishop",
    age: 40,
    city: "Westchester County, New York",
    realName: "Lucas Bishop",
  },
  {
    name: "X-23",
    age: 20,
    city: "Westchester County, New York",
    realName: "Laura Kinney",
  },
  {
    name: "Magik",
    age: 28,
    city: "Westchester County, New York",
    realName: "Illyana Rasputin",
  },
  {
    name: "Kitty Pryde",
    age: 28,
    city: "Westchester County, New York",
    realName: "Katherine Pryde",
  },
  {
    name: "Polaris",
    age: 30,
    city: "Westchester County, New York",
    realName: "Lorna Dane",
  },
  {
    name: "Havok",
    age: 33,
    city: "Westchester County, New York",
    realName: "Alex Summers",
  },
  {
    name: "Domino",
    age: 35,
    city: "New York, New York",
    realName: "Neena Thurman",
  },
  {
    name: "Cable",
    age: 50,
    city: "New York, New York",
    realName: "Nathan Summers",
  },

  {
    name: "Mr. Fantastic",
    age: 40,
    city: "New York, New York",
    realName: "Reed Richards",
  },
  {
    name: "Invisible Woman",
    age: 38,
    city: "New York, New York",
    realName: "Susan Storm",
  },
  {
    name: "Human Torch",
    age: 30,
    city: "New York, New York",
    realName: "Johnny Storm",
  },
  { name: "Thing", age: 40, city: "New York, New York", realName: "Ben Grimm" },
];

// map -> clase 2025_07_30

// filter
const youngSuperheroes = superheroes.filter((superhero) => superhero.age < 10);

const superheroesWithX = superheroes.filter((superhero) =>
  superhero.name.toLowerCase().includes("x")
);

console.log(youngSuperheroes);
console.log(superheroesWithX);

// find
const NYsuperhero = superheroes.find((superhero) =>
  superhero.city.includes("New York")
);
console.log(NYsuperhero);

// every
const everyOldest = superheroes.every((superhero) => superhero.age > 99);
console.log(everyOldest);

// some
const someOldest = superheroes.some((superhero) => superhero.age > 99);
console.log(someOldest);

// reduce
const totalAges = superheroes.reduce(
  (acc, superhero) => acc + superhero.age,
  0
);
console.log(totalAges);

// filter con reduce
const youngSuperheroes2 = superheroes.reduce((acc, superhero) => {
  if (superhero.age < 10) {
    acc.push(superhero);
  }
  return acc;
}, []);
console.log(youngSuperheroes2);
