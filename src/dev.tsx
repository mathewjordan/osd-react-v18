import React, { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./index";
import Service from "./dev/Service";
import services from "./dev/services";

const Wrapper = () => {
  const [service, setService] = useState();
  const [serviceIndex, setServiceIndex] = useState<number>(0);
  const handleChange = (e) => setServiceIndex(e.target.value);

  useEffect(() => {
    setService([services[serviceIndex].service]);
  }, [serviceIndex]);

  return (
    <>
      <Service handleChange={handleChange} />
      <App service={service} />
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
