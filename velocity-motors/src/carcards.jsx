function CarCard({ car, onDetails, favorite, onFavorite }) {
  return (
    <div className="car-card">
      <div className="car-image">
        <img src={car.image} alt={car.name} />

        <button
          className="favorite"
          onClick={() => onFavorite(car.id)}
        >
          {favorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="car-info">
        <p className="category">{car.category}</p>
        <h3>{car.name}</h3>

        <div className="car-specs">
          <span>{car.year}</span>
          <span>{car.fuel}</span>
          <span>{car.transmission}</span>
        </div>

        <h2>
          ₹{car.price.toLocaleString("en-IN")}
        </h2>

        <button
          className="details-btn"
          onClick={() => onDetails(car)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default CarCard;