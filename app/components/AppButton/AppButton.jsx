import { Button, Text, TouchableOpacity, View } from "react-native";
import Styles from "./styles";

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={Styles.button} onPress={onPress}>
      <Text style={Styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
