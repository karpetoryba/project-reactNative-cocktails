import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Accueil" }} />
      <Stack.Screen name="counter/index" options={{ title: "Compteur" }} />
      <Stack.Screen name="liste/index" options={{ title: "Liste cocktails" }} />
      <Stack.Screen
        name="liste/[id]"
        options={{ title: "Détails d'un cocktail" }}
      />
    </Stack>
  );
}
