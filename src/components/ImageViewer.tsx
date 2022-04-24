import React, { useEffect, useState } from "react";
import OpenSeadragon from "openseadragon";
import { Service } from "@iiif/presentation-3";
import { Navigator, Viewport, Wrapper } from "./ImageViewer.styled";
import Controls from "./Controls";
import { getInfoResponse } from "services/iiif";
import getImageServiceURI from "hooks/getImageServiceURI";
import { v4 as uuidv4 } from "uuid";

interface ImageViewerProps {
  service: Service[] | undefined;
  type: "tiledImage" | "simpleImage";
}

interface OSDProps {
  imageServiceURI: string | undefined;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ service }) => {
  const imageServiceURI = getImageServiceURI(service);
  return <OSD imageServiceURI={imageServiceURI} key={imageServiceURI} />;
};

const OSD: React.FC<OSDProps> = ({ imageServiceURI }) => {
  const [uri, setUri] = useState<string>();
  const instance = uuidv4();

  const config = {
    id: `openseadragon-viewport-${instance}`,
    loadTilesWithAjax: true,
    homeButton: "zoomReset",
    showFullPageControl: false,
    zoomInButton: "zoomIn",
    zoomOutButton: "zoomOut",
    showNavigator: true,
    navigatorBorderColor: "transparent",
    navigatorId: `openseadragon-navigator-${instance}`,
  };

  useEffect(() => {
    if (imageServiceURI !== uri) setUri(imageServiceURI);
  }, []);

  useEffect(() => {
    if (uri)
      getInfoResponse(uri).then((tileSource) =>
        OpenSeadragon(config).addTiledImage({
          tileSource: tileSource,
          replace: false,
        }),
      );
  }, [uri]);

  return (
    <Wrapper>
      <Controls />
      <Navigator id={`openseadragon-navigator-${instance}`} />
      <Viewport id={`openseadragon-viewport-${instance}`} />
    </Wrapper>
  );
};

export default ImageViewer;
