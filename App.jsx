import { Button, Text, View } from "react-native";
import ScreenContainer from "./app/components/ScreenContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

const Account = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Account</Text>
    </View>
  );
};

const Feed = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed</Text>
    </View>
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
const Tab = createBottomTabNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.tweetName })}
    />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
