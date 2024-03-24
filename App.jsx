import React, { useState } from "react";
import ScreenContainer from "./app/components/ScreenContainer";
import ImageInputList from "./app/components/ImageInputList";

const App = () => {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  }

  return (
    <ScreenContainer>
      <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove}/>
    </ScreenContainer>
  );
};

export default App;
