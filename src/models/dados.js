const emuladores = [
    {
      id: 1,
      nome: "ZSNES",
      console: "Super Nintendo Entertainment System (SNES)",
      versao: "1.51",
      plataforma: "Windows, Linux, DOS",
      jogos: [
        "Super Mario World",
        "Chrono Trigger",
        "The Legend of Zelda: A Link to the Past",
        "Super Metroid",
        "Donkey Kong Country",
        "Final Fantasy VI",
        "Street Fighter II Turbo",
        "Super Mario Kart",
        "Mega Man X",
        "EarthBound"
      ],
      desenvolvedor: "ZSNES Team",
      opensource: true,
      status: "Abandonado"
    },
    {
      id: 2,
      nome: "PCSX2",
      console: "PlayStation 2",
      versao: "1.6.0",
      plataforma: "Windows, macOS, Linux",
      jogos: [
        "God of War",
        "Final Fantasy X",
        "Shadow of the Colossus",
        "Grand Theft Auto: San Andreas",
        "Kingdom Hearts II",
        "Metal Gear Solid 3: Snake Eater",
        "Devil May Cry 3",
        "Jak and Daxter: The Precursor Legacy",
        "Persona 4",
        "Okami"
      ],
      desenvolvedor: "PCSX2 Team",
      opensource: true,
      status: "Desenvolvimento"
    },
    {
      id: 3,
      nome: "Dolphin",
      console: "Nintendo GameCube e Wii",
      versao: "5.0",
      plataforma: "Windows, macOS, Linux, Android",
      jogos: [
        "Super Smash Bros. Melee",
        "The Legend of Zelda: Twilight Princess",
        "Metroid Prime",
        "Super Mario Galaxy",
        "Resident Evil 4",
        "Mario Kart Wii",
        "Paper Mario: The Thousand-Year Door",
        "Wii Sports",
        "The Legend of Zelda: The Wind Waker",
        "F-Zero GX"
      ],
      desenvolvedor: "Dolphin Team",
      opensource: true,
      status: "Estável"
    },
    {
      id: 4,
      nome: "Citra",
      console: "Nintendo 3DS",
      versao: "1.0 (nightly)",
      plataforma: "Windows, macOS, Linux, Android",
      jogos: [
        "The Legend of Zelda: Ocarina of Time 3D",
        "Pokémon Sun and Moon",
        "Super Mario 3D Land",
        "Animal Crossing: New Leaf",
        "Mario Kart 7",
        "Super Smash Bros. for 3DS",
        "Fire Emblem Awakening",
        "Luigi's Mansion: Dark Moon",
        "Kid Icarus: Uprising",
        "Monster Hunter 4 Ultimate"
      ],
      desenvolvedor: "Citra Team",
      opensource: true,
      status: "Estável"
    },
    {
      id: 5,
      nome: "PPSSPP",
      console: "PlayStation Portable (PSP)",
      versao: "1.15.4",
      plataforma: "Windows, macOS, Linux, Android, iOS, Nintendo Switch",
      jogos: [
        "God of War: Chains of Olympus",
        "Grand Theft Auto: Liberty City Stories",
        "Monster Hunter Freedom Unite",
        "Crisis Core: Final Fantasy VII",
        "Tekken 6",
        "Persona 3 Portable",
        "Patapon 2",
        "LittleBigPlanet",
        "Dissidia 012 Final Fantasy",
        "Metal Gear Solid: Peace Walker"
      ],
      desenvolvedor: "Henrik Rydgård",
      opensource: true,
      status: "Estável"
    },
    {
      id: 6,
      nome: "MAME",
      console: "Vários sistemas de arcade",
      versao: "0.258",
      plataforma: "Windows, macOS, Linux",
      jogos: [
        "Pac-Man",
        "Street Fighter II",
        "Metal Slug",
        "Donkey Kong",
        "Galaga",
        "Ms. Pac-Man",
        "Bubble Bobble",
        "The King of Fighters '98",
        "R-Type",
        "Raiden"
      ],
      desenvolvedor: "MAMEdev",
      opensource: true,
      status: "Desenvolvimento"
    },
    {
      id: 7,
      nome: "RetroArch",
      console: "Vários (front-end)",
      versao: "1.15.0",
      plataforma: "Windows, macOS, Linux, Android, iOS, consoles de videogame",
      jogos: [
        "Super Mario Bros. 3 (NES)",
        "Sonic the Hedgehog (Genesis)",
        "Final Fantasy VII (PS1)",
        "Street Fighter Alpha 3 (CPS2)",
        "Metroid Fusion (GBA)",
        "Castlevania: Symphony of the Night (PS1)",
        "Super Mario 64 (N64)",
        "Pokémon Red (Game Boy)",
        "Chrono Cross (PS1)",
        "Donkey Kong Country 2 (SNES)"
      ],
      desenvolvedor: "Libretro Team",
      opensource: true,
      status: "Estável"
    },
    {
      id: 8,
      nome: "ePSXe",
      console: "PlayStation",
      versao: "2.0.5",
      plataforma: "Windows, Android, Linux",
      jogos: [
        "Final Fantasy VII",
        "Crash Bandicoot",
        "Resident Evil 2",
        "Tekken 3",
        "Metal Gear Solid",
        "Spyro the Dragon",
        "Gran Turismo 2",
        "Silent Hill",
        "Castlevania: Symphony of the Night",
        "Tony Hawk's Pro Skater 2"
      ],
      desenvolvedor: "ePSXe Team",
      opensource: false,
      status: "Abandonado"
    },
    {
      id: 9,
      nome: "Visual Boy Advance",
      console: "Game Boy, Game Boy Color, Game Boy Advance",
      versao: "1.8.0-beta3",
      plataforma: "Windows, Linux, macOS",
      jogos: [
        "Pokémon FireRed",
        "The Legend of Zelda: The Minish Cap",
        "Metroid Fusion",
        "Final Fantasy Tactics Advance",
        "Golden Sun",
        "Mario & Luigi: Superstar Saga",
        "Castlevania: Aria of Sorrow",
        "Super Mario Advance 4: Super Mario Bros. 3",
        "Wario Land 4",
        "Pokémon Emerald"
      ],
      desenvolvedor: "VBA Team",
      opensource: true,
      status: "Abandonado"
    },
    {
      id: 10,
      nome: "Cemu",
      console: "Wii U",
      versao: "2.0-70",
      plataforma: "Windows, Linux",
      jogos: [
        "The Legend of Zelda: Breath of the Wild",
        "Super Mario 3D World",
        "Mario Kart 8",
        "Donkey Kong Country: Tropical Freeze",
        "Bayonetta 2",
        "Xenoblade Chronicles X",
        "Pikmin 3",
        "Super Smash Bros. for Wii U",
        "Shovel Knight",
        "Tokyo Mirage Sessions ♯FE"
      ],
      desenvolvedor: "Exzap, Petergov",
      opensource: "sim",
      status: "Estável"

    }
  ];

  export default { emuladores };
