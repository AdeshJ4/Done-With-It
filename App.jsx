import { StyleSheet, View } from "react-native";
import Card from "./app/components/Card";

const App = () => {
  return (
    <View style={styles.container}>
      <Card
        title="Red Jacket for sale"
        subtitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 60,
  },
});

export default App;
