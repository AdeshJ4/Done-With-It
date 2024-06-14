import { Text, StyleSheet, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello React</Text>
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
