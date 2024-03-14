import AppTextInput from "./app/components/AppTextInput";
import ScreenList from "./app/components/ScreenList";

const App = () => {
  return (
    <ScreenList>
      <AppTextInput placeholder="Username" icon="email" />
    </ScreenList>
  );
};

export default App;
