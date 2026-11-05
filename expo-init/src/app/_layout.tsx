import { Stack } from "expo-router";

import { FavoritePokemonProvider } from "@/hooks/FavoritePokemonContext";

const RootLayout = () => {
  return (
    <FavoritePokemonProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="[idPokemon]" options={{ title: "Pokemon Details" }} />
      </Stack>
    </FavoritePokemonProvider>
  );
};

export default RootLayout;
