import Header from "@/components/Header";
import MetricChart from "@/components/MetricChart";
import MetricInput from "@/components/MetricInput";
import MetricSummary from "@/components/MetricsSummary";
import SaveButton from "@/components/SaveButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  ToastAndroid, // Importing ToastAndroid for Android toasts
} from "react-native";

const App: React.FC = () => {
  const [strength, setStrength] = useState<string>("");
  const [speed, setSpeed] = useState<string>("");
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [maxStrength, setMaxStrength] = useState<number | null>(null);
  const [maxSpeed, setMaxSpeed] = useState<number | null>(null);

  const { width } = useWindowDimensions();

  useEffect(() => {
    loadMetrics();
  }, []);

  const loadMetrics = async () => {
    try {
      const storedMetrics = await AsyncStorage.getItem("metrics");
      if (storedMetrics) {
        const parsedMetrics: Metric[] = JSON.parse(storedMetrics);
        setMetrics(parsedMetrics);
        calculateMaxValues(parsedMetrics);
      }
    } catch (error) {
      ToastAndroid.show("Failed to load metrics.", ToastAndroid.LONG);
    }
  };

  const saveMetrics = async () => {
    if (
      !strength.trim() ||
      isNaN(Number(strength)) ||
      parseFloat(strength) <= 0
    ) {
      ToastAndroid.show(
        "Please enter a valid numeric value greater than zero for Strength.",
        ToastAndroid.LONG
      );
      return;
    }

    if (!speed.trim() || isNaN(Number(speed)) || parseFloat(speed) <= 0) {
      ToastAndroid.show(
        "Please enter a valid numeric value greater than zero for Speed.",
        ToastAndroid.LONG
      );
      return;
    }

    const newMetrics: Metric[] = [
      ...metrics,
      { strength: parseFloat(strength), speed: parseFloat(speed) },
    ];
    setMetrics(newMetrics);
    setStrength("");
    setSpeed("");

    try {
      await AsyncStorage.setItem("metrics", JSON.stringify(newMetrics));
      ToastAndroid.show("Metrics saved successfully!", ToastAndroid.SHORT);
      loadMetrics(); // Reload metrics to update max values
    } catch (error) {
      console.error(error); // Log error for debugging
      ToastAndroid.show(
        "Failed to save metrics. Please try again.",
        ToastAndroid.LONG
      );
    }
  };

  const calculateMaxValues = (metrics: Metric[]) => {
    if (metrics.length > 0) {
      const maxStrengthValue = Math.max(...metrics.map((m) => m.strength));
      const maxSpeedValue = Math.max(...metrics.map((m) => m.speed));
      setMaxStrength(maxStrengthValue);
      setMaxSpeed(maxSpeedValue);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <MetricInput
          strength={strength}
          speed={speed}
          setStrength={setStrength}
          setSpeed={setSpeed}
        />
        <SaveButton saveMetrics={saveMetrics} />
        {metrics.length > 0 && <MetricChart metrics={metrics} width={width} />}
        <MetricSummary maxStrength={maxStrength} maxSpeed={maxSpeed} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#121212", // Dark background for the main container
    justifyContent: "center",
  },
});

export default App;
