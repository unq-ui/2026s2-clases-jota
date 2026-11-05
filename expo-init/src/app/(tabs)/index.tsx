import { useEffect, useRef, useState } from "react"
import { FlatList, StyleSheet } from "react-native"

import PokeCard from "@/components/PokeCard"

import PokeApi from "@/services/PokeApi"

import { PokemonSummary } from "@/types/PokeApiTypes"

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonSummary[]>([]);
  const pageRef = useRef(0);
  const loadingRef = useRef(false);

  const getPokemonsPage = () => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    PokeApi.getPokemons(pageRef.current)
      .then((data) => {
        setPokemons((prev) => [...prev, ...data])
        pageRef.current += 1
      })
      .finally(() => {
        loadingRef.current = false;
      });
  };

  useEffect(() => getPokemonsPage(), []);

  return (
    <FlatList
      data={pokemons}
      renderItem={({ item }) => <PokeCard {...item} />}
      keyExtractor={(item) => `${item.id}`}
      onEndReached={getPokemonsPage}
      onEndReachedThreshold={0.5}
      numColumns={3}
      contentContainerStyle={[styles.spacing, styles.gap]}
      columnWrapperStyle={styles.gap}
    />
  );
}

const styles = StyleSheet.create({
  gap: { gap: 8 },
  spacing: { padding: 8 },
});

export default Home;
