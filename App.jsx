import { StyleSheet, View } from "react-native";
import AppButton from "./app/components/AppButton";

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.container}>
      <AppButton title="Login" onPress={() => console.log("Button Pressed.")} />
    </View>
  );
};

export default App;
