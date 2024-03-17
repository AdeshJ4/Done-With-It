import ScreenContainer from "./app/components/ScreenContainer";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const App = () => {
  return (
    <ScreenContainer>
      <AppPicker placeholder="Category" icon="apps" items={categories} />
      <AppTextInput placeholder="Email" icon="email" />
    </ScreenContainer>
  );
};
export default App;
