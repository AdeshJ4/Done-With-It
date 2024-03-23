import React, { useState } from "react";
import ScreenContainer from "./app/components/ScreenContainer";
import ImageInput from "./app/components/ImageInput";

const App = () => {
  const [imageUri, setImageUri] = useState();

  const handleImageUri = (uri) => {
    setImageUri(uri);
  };

  return (
    <ScreenContainer>
      <ImageInput imageUri={imageUri} onChangeImage={handleImageUri} />
    </ScreenContainer>
  );
};

export default App;
