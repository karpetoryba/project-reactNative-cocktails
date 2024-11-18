import { Button, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}> Coctails </Text>
        <Text style={styles.soustext}>Les meilleurs coctails de Bordeaux:</Text>
        <Button title="Voir tous les coctails" />
        <Text style={styles.centretext}>
          Un cocktail est une boisson réalisée en mélangeant différents
          ingrédients, généralement des alcools, des jus de fruits, des sodas,
          des sirops, et parfois même des épices ou des herbes aromatiques.{" "}
        </Text>
        <Text style={styles.title}> Les meilleurs coctails: </Text>
        <Text style={styles.cocktail}>
          1. Mojito - Rhum, menthe, sucre, citron vert, eau gazeuse
        </Text>
        <Text style={styles.cocktail}>
          2. Pina Colada - Rhum, crème de coco, jus d'ananas
        </Text>
        <Text style={styles.cocktail}>
          3. Margarita - Tequila, triple sec, jus de citron vert
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>© 2024 VotreNom. Tous droits réservés.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  card: {
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },

  title: {
    fontSize: 50,
    color: "orange",
    fontWeight: "bold",
    margin: 20,
  },
  soustext: {
    fontSize: 10,
    fontWeight: "bold",
    margin: 20,
  },
  centretext: {
    margin: 20,
  },
  cocktail: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#333",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    backgroundColor: "#333",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 14,
  },
});
