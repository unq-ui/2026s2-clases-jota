import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useFavoritePokemon } from "@/hooks/FavoritePokemonContext";
import { typeColor } from "@/utils/typesColors";

const FavoriteHome = () => {
  const { back, push } = useRouter();
  const { favoritePokemon } = useFavoritePokemon();

  if (!favoritePokemon) {
    return (
      <View style={styles.container}>
        <Text>No favorite Pokémon selected.</Text>
        <TouchableOpacity onPress={back} style={styles.button}>
          <Text style={styles.buttonText}>Go find it</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: typeColor(favoritePokemon.types[0]) }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: favoritePokemon.image }} style={styles.image} />
      </View>
      <TouchableOpacity onPress={() => push("/favorite/remove")} style={styles.button}>
        <Text style={styles.buttonText}>Remove from Favorites</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    gap: 16,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default FavoriteHome;
