const { View, StyleSheet, Button, Alert } = require("react-native");

const App = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Submit"
        onPress={() => {
          Alert.alert("Exit", "Do you really want to exit?", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ]);
        }}
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
