import { Text, StyleSheet, View, Platform, StatusBar } from "react-native";

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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default App;
