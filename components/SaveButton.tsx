import { scale } from "@/hooks/measure";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

interface SaveButtonProps {
  saveMetrics: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ saveMetrics }) => {
  return (
    <Animatable.View animation="bounceIn" duration={800}>
      <TouchableOpacity style={styles.customButton} onPress={saveMetrics}>
        <Text style={styles.buttonText}>Save Metrics</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: "#ff6384",
    borderRadius: 12,
    width: "50%",
    paddingVertical: scale(6),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: scale(6),
    fontWeight: "bold",
  },
});

export default SaveButton;
