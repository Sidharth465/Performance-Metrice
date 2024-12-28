import { scale } from "@/hooks/measure";
import React, { useRef } from "react";
import { TextInput, StyleSheet, PixelRatio } from "react-native";
import { Dimensions, useWindowDimensions } from "react-native";

interface MetricInputProps {
  strength: string;
  speed: string;
  setStrength: React.Dispatch<React.SetStateAction<string>>;
  setSpeed: React.Dispatch<React.SetStateAction<string>>;
}

const MetricInput: React.FC<MetricInputProps> = ({
  strength,
  speed,
  setStrength,
  setSpeed,
}) => {
  // console.log("font size at 5", scale(6));

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Enter Strength (e.g., Bench Press Weight)"
        value={strength}
        keyboardType="numeric"
        onChangeText={setStrength}
        placeholderTextColor="#bbb"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Speed (e.g., 100m Sprint Time)"
        value={speed}
        keyboardType="numeric"
        onChangeText={setSpeed}
        placeholderTextColor="#bbb"
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    fontSize: scale(6),
    backgroundColor: "#333",
    color: "#fff",
  },
});

export default MetricInput;
