import { StyleSheet, View, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
  // const { mealId } = route.params;
  const mealId = route.params.mealId; // Assuming mealId is passed as a parameter

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.container}>
      <Text>{selectedMeal.title}</Text>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text>{selectedMeal.description}</Text>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginVertical: 8,
  },
});
