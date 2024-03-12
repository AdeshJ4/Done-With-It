import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  const styles = StyleSheet.create({
    background: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
    logo: {
      width: 100,
      height: 100,
    },
    logoContainer: {
      alignItems: "center",
      position: "absolute",
      top: 70,
    },
    buttonContainer: {
      padding: 20,
      width: "100%",
    },
    tagline: {
      fontSize: 20,
      fontWeight: "600",
      paddingVertical: 20,
    },
  });
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      blurRadius={5}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What you don't need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          onPress={() => console.login("Login Button Pressed")}
        />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => console.login("register Button Pressed")}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
