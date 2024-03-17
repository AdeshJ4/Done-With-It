import { StyleSheet, View, Text, Image } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { useState } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <AppTextInput
          icon="email"
          autoCapitalize="none"
          placeholder="Email"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <AppTextInput
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />

        <AppButton
          title="Login"
          onPress={() =>
            console.log(
              `Login Successfully \nEmail: ${email} \nPassword: ${password}`
            )
          }
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
  },
});

export default LoginScreen;
