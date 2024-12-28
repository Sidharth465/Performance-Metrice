import { scale } from "@/hooks/measure";
import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";

const Header: React.FC = () => {
  const renderCount = useRef(0);
  renderCount.current += 1;
  // console.log("pixel ratio", PixelRatio.getFontScale());
  console.log(`MetricInput Rendered: ${renderCount.current} times`);
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>PM Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderWidth: 1,
    borderColor: "#555",
    padding: scale(6),
    fontSize: scale(6),
    backgroundColor: "#333",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ff6384",
  },
});

export default Header;
