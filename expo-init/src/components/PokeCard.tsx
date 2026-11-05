import { useRouter } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { PokemonSummary } from "@/types/PokeApiTypes";
import { typeColor } from "@/utils/typesColors";

const PokeCard = ({ id, image, types }: PokemonSummary) => {
  const { push } = useRouter();

  const handlePress = () => push(`/${id}`);

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.card, { backgroundColor: typeColor(types[0]) }]}>
      <Image source={{ uri: image }} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default PokeCard;