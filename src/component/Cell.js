import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Cross from "./Cross";

const Cell = (props) => {
    const {cell,onPress}=props
  return (
    <Pressable
    //   key={`row-${rowIndex}-col-${columnIndex}`}
      onPress={() => onPress()}
      style={styles.cell}
    >
      {cell === "O" && <View style={styles.circle} />}
      {cell === "X" && <Cross />}
    </Pressable>
  );
};

export default Cell;

const styles = StyleSheet.create({
    cell: {
        width: 100,
        height: 100,
        flex: 1,
      },
      circle: {
        flex: 1,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        borderWidth: 10,
        borderColor: "white",
    
        // top: 105 * 0,
        // left: 105 * 1,
      },
});
