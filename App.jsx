import { Button, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenContainer from "./app/components/ScreenContainer";
import * as ImagePicker from "expo-image-picker";

const App = () => {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const res = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!res.granted) {
      alert("You need to enable permission to access the library");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const res = await ImagePicker.launchImageLibraryAsync();
      console.log("assets: ", res.assets[0].uri);
      if (!res.canceled) setImageUri(res.assets[0].uri);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ScreenContainer>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </ScreenContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
