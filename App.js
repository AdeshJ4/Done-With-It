const { View, StyleSheet, Button, Alert } = require("react-native");

const App = () => {
  return (
    <View style={[styles.container, { backgroundColor: "dodgerblue" }]}>
      <Button
        title="Age"
        onPress={() =>
          Alert.prompt("Age", "Enter Age", (age) => console.log(age))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
});

export default App;
