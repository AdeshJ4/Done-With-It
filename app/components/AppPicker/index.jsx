// custom picker

import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../config/styles";
import AppText from "../../components/AppText";
import { useState } from "react";
import AppPickerItem from "../AppPickerItem/AppPickerItem";

const AppPicker = ({
  selectedCategory,
  onSelectCategory,
  icon,
  items,
  placeholder,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={30}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedCategory ? selectedCategory.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={30}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <View style={[{ flex: 1 }, styles.modalView]}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <AppPickerItem
                label={item.label}
                onPress={() => {
                  onSelectCategory(item);
                  setModalVisible(!modalVisible);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  modalView: {
    height: "100%",
    marginTop: "20%",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
  },

  icon: { marginRight: 10 },
  text: {
    flex: 1,
  },
});

export default AppPicker;

// App.jsx - (parent component)

/*
import ScreenContainer from "./app/components/ScreenContainer";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import { useState } from "react";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const App = () => {
  const [category, setCategory] = useState();

  const handleSelectCategory = (category) => {
    setCategory(category);
  };

  return (
    <ScreenContainer>
      <AppPicker
        selectedCategory={category}
        onSelectCategory={handleSelectCategory}
        placeholder="Category"
        icon="apps"
        items={categories}
      />
      <AppTextInput placeholder="Email" icon="email" />
    </ScreenContainer>
  );
};
export default App;



*/
