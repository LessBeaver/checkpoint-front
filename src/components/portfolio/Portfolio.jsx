import React from 'react';

export default function Portfolio() {
  const [trips, setTrip] = useState([]);

  useEffect(() => {
    const url = `http://localhost:4000/trip`;
    axios
      .get(url)
      .then(res => res.data)
      .then(res => setTrip(res))
      .catch(e => {
        alert(`Erreur lors de la récupération de l'image ${e.message}`);
      });
  }, []);

  return (
    <div>
      <div>
        {trips.map(({ id_trip, name, pictureUrl: picture_url }) => (
          <div>
            <h4>{name}</h4>
            <img src={pictureUrl} alt="name" key={id_trip} />
          </div>
        ))}
      </div>
    </div>
  );
}
