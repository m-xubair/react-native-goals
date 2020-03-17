import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [currentValue, setCurrentValue] = useState("");

  const handleChangeText = changedText => {
    setCurrentValue(changedText);
  };
  const setNewGoal = () => {
    props.handleSetGoalItem(currentValue);
    setCurrentValue("");
  };

  return (
    <Modal visible={props.visible} animated="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={currentValue}
          onChangeText={handleChangeText}
          style={styles.textInput}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button
              title="Cancle"
              color="red"
              onPress={props.handleModalClose}
            />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={setNewGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 30,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10
  },
  btnContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "50%"
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
