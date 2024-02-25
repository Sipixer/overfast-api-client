# OverFast API Node Module

<p align=center><img width="460" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Overwatch_2_logo.svg/2560px-Overwatch_2_logo.svg.png"></img></p>

> This package is a wrapper for the Overfast API by Valentin "TeKrop" PORCHET [https://overfast-api.tekrop.fr/].

## Install

```
npm i overfast-api-client
```

## Usage

```typescript
import OverfastClient from "overfast-api-client";
```

## Features

- [Heroes](#heroes)
  - [Heroes](#heroes)
  - [Hero](#hero)
  - [Roles](#roles)
- [Maps](#maps)
  - [Maps](#maps)
  - [Gamemodes](#gamemodes)
- [Players](#players)
  - [Career](#career)
  - [Summary](#stats)
  - [Search](#search)
- [Global Configuration](#global-configuration)


## Heroes

Retrieve information about Overwatch heroes, including their roles and abilities.

### Heroes

Fetch a list of all Overwatch heroes.

[Source Documentation](https://overfast-api.tekrop.fr/#tag/Heroes/operation/list_heroes)
  
  ```typescript 
const overfast = new OverfastClient();

overfast.heroes.getHeroes().then((heroes) => {
    console.log(heroes);
});
  ```


<details>
  <summary>Result</summary>

  Result is an array of objects with the following structure:

```json
  {
    key: 'ana',
    name: 'Ana',
    portrait: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png',
    role: 'support'
  }
```
</details>

### Hero

Retrieve detailed information about a specific hero.\
Hero localisation and abilities are available in the response.

[Source Documentation](https://overfast-api.tekrop.fr/#tag/Heroes/operation/get_hero)

```typescript
const overfast = new OverfastClient();

overfast.heroes.getHero('ana').then((hero) => {
    console.log(hero);
});
```

<details>
  <summary>Result</summary>

  Result is an object with the following structure:

```json
{
  name: 'Ana',
  description: 'One of the founding members of Overwatch, Ana uses her skills and expertise to defend her home and the people she cares for.',
  portrait: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png',
  role: 'support',
  location: 'Cairo, Egypt',
  hitpoints: { armor: 0, health: 200, shields: 0, total: 200 },
  abilities: [
    {
      name: 'Biotic Rifle',
      description: 'Long-range rifle that heals allies and damages enemies.  Hold to zoom in.',
      icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/efe0ebb135e87dc26b60f0d20500dcd7553ad121ab2b10cd4ffb5db17be9c977.png',
      video: [Object]
    },
    {
      name: 'Sleep Dart',
      description: 'Fires a dart that puts an enemy to sleep.',
      icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/20707fd82265412fdc6d2353daa88ec7558cd71c89aa3ac6cf0e78bbbfcabd80.png',
      video: [Object]
    },
    {
      name: 'Biotic Grenade',
      description: 'Throws a grenade that heals and increases healing on allies, while damaging and preventing healing on enemies.',
      icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/c8190b234bf0a0e28eecffe162d0c942e6b8656e95f4688c6ca3b025fa5a487d.png',
      video: [Object]
    },
    {
      name: 'Nano Boost',
      description: "Increases an ally's damage, while reducing damage taken.",
      icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6fda18b343f3fd0e8dc50fa5a91589e1ca9ed7471a354f61dfc9f22b27b19497.png',
      video: [Object]
    }
  ],
  story: {
    summary: 'A founding member of Overwatch and once renowned as the greatest sniper in the world, Ana Amari comes from a long line of decorated military veterans. Though she was thought to have perished in a firefight with Talon, Ana has rejoined the fray to protect her country, family, and closest allies.',
    media: { type: 'video', link: 'https://youtu.be/yzFWIw7wV8Q' },
    chapters: [ [Object], [Object], [Object] ]
  }
}
```

</details>

### Roles

Get insights into the different roles available for heroes.

[Source Documentation](https://overfast-api.tekrop.fr/#tag/Heroes/operation/list_roles)

```typescript
const overfast = new OverfastClient();

overfast.heroes.getRoles().then((roles) => {
    console.log(roles);
});
```

<details>
  <summary>Result</summary>

  Result is an array of objects with the following structure:

```json
{
    key: 'tank',
    name: 'Tank',
    icon: 'https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltf0889daa1ef606db/6504cff74d2a764cb7973991/Tank.svg?format=webply&quality=90',
    description: 'Tank heroes soak up damage and shatter fortified positions, like closely grouped enemies and narrow chokepoints. If you’re a tank, you lead the charge.'
  }
```
</details>

## Maps

Access details about maps and their associated game modes.

### Maps

Explore the various maps available in Overwatch.

[Source Documentation](https://overfast-api.tekrop.fr/#tag/Maps/operation/list_maps)

```typescript
const overfast = new OverfastClient();

overfast.maps.getMaps().then((maps) => {
    console.log(maps);
});
```

<details>
  <summary>Result</summary>

  Result is an array of objects with the following structure:

```json
{
    name: 'King’s Row',
    screenshot: 'https://overfast-api.tekrop.fr/static/maps/kings_row.jpg',
    gamemodes: [ 'hybrid' ],
    location: 'London, United Kingdom',
    country_code: 'UK'
}
```
</details>

### Gamemodes

Discover the different game modes associated with Overwatch maps.

[Source Documentation](https://overfast-api.tekrop.fr/#tag/Maps/operation/get_gamemode)

```typescript
const overfast = new OverfastClient();

overfast.maps.getGamemodes().then((gamemodes) => {
    console.log(gamemodes);
});
```

<details>
  <summary>Result</summary>

  Result is an array of objects with the following structure:

```json
{
    key: 'control',
    name: 'Control',
    icon: 'https://overfast-api.tekrop.fr/static/gamemodes/control-icon.svg',
    description: 'Teams fight to hold a single objective. The first team to win two rounds wins the map.',
    screenshot: 'https://overfast-api.tekrop.fr/static/gamemodes/control.avif'
}
```
</details>

## Players

Gather career statistics, summary information, and search for players.

### Career

Access detailed career statistics of Overwatch players.

Specify a gamemode to view statistics exclusively for that mode. \
If not specified, competitive stats will be shown by default. \
You can also filter by a specific hero to see their statistics only. \
Choose a platform for data filtering. If not specified, the default platform (PC, if available) will be selected.

[Source Documentation](https://overfast-api.tekrop.fr/#tag/Players/operation/get_player_career_stats)

```typescript
const overfast = new OverfastClient();

overfast.players.player("Sipixer#2880").career().then((career) => {
    console.log(career);
});
``` 


<details>
  <summary>Result</summary>

  Result is an object with the following structure:

```json
{
  'all-heroes': {
    assists: {
      healing_done: 210430,
      defensive_assists: 294,
      assists: 323,
      offensive_assists: 106
    },
    average: {
      objective_kills_avg_per_10_min: 4.17,
      objective_time_avg_per_10_min: 70,
      final_blows_avg_per_10_min: 3.23,
      time_spent_on_fire_avg_per_10_min: 85,
      objective_contest_time_avg_per_10_min: 40,
      solo_kills_avg_per_10_min: 0.43,
      hero_damage_done_avg_per_10_min: 3974,
      deaths_avg_per_10_min: 6.2,
      eliminations_avg_per_10_min: 11.4,
      assists_avg_per_10_min: 13.9,
      healing_done_avg_per_10_min: 9054
    },
    best: {
      eliminations_most_in_game: 31,
      final_blows_most_in_game: 12,
      all_damage_done_most_in_game: 11303,
      healing_done_most_in_game: 22002,
      defensive_assists_most_in_game: 29,
      offensive_assists_most_in_game: 10,
      objective_kills_most_in_game: 11,
      objective_time_most_in_game: 152,
      multikill_best: 3,
      solo_kills_most_in_game: 12,
      time_spent_on_fire_most_in_game: 63,
      melee_final_blows_most_in_game: 3,
      kill_streak_best: 10,
      hero_damage_done_most_in_game: 10573,
      barrier_damage_done_most_in_game: 2869,
      assists_most_in_game: 30,
      objective_contest_time_most_in_game: 152,
      environmental_kills_most_in_game: 1
    },
    combat: {
      deaths: 144,
      objective_kills: 97,
      final_blows: 75,
      objective_time: 1637,
      melee_final_blows: 8,
      time_spent_on_fire: 1986,
      eliminations: 265,
      objective_contest_time: 925,
      solo_kills: 10,
      multikills: 2,
      hero_damage_done: 92364,
      damage_done: 92364,
      environmental_kills: 1
    },
    game: {
      time_played: 13945,
      games_played: 20,
      games_won: 10,
      games_lost: 10,
      hero_wins: 10
    }
  }
}
```
</details>

### Summary

Obtain summary information about Overwatch players.

[Source Documentation](https://overfast-api.tekrop.fr/#tag/Players/operation/get_player_summary)

```typescript
const overfast = new OverfastClient();

overfast.players.player("Sipixer#2880").summary().then((summary) => {
    console.log(summary);
});
```

<details>
  <summary>Result</summary>

  Result is an object with the following structure:

```json
{
  username: 'Sipixer',
  avatar: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/dc5301f28de3bc59660b42f1fde4ef0598013ae9c1a2ba0f079abb94413d45e5.png',
  namecard: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/fa6994c31bba175a98562a811e80c0fe82a2dbf984b54e08e1f634b1af57bb48.png',
  title: 'Peasant',
  endorsement: {
    level: 2,
    frame: 'https://static.playoverwatch.com/img/pages/career/icons/endorsement/2-8b9f0faa25.svg#icon'
  },
  competitive: {
    pc: {
      season: 9,
      tank: null,
      damage: null,
      support: [Object],
      open: null
    },
    console: null
  }
}
```
</details>

### Search

Search for Overwatch players by their username.

[Source Documentation](https://overfast-api.tekrop.fr/#tag/Players/operation/search_players)

```typescript
const overfast = new OverfastClient();

overfast.players.searchPlayers("Sipixer").then((players) => {
    console.log(players);
});
```

<details>
  <summary>Result</summary>

  Result is an objects with the following structure:

```json
{
  total: 1,
  results: [
    {
      player_id: 'Sipixer-2880',
      name: 'Sipixer#2880',
      avatar: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/dc5301f28de3bc59660b42f1fde4ef0598013ae9c1a2ba0f079abb94413d45e5.png',
      namecard: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/fa6994c31bba175a98562a811e80c0fe82a2dbf984b54e08e1f634b1af57bb48.png',
      title: 'Peasant',
      career_url: 'https://overfast-api.tekrop.fr/players/Sipixer-2880',
      blizzard_id: 'c157bc83ab7489e0bba82fa0%7Cdd9b9ca9552b7d7dd186faef4ca0a23f'
    }
  ]
}
```
</details>

## Global Configuration

Tailor the OverFast API client to your needs by setting global configurations such as locale and base URL.

Locale is the language in which the data will be returned. \
URL is the base URL for the Overfast API. \
OverfastClient<T> where T is an extendable type for the Hero list.

Locale is set to "en-us" by default, can be override on every request if option available. \
[Source Documentation](https://overfast-api.tekrop.fr/)

```typescript
const overfast = new OverfastClient<"newHero">({
    locale: "fr-fr",
    url: "https://overfast-api.tekrop.fr/",
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Start integrating Overwatch data into your applications effortlessly today!


## License

MIT
