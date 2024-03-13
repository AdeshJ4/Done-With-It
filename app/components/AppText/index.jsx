import { Text, StyleSheet } from "react-native";

const AppText = ({ children, style }) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontFamily: "Roboto",
    },
  });

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;
