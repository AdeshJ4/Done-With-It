import { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";
import ScreenContainer from "./app/components/ScreenContainer";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

const App = () => {
  return (
    <ScreenContainer>
      <AppPicker placeholder="Category" icon="apps" />
      <AppTextInput placeholder="Email" icon="email" />
    </ScreenContainer>
  );
};
export default App;
