import { FlatList } from "react-native";
import ListItem from "../ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T2",
    description: "D2",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../../assets/mosh.jpg"),
  },
];

const MessageScreen = () => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item, index, separators }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
        />
      )}
    />
  );
};

export default MessageScreen;
