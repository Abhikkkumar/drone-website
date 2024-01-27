import WSPGallery from "./WSPGallery";
import { galleryImages } from "./Template/Data";
import BreadcrumpTemp from "./Template/BreadcrumpTemp";
import "../style/gallery.css";

function Gallery() {
  const breadProp = {
    title: "Gallery",
    text: "Our Photos",
    arr: ["Home", "Gallery"],
  };

  return (
    <div className="Gallery">
      <BreadcrumpTemp bprops={breadProp} />
      
      <div className="gallery-top">
        <h1>Our Photo Gallery</h1>
      </div>

      <WSPGallery galleryImages={galleryImages} />
    </div>
  );
}

export default Gallery;
