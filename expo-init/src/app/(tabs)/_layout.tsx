import Favorite from "@/components/assets/favorite";
import Pokedex from "@/components/assets/pokedex";
import { useFavoritePokemon } from "@/hooks/FavoritePokemonContext";
import { Tabs } from "expo-router";
import { Image } from "react-native";

const TabsLayout = () => {
  const { favoritePokemon } = useFavoritePokemon();

  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen name="index" options={{ title: "Pokedex", tabBarIcon: ({ color }) => <Pokedex style={{ color }} /> }} />
      <Tabs.Screen name="favorite" options={{ title: "Favorite Pokemon", headerShown: false, tabBarIcon: ({ color }) => {
        if (!favoritePokemon) {
          return <Favorite width={24} height={24} style={{ color }} />
        }
        return <Image source={{ uri: favoritePokemon?.image }} style={{ width: 24, height: 24 }} />
      } }} />
    </Tabs>
  )
}

export default TabsLayout