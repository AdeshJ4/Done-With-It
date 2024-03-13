import { StyleSheet, Text, TextInput } from "react-native";
import ScreenList from "./app/components/ScreenList";
import MessageScreen from "./app/screens/MessageScreen";
import { useState } from "react";

const App = () => {
  const [fname, setFname] = useState("Adesh");
  const [age, setAge] = useState(0);
  return (
    <ScreenList>
      <TextInput
        value={fname}
        maxLength={100}
        placeholder="Enter Name"
        style={styles.input}
        onChangeText={(name) => setFname(name)}
      />
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Age"
        onChangeText={(age) => setAge(age)}
      />
      <TextInput
        keyboardType="email-address"
        placeholder="Enter Email"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
      />
      <Text>First Name: {fname}</Text>
      <Text>First Age: {age}</Text>
    </ScreenList>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default App;
