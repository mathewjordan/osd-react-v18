import React from "react";
import ImageViewer from "components/ImageViewer";

const App = ({ body }) => {
  if (!body) return <></>;

  return <ImageViewer body={body} />;
};

export default App;
