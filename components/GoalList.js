import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";

const GoalList = props => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={props.goalItems}
      style={styles.listContainer}
      renderItem={goal => (
        <TouchableOpacity
          onPress={props.handleCompleteGoal.bind(null, goal.item.id)}
          style={styles.listItem}>
          <Text>{goal.item.value}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1
  },
  listItem: {
    padding: 10,
    margin: 10,
    borderColor: "#000",
    borderWidth: 1
  }
});

export default GoalList;
