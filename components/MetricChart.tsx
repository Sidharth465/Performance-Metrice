import { scale } from "@/hooks/measure";
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

interface MetricChartProps {
  metrics: Metric[];
  width: number;
}

const MetricChart: React.FC<MetricChartProps> = ({ metrics, width }) => {
  const strengthData = metrics.map((m) => m.strength);
  const speedData = metrics.map((m) => m.speed);

  const height = Dimensions.get("window").height;

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.subtitle}>Metrics Chart</Text>
      <LineChart
        data={{
          labels: metrics.map((item, index) => `E${index + 1}`),
          datasets: [
            {
              data: strengthData,
              color: () => "#ff6384",
              strokeWidth: 2,
              withDots: true,
            },
            {
              data: speedData,
              color: () => "#36a2eb",
              strokeWidth: 2,
              withDots: true,
            },
          ],
        }}
        width={width * 0.85}
        height={(height * 30) / 100}
        chartConfig={{
          backgroundColor: "#333",
          backgroundGradientFrom: "#555",
          backgroundGradientTo: "#777",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        style={styles.chart}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    backgroundColor: "#444",
    borderRadius: 12,
    elevation: 2,
  },
  subtitle: {
    fontSize: scale(8),
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#fff",
  },
  chart: {
    borderRadius: 15,
  },
});

export default MetricChart;
