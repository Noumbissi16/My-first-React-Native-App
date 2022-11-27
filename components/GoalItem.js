import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => {
       pressed && styles.pressedItem;
      }}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}> {props.text} </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "red",
  },
});

export default GoalItem;
