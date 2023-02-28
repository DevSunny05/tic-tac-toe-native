import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Cross = () => {
  return (
    <View style={styles.cross}>
      <View style={styles.crossline} />
      <View style={[styles.crossline, styles.crosslineReverse]} />
    </View>
  );
};

const styles = StyleSheet.create({
    cross: {
      flex: 1,
      
    },
    crossline: {
        position: "absolute",
        left: "48%",
        width: 10,
        height: "100%",
        borderRadius: 5,
        backgroundColor: "white",
        transform: [
          {
            rotate: "45deg",
          },
        ],
      },
      crosslineReverse: {
        transform: [
          {
            rotate: "-45deg",
          },
        ],
      },

})

export default Cross;
