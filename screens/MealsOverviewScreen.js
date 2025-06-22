import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { navigate } from "./../node_modules/@react-navigation/routers/src/CommonActions";

function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params; // This will give you access to the params passed from the CategoriesScreen

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.container}>
      <Text>Meals Overview - {categoryId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
