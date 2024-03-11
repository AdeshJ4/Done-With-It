import { Text, StyleSheet } from "react-native";

const AppText = ({ children }) => {
  const styles = StyleSheet.create({
    text: {
      color: "tomato",
      fontSize: 18,
      fontFamily: "Roboto",
    },
  });
  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;
