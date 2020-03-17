import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [goalItems, setGoalItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSetGoalItem = goalValue => {
    setGoalItems(goalItems => {
      return [...goalItems, { id: Math.random().toString(), value: goalValue }];
    });
    setIsModalOpen(false);
  };
  const handleCompleteGoal = id => {
    setGoalItems(goalItems => {
      return goalItems.filter(g => g.id !== id);
    });
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        style={styles.marginTop}
        onPress={() => setIsModalOpen(true)}
      />
      <GoalInput
        visible={isModalOpen}
        handleSetGoalItem={handleSetGoalItem}
        handleModalClose={handleModalClose}
      />
      <GoalList goalItems={goalItems} handleCompleteGoal={handleCompleteGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30
  }
});
