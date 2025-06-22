import { StyleSheet, View, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

/**
 * MealDetailScreen displays detailed information about a selected meal, including its image, title,
 * details (duration, complexity, affordability), ingredients, and steps.
 *
 * @param {object} props - The props object.
 * @param {object} props.route - The route object containing navigation parameters.
 * @param {object} props.route.params - The parameters passed to the route.
 * @param {string} props.route.params.mealId - The ID of the selected meal.
 *
 * Note: FlatList is not used for rendering the ingredients, steps list here because the list of ingredients and steps
 * is typically short and simple, making a direct `.map()` sufficient and more concise. FlatList is
 * more suitable for long or complex lists where performance optimizations like virtualization are needed.
 */
function MealDetailScreen({ route }) {
  // const { mealId } = route.params;
  const mealId = route.params.mealId; // Assuming mealId is passed as a parameter

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>

      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}

      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
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
