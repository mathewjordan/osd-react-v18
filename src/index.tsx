import ImageViewer from "components/ImageViewer";
import Service from "dev/Service";
import React, { useEffect, useState } from "react";
import services from "./dev/services";

const App = () => {
  const [service, setService] = useState();
  const [serviceIndex, setServiceIndex] = useState<number>(0);
  const handleChange = (e) => setServiceIndex(e.target.value);

  useEffect(() => {
    setService([services[serviceIndex].service]);
  }, [serviceIndex]);

  return (
    <>
      <Service handleChange={handleChange} />
      <ImageViewer service={service} />
    </>
  );
};

export default App;
