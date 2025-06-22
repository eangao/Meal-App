import { StyleSheet, Text, View } from "react-native";

function MealItem({ title }) {
  return (
    // <Pressable onPress={onPress}>
    <View style={styles.mealItem}>
      <Text style={styles.title}>{title}</Text>
    </View>
    // </Pressable>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#f9c2ff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
