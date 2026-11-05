import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useFavoritePokemon } from "@/hooks/FavoritePokemonContext";

const RemoveFavorite = () => {
  const { back } = useRouter();
  const { removeFavoritePokemon } = useFavoritePokemon();

  const handleRemoveFavorite = () => {
    removeFavoritePokemon();
    back();
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Are you sure you want to remove this Pokémon from your favorites?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRemoveFavorite}>
          <Text style={styles.buttonText}>Yes, remove</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={back}>
          <Text style={styles.buttonText}>No, keep it</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default RemoveFavorite