import { Text } from "react-native";
import ScreenContainer from "./app/components/ScreenContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Tweets = () => {
  return (
    <ScreenContainer>
      <Text>Tweet</Text>
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

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
    <Stack.Screen name="Tweets" component={Tweets} />
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
