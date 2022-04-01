export class PokemonDetail {
  id!: number;
  order!: number;
  name!: string;
  height!: number;
  abilities: Ability[];
  spices!: Species;
  types: Type[];
  weight!: number;
  sprites!: Sprite;
  stats!: Stat[];
  forms!: PokemonForm;

  constructor() {
    this.abilities = [];
    this.types = [];
  }
}

class Ability {
  ability!: {
    name: string;
  };

  constructor() {}
}

class Species {
  url!: string;
}

class Type {
  slot!: number;
  type!: {
    name: string;
  };
}

class Sprite {
  front_default!: string;
  other:
    | {
        dream_world: {
          front_default: string;
        };
      }
    | undefined;
}

class Stat {
  base_stat!: number;
  stat!: {
    name: string;
  };
}

class PokemonForm {
  names!: string;
}