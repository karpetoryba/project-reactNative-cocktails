import { useRoute } from "@react-navigation/native";
import { router, useRouter } from "expo-router";
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Button } from "react-native";

export default function CocktailsScreen() {
  const router = useRouter();
  const cocktailsList = [
    {
      id: 1,
      title: "Mojito",
      ingredients: ["Rhum", "menthe", "sucre", "citron vert", "eau gazeuse"],
      description:
        "Le Mojito est un cocktail cubain classique et rafraîchissant, très apprécié pour son goût équilibré entre le rhum, la menthe fraîche et le citron vert.",
    },
    {
      id: 2,
      title: "Pina Colada",
      ingredients: ["Rhum", "crème de coco", "jus d'ananas"],
      description:
        "La Pina Colada est un cocktail tropical emblématique à base de rhum, de crème de coco et de jus d'ananas.",
    },
    {
      id: 3,
      title: "Margarita",
      ingredients: ["Tequila", "triple sec", "jus de citron vert"],
      description:
        "La Margarita est un cocktail mexicain classique à base de tequila, de triple sec et de jus de citron vert.",
    },
  ];

  const renderCocktail = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cocktailTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>Ingrédients: {item.ingredients.join(", ")}</Text>
    </View>
  );

  const handleNavigateToCocktailDetails = (cocktailId: number) => {
    router.push("liste/" + cocktailId);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Liste des cocktails</Text>

      <FlatList
        data={cocktailsList}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button
              title="Voir le cocktail"
              onPress={() => handleNavigateToCocktailDetails(item.id)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF3E0",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#D84315",
    textAlign: "center",
  },
  listItem: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D84315",
    paddingBottom: 10,
  },
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#FFE0B2",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  cocktailTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#BF360C",
    marginBottom: 6,
  },
  cocktailDescription: {
    fontSize: 16,
    color: "#4E342E",
    marginBottom: 8,
  },
  cocktailIngredients: {
    fontStyle: "italic",
    color: "#3E2723",
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#BF360C",
  },
});
