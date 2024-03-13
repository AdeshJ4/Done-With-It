import Constants from "expo-constants";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

const ScreenList = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default ScreenList;
