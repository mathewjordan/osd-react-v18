import { ImageService, Service } from "@iiif/presentation-3";
import { useEffect, useState } from "react";

const getImageServiceURI = (service: Service[] | undefined) => {
  const [imageService, setImageService] = useState<ImageService>();
  const [imageServiceURI, setImageServiceURI] = useState<string>();

  useEffect(() => {
    if (Array.isArray(service))
      setImageService(service[0] as any as ImageService);
  }, [service]);

  useEffect(() => {
    if (imageService) {
      let id: string | undefined;
      "@id" in imageService
        ? (id = imageService["@id"])
        : (id = imageService.id);

      setImageServiceURI(id);
    }
  }, [imageService]);

  return imageServiceURI;
};

export default getImageServiceURI;
