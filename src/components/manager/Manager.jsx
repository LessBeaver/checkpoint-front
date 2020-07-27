import React, { useState, useEffect } from 'react';
import AddTrip from './AddTrip';
import AddPhoto from './AddPhoto';
import Swal from 'sweetalert2';
import ShowPhoto from './ShowPhoto';
import axios from 'axios';
import './manager.css';
import './managerqueries.css';

export default function Manager() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [tripName, setTripName] = useState('');
  const [getTrip, setGetTrip] = useState('');

  const handleClickImage = e => {
    e.preventDefault();
    const formData = {
      name,
      picture_url: image
    };
    axios
      .get(`http://localhost:4000/trip/${tripName}`)
      .then(res => res.data.id_trip)
      .then(res => {
        axios
          .post(`http://localhost:4000/photo/${res}`, formData)
          .then(res => {
            setGetTrip(res.data.id_trip);
            Swal.fire({
              icon: 'success',
              showCancelButton: false,
              showConfirmButton: false,
              text: 'Voyage bien ajouté!',
              timer: 1000,
              backdrop: 'rgba(0,0,0,0.5)'
            });
          })
          .catch(e => {
            Swal.fire({
              icon: 'error',
              showCancelButton: false,
              showConfirmButton: false,
              text: `Erreur lors de la récupération des images ${e.message}`,
              timer: 1000,
              backdrop: 'rgba(0,0,0,0.5)'
            });
          });
      })
      .catch(e => {
        console.log(e);
        alert(`Erreur catch ${e.message}`);
      });
  };

  return (
    <div className="manager-container">
      <div className="add-container">
        <AddTrip />
        <AddPhoto
          setTripName={setTripName}
          setName={setName}
          setImage={setImage}
          name={name}
          image={image}
          tripName={tripName}
          handleClickImage={handleClickImage}
        />
      </div>
      <ShowPhoto />
    </div>
  );
}
