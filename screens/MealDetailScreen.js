import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

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
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 8,
    marginVertical: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
