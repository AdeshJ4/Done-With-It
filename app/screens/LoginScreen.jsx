import { StyleSheet, View, Image } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/AppSubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {() => (
            <View style={{ marginTop: 40 }}>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                name="email"
                placeholder="Email"
              />

              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                placeholder="Password"
                secureTextEntry={true}
              />
              <SubmitButton title="Login" />
            </View>
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
