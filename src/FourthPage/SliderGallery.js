import React from 'react';
import './FourthPage.css';

const images = [
  "./VolunteerPH/1.png",
  "./VolunteerPH/2.png",
  "./VolunteerPH/3.jpeg",
  "./VolunteerPH/4.jpeg",
  "./VolunteerPH/5.jpeg",
];

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;