import { Text, StyleSheet } from "react-native";

const AppText = ({ children }) => {
  const styles = StyleSheet.create({
    text: {
      color: "tomato",
      fontSize: 20,
      fontFamily: "Avenir",
    },
  });

  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;
