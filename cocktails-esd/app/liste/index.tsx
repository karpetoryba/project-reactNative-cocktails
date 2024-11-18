import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function CocktailsScreen() {
  const cocktailsList = [
    {
      id: "1",
      title: "Mojito",
      ingredients: ["Rhum", "menthe", "sucre", "citron vert", "eau gazeuse"],
      description:
        "Le Mojito est un cocktail cubain classique et rafraîchissant, très apprécié pour son goût équilibré entre le rhum, la menthe fraîche et le citron vert.",
    },
    {
      id: "2",
      title: "Pina Colada",
      ingredients: ["Rhum", "crème de coco", "jus d'ananas"],
      description:
        "La Pina Colada est un cocktail tropical emblématique à base de rhum, de crème de coco et de jus d'ananas.",
    },
    {
      id: "3",
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Cocktails</Text>
      <FlatList
        data={cocktailsList}
        renderItem={renderCocktail}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#FF5722",
  },
  card: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  cocktailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
