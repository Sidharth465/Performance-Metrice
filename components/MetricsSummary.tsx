import { scale } from "@/hooks/measure";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MetricSummaryProps {
  maxStrength: number | null;
  maxSpeed: number | null;
}

const MetricSummary: React.FC<MetricSummaryProps> = ({
  maxStrength,
  maxSpeed,
}) => {
  return (
    <View style={styles.summaryContainer}>
      <View
        style={{
          justifyContent: "center",

          alignItems: "center",
        }}
      >
        <Text style={styles.titleText}>Summary</Text>
      </View>
      <View style={styles.titleData}>
        <Text style={styles.summaryText}>Max Strength:</Text>
        <Text style={styles.summaryText}>
          {maxStrength ? `${maxStrength} kg` : "N/A"}
        </Text>
      </View>
      <View style={styles.titleData}>
        <Text style={styles.summaryText}>Max Speed:</Text>
        <Text style={styles.summaryText}>
          {maxSpeed ? `${maxSpeed} s` : "N/A"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    backgroundColor: "#333",
    padding: scale(5),
    borderRadius: 8,
    marginVertical: 20,
    elevation: 2,
  },
  summaryText: {
    fontSize: scale(6),
    fontWeight: "bold",
    color: "#fff",
  },
  titleText: {
    fontSize: scale(8),
    fontWeight: "bold",
    color: "#fff",
  },
  titleData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default MetricSummary;
