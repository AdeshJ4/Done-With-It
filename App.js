import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

const App = () => {
  const [txt, setTxt] = useState("Click Bellow");
  return (
    <View style={styles.container}>
      <Text>{txt}</Text>
      <TouchableWithoutFeedback onPress={() => setTxt("Clicked")}>
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={styles.image}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    maxHeight: 100,
    maxWidth: 100,
  },
});
export default App;
