import { View, Text, StyleSheet, Button } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Click Me"
        color="orange"
        onPress={() => console.log("Button Pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
