import React from "react";
import ImageViewer from "components/ImageViewer";

const App = ({ service }) => {
  if (!service) return <></>;

  return <ImageViewer service={service} type="tiledImage" />;
};

export default App;
