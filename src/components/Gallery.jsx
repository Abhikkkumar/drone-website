import WSPGallery from './WSPGallery';
import {galleryImages} from './Template/Data'


function Gallery() {

 

  return (
    <div className="Gallery">
      <br />
      <div>
        <h1>Our Photo Gallery</h1>
      </div>
      <br /><br />

      <WSPGallery
        galleryImages={galleryImages}
      />

      <br /><br />
      
    </div>
  );
}

export default Gallery;