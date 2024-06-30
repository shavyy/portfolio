import { imagesDessin,} from "../assets";
import styles from "../style";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const GalleryDrawing = () => (
  <section className={`sm:mx-32 mx-12 sm:mx-32 mx-12 sm:px-32 px-24 sm:py-32 py-20`}>
    <h3 className={`${styles.flexCenter} ${styles.heading3} mt-20 mb-5`}> Quelques dessins </h3>
    <ImageGallery
        items={imagesDessin}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={2000}
        slideOnThumbnailOver={true}
        showIndex={true}
        onPlay={() => {
          alert("slideshow is now playing!");
        }}
    />
  </section>
);

export default GalleryDrawing;