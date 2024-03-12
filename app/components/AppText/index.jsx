import { View, Text, StyleSheet, Platform } from "react-native";
import styles from "./styles";

const AppText = ({ children }) => {
  const styles = StyleSheet.create({
    text: {
      color: "tomato",
      ...Platform.select({
        ios: {
          fontSize: 20,
          fontFamily: "Avenir",
        },
        android: {
          fontSize: 18,
          fontFamily: "Roboto",
        },
      }),
    },
  });

  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;
