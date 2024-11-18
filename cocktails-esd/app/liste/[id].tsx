import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CocktailDetailsScreen() {
  const { id } = useLocalSearchParams();
  const cocktailsList = [
    {
      id: 1,
      title: "Mojito",
      ingredients: ["Rhum", "Menthe", "Citron vert", "Eau gazeuse", "Sucre"],
      description:
        "Cocktail cubain à base de rhum, de citron vert et de menthe fraîche.",
    },
    {
      id: 2,
      title: "Pina Colada",
      ingredients: ["Rhum", "Lait de coco", "Jus d'ananas"],
      description:
        "Cocktail à base de rhum, de lait de coco et de jus d'ananas.",
    },
    {
      id: 3,
      title: "Margarita",
      ingredients: ["Tequila", "Triple sec", "Jus de citron vert"],
      description:
        "Cocktail à base de tequila, de triple sec et de jus de citron vert.",
    },
  ];
  const cocktail = cocktailsList.find(
    (cocktail) => cocktail.id === parseInt(id)
  );
  return (
    <View>
      <Text>Details du cocktail {id}</Text>
      <Text>{cocktail.title}</Text>
    </View>
  );
}
