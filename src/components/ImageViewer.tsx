import React, { useEffect, useState } from "react";
import { Service } from "@iiif/presentation-3";
import OSD, { osdImageTypes } from "./OSD";
import { getImageServiceURI } from "services/iiif";

interface ImageViewerProps {
  service: Service[] | undefined;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ service }) => {
  const [imageType, setImageType] = useState<osdImageTypes>();
  const [uri, setUri] = useState<string | undefined>();

  useEffect(() => {
    setImageType("tiledImage");
    setUri(getImageServiceURI(service));
  }, [service]);

  return <OSD uri={uri} key={uri} imageType={imageType} />;
};

export default ImageViewer;
