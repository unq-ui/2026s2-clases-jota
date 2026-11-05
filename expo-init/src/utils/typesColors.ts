export const TYPE_COLORS = {
  normal: '#C9C9B8',
  fighting: '#F2A09B',
  flying: '#B8C4F2',
  poison: '#D9A6DD',
  ground: '#E6CC96',
  rock: '#D4C57F',
  bug: '#C5D67A',
  ghost: '#C2B0E0',
  steel: '#BCC9D6',
  fire: '#F7BE91',
  water: '#A9CCF5',
  grass: '#A8D99B',
  electric: '#F7E27A',
  psychic: '#F5A3C0',
  ice: '#9ADBE3',
  dragon: '#B7A6F5',
  dark: '#B5A59D',
  fairy: '#F2B5CC',
  // tipos especiales (casi no aparecen)
  stellar: '#A9C6F0',
  unknown: '#A8C7C1',
  shadow: '#B3A8D1',
};

export const TYPE_TEXT_COLOR = '#1F2937';

export const typeColor = (type: string) => TYPE_COLORS[type] ?? '#D1D5DB';