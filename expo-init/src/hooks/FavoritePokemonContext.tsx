import PokeApi from "@/services/PokeApi";
import StorageManager from "@/services/StorageManager";
import { createContext, useContext, useEffect, useState } from "react";

type FavoritePokemonType = {
  id: number;
  name: string;
  types: string[];
  image: string;
};

type FavoritePokemonContextType = {
  favoritePokemon: FavoritePokemonType | undefined;
  addFavoritePokemon: (pokemon: FavoritePokemonType) => void;
  removeFavoritePokemon: () => void;
};

const FavoritePokemonContext = createContext<FavoritePokemonContextType | undefined>(undefined);

export const FavoritePokemonProvider = ({ children }: { children: React.ReactNode }) => {
  const [favoritePokemon, setFavoritePokemons] = useState<FavoritePokemonType | undefined>();

  useEffect(() => {
    StorageManager.getFavoritePokemonId().then((pokemonId) => {
      if (pokemonId) {
        PokeApi.getPokemonDetails(Number(pokemonId)).then((pokemon) => {
            setFavoritePokemons({
              id: pokemon.id,
              name: pokemon.name,
              types: pokemon.types.map((type) => type.type.name),
              image: pokemon.sprites.front_default
            });
          }
        );
      }
    });
  }, []);

  const addFavoritePokemon = (pokemon: FavoritePokemonType) => {
    setFavoritePokemons(pokemon);
    StorageManager.setFavoritePokemonId(pokemon.id);
  };

  const removeFavoritePokemon = () => {
    StorageManager.removeFavoritePokemonId();
    setFavoritePokemons(undefined)
  };

  return (
    <FavoritePokemonContext.Provider value={{ favoritePokemon, addFavoritePokemon, removeFavoritePokemon }}>
      {children}
    </FavoritePokemonContext.Provider>
  );
};

export const useFavoritePokemon = () => {
  const context = useContext(FavoritePokemonContext);
  if (!context) {
    throw new Error("useFavoritePokemon must be used within a FavoritePokemonProvider");
  }
  return context;
};
