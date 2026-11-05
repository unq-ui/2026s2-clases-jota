import AsyncStorage from '@react-native-async-storage/async-storage';

const getFavoritePokemonId = () => AsyncStorage.getItem("favoritePokemon");

const setFavoritePokemonId = (pokemonId: number) => AsyncStorage.setItem("favoritePokemon", pokemonId.toString()).catch(() => null);

const removeFavoritePokemonId = () => AsyncStorage.removeItem("favoritePokemon").catch(() => null);

const StorageManager = { getFavoritePokemonId, setFavoritePokemonId, removeFavoritePokemonId };

export default StorageManager;
