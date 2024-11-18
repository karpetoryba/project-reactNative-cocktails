import { Button, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}> Coktails </Text>
        <Text style={styles.soustext}>Les meilleurs coctails de Bordeaux:</Text>
        <Button title="Voir tous les coctails" />
        <Text style={styles.centretext}>
          Un cocktail est une boisson réalisée en mélangeant différents
          ingrédients, généralement des alcools, des jus de fruits, des sodas,
          des sirops, et parfois même des épices ou des herbes aromatiques.{" "}
        </Text>
        <Text style={styles.maintitle}> Les meilleurs coctails: </Text>
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
    backgroundColor: "#FAFAFA",
    padding: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 10,
    width: "90%",
  },
  title: {
    fontSize: 36,
    color: "#FF5722",
    fontWeight: "bold",
    marginBottom: 10,
  },
  maintitle: {
    fontSize: 25,
    color: "#FF5722",
    fontWeight: "bold",
    marginBottom: 10,
  },
  soustext: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
    color: "#555",
    textAlign: "center",
  },
  centretext: {
    marginBottom: 20,
    fontSize: 14,
    color: "#444",
    textAlign: "center",
  },
  cocktail: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 15,
    backgroundColor: "#FF5722",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "500",
  },
});
