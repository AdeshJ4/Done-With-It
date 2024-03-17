import { StyleSheet, View, Image } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";

const LoginScreen = () => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <AppTextInput
                icon="email"
                autoCapitalize="none"
                placeholder="Email"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={handleChange("email")}
              />
              <AppTextInput
                icon="lock"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
              />

              <AppButton title="Login" onPress={handleSubmit} />
            </>
          )}
        </Formik>
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
