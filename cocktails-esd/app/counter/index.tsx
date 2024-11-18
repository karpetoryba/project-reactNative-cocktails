import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Counter() {
  //new count
  const [count, setCount] = useState(0);

  //addCoctail function
  const handleAddCocktail = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  //removeCoctail function
  const handleRemoveCocktail = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Ajouter</Text>
        <Text>Vous avez ajouté {count} cocktails</Text>
        <Button title="Ajouter des cocktails" onPress={handleAddCocktail} />
        <Button title="Suprimer des cocktails" onPress={handleRemoveCocktail} />
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
});
