export type PokemonPage = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export type PokemonSummary = {
  id: string;
  name: string;
  image: string;
  types: string[];
};

export interface Pokemon {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: Ability[]
  past_abilities: PastAbility[]
  forms: Form[]
  game_indices: Index[]
  held_items: any[]
  location_area_encounters: string
  moves: Mfe[]
  species: Species
  sprites: Sprites
  cries: Cries
  stats: Stat[]
  past_stats: PastStat[]
  types: Type[]
  past_types: any[]
}

export interface Ability {
  is_hidden: boolean
  slot: number
  ability: {
    name: string
    url: string
  }
}

export interface PastAbility {
  generation: Generation
  abilities: Ability[]
}

export interface Generation {
  name: string
  url: string
}

export interface Form {
  name: string
  url: string
}

export interface Index {
  game_index: number
  version: Version
}

export interface Version {
  name: string
  url: string
}

export interface Mfe {
  move: Move
  version_group_details: VersionGroupDetail[]
}

export interface Move {
  name: string
  url: string
}

export interface VersionGroupDetail {
  level_learned_at: number
  version_group: VersionGroup
  move_learn_method: MoveLearnMethod
  order?: number
}

export interface VersionGroup {
  name: string
  url: string
}

export interface MoveLearnMethod {
  name: string
  url: string
}

export interface Species {
  name: string
  url: string
}

export interface Sprites {
  versions: any
  back_shiny: string
  back_female: any
  front_shiny: string
  back_default: string
  front_female: any
  front_default: string
  back_shiny_female: any
  front_shiny_female: any
}

export interface Icons {
  animated: Animated
  front_default: string
}

export interface Animated {
  front_default: string
  back_shiny: string
  back_female: any
  front_shiny: string
  back_default: string
  front_female: any
  back_shiny_female: any
  front_shiny_female: any
}

export interface Cries {
  latest: string
  legacy: string
}

export interface Stat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export interface PastStat {
  generation: Generation
  stats: Stat[]
}

export interface Type {
  slot: number
  type: {
    name: string
    url: string
  }
}
