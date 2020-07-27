import React, { useEffect, useState } from 'react';
import '../manager/manager.css';
// import axios from 'axios';

const ShowTrip = getPhotos => {
  return (
    <div className="showphoto-container">
      <div className="photo-container">
        {getPhotos.map(({ id_photo, name, picture_url: pictureUrl }) => (
          <figure className="photo-card">
            <figcaption>{name}</figcaption>
            <img src={pictureUrl} alt={name} className="photo-size" key={id_photo} />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ShowTrip;
