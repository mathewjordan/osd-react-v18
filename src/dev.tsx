import React, { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./index";
import Body from "./dev/Body";
import bodies from "./dev/bodies";
import { IIIFExternalWebResource } from "@iiif/presentation-3";

const Wrapper = () => {
  const [body, setBody] = useState();
  const [bodyIndex, setBodyIndex] = useState<number>(0);
  const handleChange = (e) => setBodyIndex(e.target.value);

  useEffect(() => {
    setBody(bodies[bodyIndex].body);
  }, [bodyIndex]);

  return (
    <>
      <Body handleChange={handleChange} />
      <App body={body as IIIFExternalWebResource} />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Wrapper />
  </StrictMode>,
);
