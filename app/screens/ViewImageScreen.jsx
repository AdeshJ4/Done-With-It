import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = () => {
  const styles = StyleSheet.create({
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    container: {
      flex: 1,
      backgroundColor: colors.black,
    },
    closeIcon: {
      position: "absolute",
      top: 40,
      left: 30,
    },
    deleteIcon: {
      position: "absolute",
      top: 40,
      right: 30,
    },
    btnContainer: {
      flexDirection: "row",
      marginTop: 15,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color={colors.white} size={35} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color={colors.white}
            size={35}
          />
        </View>
      </View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  );
};

export default ViewImageScreen;
