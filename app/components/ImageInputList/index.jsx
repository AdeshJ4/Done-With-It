import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "../ImageInput";
import { useRef } from "react";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollViewRef = useRef();

  const handleRemove = (uri) => {
    onRemoveImage(uri);
  };

  const handleAdd = (uri) => {
    onAddImage(uri);
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal={true}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {imageUris.map((uri) => (
          <ImageInput imageUri={uri} onChangeImage={handleRemove} key={uri} />
        ))}
        <ImageInput onChangeImage={handleAdd} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 6,
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
