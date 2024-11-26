import React from "react";

import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const inline = {
  style: {
    width: "100%",
    maxWidth: "900px",
    aspectRatio: "3 / 2",
    margin: "0 auto",
  },
};

const PhotoGallery = ({ photos }) => {
  return (
    <div className="session-full-width">
      <Lightbox
        carousel={{ finite: true }}
        inline={inline}
        plugins={[Inline, Thumbnails, Fullscreen, Slideshow, Zoom]}
        slides={photos}
      />
    </div>
  );
};

export default PhotoGallery;
