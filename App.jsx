import { Button, Text } from "react-native";
import ScreenContainer from "./app/components/ScreenContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// only Screen Component have access to "navigation" property.
const Tweets = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Tweet</Text>
      <Button
        title="View Tweet"
        onPress={() =>
          navigation.navigate("TweetDetails", { id: 101, tweetName: "Anime" })
        }
      />
    </ScreenContainer>
  );
};

const TweetDetails = ({ route }) => {
  console.log("route: ", route); // route:  {"key": "TweetDetails-hLNy3btIvCKgALIo7e4Q-", "name": "TweetDetails", "params": {"id": 101, "tweetName": "Anime"}, "path": undefined}
  return (
    <ScreenContainer>
      <Text>Tweet Details: {route.params.tweetName}</Text>
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
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{ title: "List Of Tweets" }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.tweetName })}
    />
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
