import { useState } from "react";

export default function SlideShow({ blok }) {
  const [showGallery, setShowGallery] = useState(false);
  return (
    <div className="mt-12">
      <button>View Gallery</button>

      <div className="gallery grid grid-cols-3">
        {blok.gallery &&
          blok.gallery.map((item) => (
            <img key={item.id} src={item.filename} alt="Gallery Image" />
          ))}
      </div>
    </div>
  );
}
