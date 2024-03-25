import { Button, Text } from "react-native";
import ScreenContainer from "./app/components/ScreenContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// only Screen Component have access to "navigation" property.
const Tweets = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Tweet</Text>
      <Link />
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails")}
      />
    </ScreenContainer>
  );
};

const TweetDetails = () => {
  return (
    <ScreenContainer>
      <Text>Tweet Details</Text>
    </ScreenContainer>
  );
};

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Link Click"
      onPress={() => navigation.navigate("TweetDetails")}
    />
  );
};

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
