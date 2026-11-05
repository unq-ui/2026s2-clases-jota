import { Stack } from "expo-router";

const FavoriteLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Favorite Pokemon" }} />
      <Stack.Screen name="remove" options={{ title: "Remove from Favorites" }} />
    </Stack>
  );
};

export default FavoriteLayout;
