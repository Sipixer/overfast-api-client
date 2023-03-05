# OverFast API Node Module

<p align=center><img width="460" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Overwatch_2_logo.svg/2560px-Overwatch_2_logo.svg.png"></img></p>

> This package is a wrapper for the Overfast API by Valentin "TeKrop" PORCHET [https://overfast-api.tekrop.fr/].

## Features

- Heroes
- Roles
- Gamemodes
- Maps
- Search Players
- Player
  - Summary
  - Career

## Install

```
npm install overfast-api
```

## Player Summary Example

The player data is cached for 1 hour. For more information, please refer to https://overfast-api.tekrop.fr/.

```typescript
import Overwatch from "overfast-api";

Overwatch.player("Sipixer#2880").summary.then((data) => {
  console.log(data);
});
```

```typescript
{
  username: 'Sipixer',
  avatar: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/dc5301f28de3bc59660b42f1fde4ef0598013ae9c1a2ba0f079abb94413d45e5.png',
  title: null,
  endorsement: {
    level: 1,
    frame: 'https://static.playoverwatch.com/img/pages/career/icons/endorsement/1-9de6d43ec5.svg#icon'
  },
  competitive: {
    pc: {
        tank: {
            division: 'master',
            tier: 4,
            role_icon: 'https://static.playoverwatch.com/img/pages/career/icons/role/tank-f64702b684.svg#icon',
            rank_icon: 'https://static.playoverwatch.com/img/pages/career/icons/rank/MasterTier-4-397f8722e0.png'
        },
        damage: {
            division: 'master',
            tier: 2,
            role_icon: 'https://static.playoverwatch.com/img/pages/career/icons/role/offense-ab1756f419.svg#icon',
            rank_icon: 'https://static.playoverwatch.com/img/pages/career/icons/rank/MasterTier-2-f736990f04.png'
        },
        support: {
            division: 'master',
            tier: 3,
            role_icon: 'https://static.playoverwatch.com/img/pages/career/icons/role/support-0258e13d85.svg#icon',
            rank_icon: 'https://static.playoverwatch.com/img/pages/career/icons/rank/MasterTier-3-cb03be0a6e.png'
        }
    },
    console: null
  },
  privacy: 'public'
}
```

---

## Player Search Example

The following parameters are available for use in the API:

- `name`: A required parameter that specifies the player nickname to search for.
- `privacy`: An optional parameter that specifies the privacy settings of the player career. The possible values are `"public"` and `"private"`.
- `order_by`: An optional parameter that specifies the ordering field and the way it's arranged (ascending/descending). The format is `^(player_id|name|privacy):(asc|desc)$`. The default value is `"name:asc"`.
- `offset`: An optional parameter that specifies the offset of the results. The value must be greater than or equal to 0. The default value is 0.
- `limit`: An optional parameter that specifies the limit of results per page. The value must be greater than 0. The default value is 20.

```typescript
import Overwatch from "overfast-api";

Overwatch.searchPlayers({ name: "Sipixer" }).then((result) => {
  console.log(result);
});
```

```typescript
{
  total: 1,
  results: [
    {
      player_id: 'Sipixer-2880',
      name: 'Sipixer#2880',
      privacy: 'public',
      career_url: 'https://overfast-api.tekrop.fr/players/Sipixer-2880'
    }
  ]
}
```

---

## Heroes Example

The API supports the following additional parameters:

- `role`: An optional parameter that filters the search results based on the Overwatch hero roles. The possible values are `"damage"`, `"support"`, and `"tank"`.
- `locale`: An optional parameter that specifies the locale to be displayed. The default value is `"en-us"`. The possible values are `"de-de"`, `"en-gb"`, `"en-us"`, `"es-es"`, `"es-mx"`, `"fr-fr"`, `"it-it"`, `"ja-jp"`, `"ko-kr"`, `"pl-pl"`, `"pt-br"`, `"ru-ru"`, and `"zh-tw"`. These locales are supported by Blizzard.

```typescript
import Overwatch from "overfast-api";

Overwatch.heroes({ locale: "fr-fr" }).then((heroes) => {
  console.log(heroes);
});
```

```typescript
[
  {
    key: 'ana',
    name: 'Ana',
    portrait: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png',
    role: 'support'
  },
  {
    key: 'mercy',
    name: 'Ange',
    portrait: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png',
    role: 'support'
  },
  ...
]
```

## License

MIT
