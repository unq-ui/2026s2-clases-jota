import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import StatsBar from "@/components/StatsBar";

import { useFavoritePokemon } from "@/hooks/FavoritePokemonContext";

import PokeApi from "@/services/PokeApi";

import { typeColor } from "@/utils/typesColors";

import { Pokemon } from "@/types/PokeApiTypes";

const Details = () => {
  const navigation = useNavigation();
  const { addFavoritePokemon, removeFavoritePokemon, favoritePokemon } = useFavoritePokemon();
  const { idPokemon } = useLocalSearchParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    PokeApi.getPokemonDetails(Number(idPokemon))
      .then((response) => {
        setPokemon(response);
        navigation.setOptions({ title: `#${response.id}`, headerStyle: { backgroundColor: typeColor(response.types[0].type.name) } });
      });
  }, []);

  if (!pokemon) {
    return <Text>Loading...</Text>;
  }

  const handleAddFavorite = () => {
    addFavoritePokemon({
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types.map((t) => t.type.name),
      image: pokemon.sprites.front_default,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={[styles.cardImage, { backgroundColor: typeColor(pokemon.types[0].type.name) }]}>
        <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{pokemon.name}</Text>
        <View style={styles.typesContainer}>
          {pokemon.types.map((typeInfo) => (
            <View key={typeInfo.slot} style={[styles.pill, { backgroundColor: typeColor(typeInfo.type.name) }]}>
              <Text>{typeInfo.type.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.title}>{pokemon.height}</Text>
            <Text style={styles.description}>Height</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.title}>{pokemon.weight} G</Text>
            <Text style={styles.description}>Weight</Text>
          </View>
        </View>
        <View style={styles.baseStatsContainer}>
          <Text style={styles.title}>Base stats</Text>
          <StatsBar name="HP" value={pokemon.stats[0].base_stat} />
          <StatsBar name="ATK" value={pokemon.stats[1].base_stat} />
          <StatsBar name="DEF" value={pokemon.stats[2].base_stat} />
          <StatsBar name="SP ATK" value={pokemon.stats[3].base_stat} />
          <StatsBar name="SP DEF" value={pokemon.stats[4].base_stat} />
        </View>
        {
          favoritePokemon?.id === pokemon.id && (
            <TouchableOpacity style={styles.favoriteButton} onPress={removeFavoritePokemon}>
              <Text>Remove from Favorites</Text>
            </TouchableOpacity>
          )
        }
        {
          favoritePokemon?.id !== pokemon.id && (
            <TouchableOpacity style={styles.favoriteButton} onPress={handleAddFavorite}>
              <Text>Add to Favorites</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    gap: 16,
  },
  cardImage: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  image: {
    width: 100,
    height: 100,
  },
  cardContent: {
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: 'center',
  },
  typesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 48,
  },
  detailItem: {
    alignItems: "center",
    gap: 8,
  },
  description: {
    fontSize: 24,
    color: "#666",
  },
  baseStatsContainer: {
    width: "80%",
    gap: 8,
  },
  favoriteButton: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#CDCDCD",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  }
});

export default Details;