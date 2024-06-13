import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const App = () => {
  const [txt, setTxt] = useState("Click Below");

  return (
    <View style={styles.container}>
      <Text>{txt}</Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => setTxt("Clicked")}
      >
        <Image source={require("./assets/img3.jpeg")} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touchable: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default App;
