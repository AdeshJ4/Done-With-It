import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from '../config/colors';

const WelcomeScreen = () => {
  const styles = StyleSheet.create({
    background: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
    loginButton: {
      width: "100%",
      height: 70,
      backgroundColor: colors.primary,
    },
    registerButton: {
      width: "100%",
      height: 70,
      backgroundColor: colors.secondary,
    },
    logo: {
      width: 100,
      height: 100,
    },
    logoContainer: {
      alignItems: "center",
      position: "absolute",
      top: 70,
    },
  });
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
