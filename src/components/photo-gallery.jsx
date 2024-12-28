import React from "react";

import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const PhotoGallery = ({ photos }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="session-full-width">
      <Lightbox
        carousel={{ finite: true }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "900px",
            aspectRatio: isMobile ? "1 / 2" : "3 / 2",
            margin: "0 auto",
          },
        }}
        plugins={[Inline, Thumbnails, Fullscreen, Slideshow, Zoom]}
        slides={photos}
      />
    </div>
  );
};

export default PhotoGallery;
