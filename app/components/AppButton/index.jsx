import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import colors from "../../config/colors";

const AppButton = ({ title, onPress, color = "primary" }) => {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      width: "100%",
      marginVertical: 10,
    },
    text: {
      color: colors.white,
      fontSize: 18,
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  });

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
