import { View, Text, StyleSheet } from "react-native";

export default function CocktailsScreen() {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Cocktails</Text>
      {cocktailsList.map((cocktail) => (
        <View key={cocktail.id} style={styles.card}>
          <Text style={styles.cocktailTitle}>{cocktail.title}</Text>
          <Text>{cocktail.description}</Text>
          <Text>Ingrédients: {cocktail.ingredients.join(", ")}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#FF5722",
  },
  card: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cocktailTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
