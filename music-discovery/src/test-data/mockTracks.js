const mockTracks = [
  //Rock (13 tracks)
  { id: 1, title: 'Cobra', artist: 'Geese', time: '3:44', album: 'Gettin Killed', genre: 'Rock', sourceId: 1 }, // IndieFeed
  { id: 2, title: 'Taxes', artist: 'Geese', time: '3:17', album: 'Gettin Killed', genre: 'Rock', sourceId: 1 }, // IndieFeed
  { id: 3, title: 'Half Real', artist: 'Geese', time: '3:22', album: 'Gettin Killed', genre: 'Rock', sourceId: 2 }, // KEXP
  { id: 4, title: 'Prize Fighter', artist: 'Jean Dawson', time: '3:47', album: 'Rock A Bye Baby, Glimmer of God', genre: 'Rock', sourceId: 5 }, // Bandcamp
  { id: 5, title: 'Afterlife', artist: 'Alex G', time: '3:28', album: 'Headlights', genre: 'Rock', sourceId: 3 }, // BIRP.com
  { id: 6, title: 'Headlights', artist: 'Alex G', time: '4:55', album: 'Headlights', genre: 'Rock', sourceId: 3 }, // BIRP.com
  { id: 7, title: 'Beta Fish', artist: 'Vundabar', time: '3:38', album: 'Surgery and Pleasure', genre: 'Rock', sourceId: 7 }, // Deezer
  { id: 8, title: 'I Got Cracked', artist: 'Vundabar', time: '3:15', album: 'I Got Cracked', genre: 'Rock', sourceId: 7 }, // Deezer
  { id: 9, title: 'Junior', artist: 'Great Grandpa', time: '4:00', album: 'Patience, Moonbeam', genre: 'Rock', sourceId: 8 }, // Pandora
  { id: 10, title: 'Ladybug', artist: 'Great Grandpa', time: '3:50', album: 'Patience, Moonbeam', genre: 'Rock', sourceId: 8 }, // Pandora
  { id: 11, title: 'ROCKMAN', artist: 'Mk.gee', time: '2:56', album: 'ROCKMAN', genre: 'Rock', sourceId: 9 }, // MPR - The Current
  { id: 12, title: 'Little Bit More', artist: 'Mk.gee', time: '3:17', album: 'ROCKMAN', genre: 'Rock', sourceId: 9 }, // MPR - The Current
  { id: 13, title: 'Echoes', artist: 'The Strokes', time: '3:45', album: 'Modern Age', genre: 'Rock', sourceId: 2 }, // KEXP

  //Metal (10 tracks)
  { id: 14, title: 'Iron Throne', artist: 'Crimson Forge', time: '4:32', album: 'Ashes of Empire', genre: 'Metal', sourceId: 5 }, // Bandcamp
  { id: 15, title: 'Shadowfall', artist: 'Crimson Forge', time: '5:18', album: 'Ashes of Empire', genre: 'Metal', sourceId: 5 }, // Bandcamp
  { id: 16, title: 'Blood Moon Rising', artist: 'Obsidian Blade', time: '3:47', album: 'Midnight Carnage', genre: 'Metal', sourceId: 1 }, // IndieFeed
  { id: 17, title: 'Storm Breaker', artist: 'Thunder Serpent', time: '4:55', album: 'Electric Fury', genre: 'Metal', sourceId: 4 }, // AngryMetalGuy.com
  { id: 18, title: 'Eternal Void', artist: 'Void Walkers', time: '6:12', album: 'Dark Horizon', genre: 'Metal', sourceId: 6 }, // Tidal
  { id: 19, title: 'Chains of Wrath', artist: 'Iron Sentinel', time: '4:08', album: 'Steel Legion', genre: 'Metal', sourceId: 3 }, // BIRP.com
  { id: 20, title: 'Reaper\'s Call', artist: 'Death Crown', time: '5:33', album: 'Beyond the Grave', genre: 'Metal', sourceId: 4 }, // AngryMetalGuy.com
  { id: 21, title: 'Crimson Sky', artist: 'Savage Moon', time: '4:21', album: 'War Cry', genre: 'Metal', sourceId: 1 }, // IndieFeed
  { id: 22, title: 'Frozen Fire', artist: 'Arctic Demon', time: '3:59', album: 'Ice and Flame', genre: 'Metal', sourceId: 8 }, // Pandora
  { id: 23, title: 'Destroyer', artist: 'Black Titan', time: '5:45', album: 'Apocalypse Now', genre: 'Metal', sourceId: 5 }, // Bandcamp

  //Pop (10 tracks)
  { id: 27, title: 'Dancing Lights', artist: 'Luna Sky', time: '3:12', album: 'Starlight Dreams', genre: 'Pop', sourceId: 1 }, // IndieFeed
  { id: 28, title: 'Midnight Drive', artist: 'Luna Sky', time: '3:45', album: 'Starlight Dreams', genre: 'Pop', sourceId: 1 }, // IndieFeed
  { id: 29, title: 'Summer Breeze', artist: 'Coral Wave', time: '3:28', album: 'Endless Summer', genre: 'Pop', sourceId: 2 }, // KEXP
  { id: 30, title: 'Golden Hour', artist: 'Sunny Days', time: '3:19', album: 'Bright Side', genre: 'Pop', sourceId: 3 }, // BIRP.com
  { id: 31, title: 'Electric Heart', artist: 'Neon Dreams', time: '3:56', album: 'City Lights', genre: 'Pop', sourceId: 7 }, // Deezer
  { id: 32, title: 'Crystal Clear', artist: 'Diamond Rose', time: '3:33', album: 'Reflections', genre: 'Pop', sourceId: 3 }, // BIRP.com
  { id: 33, title: 'Heartbeat', artist: 'Velvet Touch', time: '3:42', album: 'Love Language', genre: 'Pop', sourceId: 6 }, // Tidal
  { id: 34, title: 'Rainbow Sky', artist: 'Prism Pop', time: '3:15', album: 'Color Theory', genre: 'Pop', sourceId: 8 }, // Pandora
  { id: 35, title: 'Forever Young', artist: 'Infinity Loop', time: '4:02', album: 'Timeless', genre: 'Pop', sourceId: 9 }, // MPR - The Current
  { id: 36, title: 'Catch Me', artist: 'Sugar Rush', time: '2:58', album: 'Sweet Escape', genre: 'Pop', sourceId: 2 }, // KEXP

  //Hip Hop (10 tracks)
  { id: 40, title: 'Street Dreams', artist: 'Metro King', time: '3:22', album: 'Concrete Jungle', genre: 'Hip Hop', sourceId: 1 }, // IndieFeed
  { id: 41, title: 'Money Moves', artist: 'Cash Flow', time: '3:45', album: 'Hustle Hard', genre: 'Hip Hop', sourceId: 3 }, // BIRP.com
  { id: 42, title: 'No Cap', artist: 'Real Talk', time: '2:58', album: 'Facts Only', genre: 'Hip Hop', sourceId: 6 }, // Tidal
  { id: 43, title: 'Rise Up', artist: 'Phoenix Wright', time: '4:12', album: 'From the Ashes', genre: 'Hip Hop', sourceId: 1 }, // IndieFeed
  { id: 44, title: 'City Lights', artist: 'Urban Legend', time: '3:33', album: 'Night Shift', genre: 'Hip Hop', sourceId: 3 }, // BIRP.com
  { id: 45, title: 'Gold Chains', artist: 'Lux Life', time: '3:18', album: 'Drip Season', genre: 'Hip Hop', sourceId: 9 }, // MPR - The Current
  { id: 46, title: 'Pressure', artist: 'Diamond Hands', time: '3:41', album: 'Under Pressure', genre: 'Hip Hop', sourceId: 6 }, // Tidal
  { id: 47, title: 'Run It Up', artist: 'Stack Money', time: '3:27', album: 'Get Rich', genre: 'Hip Hop', sourceId: 6 }, // Tidal
  { id: 48, title: 'Boss Mode', artist: 'CEO Vibes', time: '3:52', album: 'Executive Suite', genre: 'Hip Hop', sourceId: 1 }, // IndieFeed
  { id: 49, title: 'Flexin\'', artist: 'Stunt Double', time: '3:05', album: 'Show Off', genre: 'Hip Hop', sourceId: 3 }, // BIRP.com

  //Punk (10 tracks)
  { id: 53, title: 'Riot Squad', artist: 'Chaos Punk', time: '2:18', album: 'Anarchy Now', genre: 'Punk', sourceId: 5 }, // Bandcamp
  { id: 54, title: 'Burn It Down', artist: 'Molotov Kids', time: '2:45', album: 'Fire Starter', genre: 'Punk', sourceId: 5 }, // Bandcamp
  { id: 55, title: 'No Future', artist: 'Dead End Street', time: '2:33', album: 'Lost Generation', genre: 'Punk', sourceId: 1 }, // IndieFeed
  { id: 56, title: 'Rage Cage', artist: 'Fury Fist', time: '2:12', album: 'Fight Back', genre: 'Punk', sourceId: 2 }, // KEXP
  { id: 57, title: 'Rebel Yell', artist: 'Outcasts', time: '2:56', album: 'Against the Grain', genre: 'Punk', sourceId: 5 }, // Bandcamp
  { id: 58, title: 'Smash It', artist: 'Wrecking Crew', time: '2:22', album: 'Demolition', genre: 'Punk', sourceId: 3 }, // BIRP.com
  { id: 59, title: 'Street Fight', artist: 'Knuckle Up', time: '2:41', album: 'Brawler', genre: 'Punk', sourceId: 1 }, // IndieFeed
  { id: 60, title: 'Wake Up', artist: 'Alarm Clock', time: '2:28', album: 'Rise and Revolt', genre: 'Punk', sourceId: 5 }, // Bandcamp
  { id: 61, title: 'Broken System', artist: 'System Crash', time: '2:37', album: 'Glitch', genre: 'Punk', sourceId: 2 }, // KEXP
  { id: 62, title: 'Noise Complaint', artist: 'Loud Mouth', time: '2:15', album: 'Turn It Up', genre: 'Punk', sourceId: 3 }, // BIRP.com

  //Electronic (10 tracks)
  { id: 66, title: 'Neon Pulse', artist: 'Cyber Wave', time: '4:22', album: 'Digital Dreams', genre: 'Electronic', sourceId: 5 }, // Bandcamp
  { id: 67, title: 'Synthetic Love', artist: 'Robot Heart', time: '5:18', album: 'Machine Soul', genre: 'Electronic', sourceId: 1 }, // IndieFeed
  { id: 68, title: 'Bass Drop', artist: 'Sub Freq', time: '3:45', album: 'Low End Theory', genre: 'Electronic', sourceId: 5 }, // Bandcamp
  { id: 69, title: 'Laser Grid', artist: 'Pixel Storm', time: '4:33', album: 'Virtual Reality', genre: 'Electronic', sourceId: 7 }, // Deezer
  { id: 70, title: 'Glitch Mode', artist: 'Data Crash', time: '3:58', album: 'System Error', genre: 'Electronic', sourceId: 5 }, // Bandcamp
  { id: 71, title: 'Midnight Rave', artist: 'Strobe Light', time: '5:42', album: 'All Night Long', genre: 'Electronic', sourceId: 3 }, // BIRP.com
  { id: 72, title: 'Electric Dreams', artist: 'Volt Age', time: '4:15', album: 'Power Surge', genre: 'Electronic', sourceId: 7 }, // Deezer
  { id: 73, title: 'Future Sound', artist: 'Tomorrow Tech', time: '4:08', album: 'Next Gen', genre: 'Electronic', sourceId: 5 }, // Bandcamp
  { id: 74, title: 'Wave Form', artist: 'Synth Master', time: '5:27', album: 'Analog Digital', genre: 'Electronic', sourceId: 1 }, // IndieFeed
  { id: 75, title: 'Circuit Breaker', artist: 'Wire Frame', time: '3:51', album: 'Connected', genre: 'Electronic', sourceId: 7 }, // Deezer

  //Country (10 tracks)
  { id: 79, title: 'Dirt Road', artist: 'Dusty Boots', time: '3:42', album: 'Back Home', genre: 'Country', sourceId: 8 }, // Pandora
  { id: 80, title: 'Pickup Truck', artist: 'Rodeo Red', time: '3:28', album: 'Country Mile', genre: 'Country', sourceId: 1 }, // IndieFeed
  { id: 81, title: 'Moonshine Nights', artist: 'Whiskey River', time: '4:15', album: 'Down South', genre: 'Country', sourceId: 9 }, // MPR - The Current
  { id: 82, title: 'Southern Belle', artist: 'Sweet Tea', time: '3:33', album: 'Front Porch', genre: 'Country', sourceId: 7 }, // Deezer
  { id: 83, title: 'Barn Dance', artist: 'Boot Scootin\'', time: '3:19', album: 'Saturday Night', genre: 'Country', sourceId: 7 }, // Deezer
  { id: 84, title: 'Lonesome Highway', artist: 'Travelin\' Man', time: '4:08', album: 'Long Road', genre: 'Country', sourceId: 8 }, // Pandora
  { id: 85, title: 'Cowboy Heart', artist: 'Ranch Hand', time: '3:47', album: 'Wide Open Spaces', genre: 'Country', sourceId: 1 }, // IndieFeed
  { id: 86, title: 'Small Town Pride', artist: 'Main Street', time: '3:52', album: 'Where I Belong', genre: 'Country', sourceId: 3 }, // BIRP.com
  { id: 87, title: 'Honky Tonk Blues', artist: 'Jukebox Joe', time: '3:25', album: 'Neon Nights', genre: 'Country', sourceId: 9 }, // MPR - The Current
  { id: 88, title: 'Fishing Hole', artist: 'River Bend', time: '3:38', album: 'Simple Life', genre: 'Country', sourceId: 7 }, // Deezer

  //R&B (10 tracks)
  { id: 92, title: 'Smooth Operator', artist: 'Velvet Soul', time: '4:18', album: 'Midnight Groove', genre: 'R&B', sourceId: 6 }, // Tidal
  { id: 93, title: 'Late Night', artist: 'Silk Voice', time: '3:52', album: 'After Hours', genre: 'R&B', sourceId: 1 }, // IndieFeed
  { id: 94, title: 'Body Language', artist: 'Rhythm King', time: '3:45', album: 'Physical', genre: 'R&B', sourceId: 3 }, // BIRP.com
  { id: 95, title: 'Love Potion', artist: 'Magic Touch', time: '4:03', album: 'Spell Bound', genre: 'R&B', sourceId: 6 }, // Tidal
  { id: 96, title: 'Slow Motion', artist: 'Time Freeze', time: '4:27', album: 'Take It Easy', genre: 'R&B', sourceId: 6 }, // Tidal
  { id: 97, title: 'Satin Sheets', artist: 'Luxury Lounge', time: '3:38', album: 'Intimate', genre: 'R&B', sourceId: 9 }, // MPR - The Current
  { id: 98, title: 'Groove Thing', artist: 'Funk Master', time: '3:55', album: 'Get Down', genre: 'R&B', sourceId: 3 }, // BIRP.com
  { id: 99, title: 'Candlelight', artist: 'Soul Flame', time: '4:12', album: 'Romance', genre: 'R&B', sourceId: 6 }, // Tidal
  { id: 100, title: 'Sweet Honey', artist: 'Sugar Smooth', time: '3:42', album: 'Pure Sweetness', genre: 'R&B', sourceId: 1 }, // IndieFeed
  { id: 101, title: 'Midnight Desire', artist: 'Dream Lover', time: '4:21', album: 'Temptation', genre: 'R&B', sourceId: 3 }, // BIRP.com
];

export default mockTracks;