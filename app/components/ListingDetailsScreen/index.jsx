import { Image, View, StyleSheet } from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/jacket.jpg")} />

      <View style={styles.detailedContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailedContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 7,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;
