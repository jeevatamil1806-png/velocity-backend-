import React, { useState } from "react";
import "./App.css";
const categories = [
  {
    name: "SUV",
    image: "photo-1519641471654-76ce0107ad1b"
  },
  {
    name: "Sedan",
    image: "photo-1492144534655-ae79c964c9d7",
  },
  {
    name: "Sports Cars",
    image: "photo-1503376780353-7e6692767b70",
  },
  {
    name: "Luxury Cars",
    image: "photo-1563720223185-11003d516935",
  },
  {
    name: "Electric Cars",
    image: "photo-1593941707882-a5bba14938c7",
  },
  {
    name: "Hatchback",
    image: "photo-1549317661-bd32c8ce0db2",
  },
];

const cars = [
  {
    name: " Mercedes-Benz",
    model: "GLE",
    category: "SUV",
    price: "₹95,00,000",
    image: "photo-1519641471654-76ce0107ad1b",
    fuel: "Diesel",
    transmission: "Automatic",
    year: "2025",
  },
  
  {
    name: "BMW 3 Series",
    category: "Sedan",
    price: "₹72,00,000",
    image: "photo-1492144534655-ae79c964c9d7",
    fuel: "Petrol",
    transmission: "Automatic",
    year: "2025",
  },
  {
    name: "Porsche 911",
    category: "Sports Cars",
    price: "₹2,00,00,000",
    image: "photo-1503376780353-7e6692767b70",
    fuel: "Petrol",
    transmission: "Automatic",
    year: "2025",
  },
  {
    name: "Mercedes-Benz S-Class",
    category: "Luxury Cars",
    price: "₹1,80,00,000",
    image: "photo-1563720223185-11003d516935",
    fuel: "Petrol",
    transmission: "Automatic",
    year: "2025",
  },
  {
    name: "Tesla Model 3",
    category: "Electric Cars",
    price: "₹60,00,000",
    image: "photo-1593941707882-a5bba14938c7",
    fuel: "Electric",
    transmission: "Automatic",
    year: "2025",
  },
  {
    name: "Volkswagen Golf",
    category: "Hatchback",
    price: "₹25,00,000",
    image: "photo-1549317661-bd32c8ce0db2",
    fuel: "Petrol",
    transmission: "Manual",
    year: "2025",
  },
  {
  name: "Hyundai i20",
  category: "Hatchback",
  price: "₹8,00,000",
  image: "photo-1552519507-da3b142c6e3d",
  fuel: "Petrol",
  transmission: "Automatic",
  year: "2025"
  }
];

function App() {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerCar, setCustomerCar] = useState("");
  const [customerMessage, setCustomerMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [page, setPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);

  const changePage = (newPage) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  const selectedCars = cars.filter(
    (car) => car.category === selectedCategory
  );

  return (
    <div className="velocity-app">

      {/* NAVBAR */}
      <nav className="velocity-navbar">
        <h2 onClick={() => changePage("home")}>
          VELOCITY <span>MOTORS</span>
        </h2>

        <div className="velocity-navlinks">
          <button onClick={() => changePage("home")}>Home</button>
          <button onClick={() => changePage("categories")}>
            Categories
          </button>
          <button onClick={() => changePage("contact")}>
            Contact
          </button>
        </div>
      </nav>

      {/* PAGE 1: HOME */}
      {page === "home" && (
        <section className="home-page">
          <div className="home-content">
            <h1>
              Drive Your
              <br />
              <span>Dream Car</span>
            </h1>

            <p>
              Explore our premium collection of cars
              with the best performance and style.
            </p>

            <button
              onClick={() => changePage("categories")}
            >
              Explore Categories →
            </button>
          </div>
        </section>
      )}

      {/* PAGE 2: CATEGORIES */}
      {page === "categories" && (
        <section className="page-container">
          <h1>Explore Car Categories</h1>
          <p>Select your favourite car category</p>

          <div className="new-categories-grid">
            {categories.map((category) => (
              <div
                className="new-category-card"
                key={category.name}
                onClick={() => {
                  setSelectedCategory(category.name);
                  changePage("cars");
                }}
              >
                <img
                  src={`https://images.unsplash.com/${category.image}?auto=format&fit=crop&w=700&q=80`}
                  alt={category.name}
                />
                <h2>{category.name}</h2>
                <button>Select Category →</button>
              </div>
            ))}
          </div>

          <button
            className="back-button"
            onClick={() => changePage("home")}
          >
            ← Back to Home
          </button>
        </section>
      )}

      {/* PAGE 3: CARS */}
      {page === "cars" && (
        <section className="page-container">
          <h1>{selectedCategory}</h1>
          <p>Available cars in this category</p>

          <div className="new-categories-grid">
            {selectedCars.map((car) => (
              <div className="new-category-card" key={car.name}>
                <img
                  src={`https://images.unsplash.com/${car.image}?auto=format&fit=crop&w=700&q=80`}
                  alt={car.name}
                />

                <h2>{car.name}</h2>
                <h3>{car.price}</h3>

                <button
                  onClick={() => {
                    setSelectedCar(car);
                    changePage("details");
                  }}
                >
                  View Details →
                </button>
              </div>
            ))}
          </div>

          <button
            className="back-button"
            onClick={() => changePage("categories")}
          >
            ← Back to Categories
          </button>
        </section>
      )}

      {/* PAGE 4: CAR DETAILS */}
      {page === "details" && selectedCar && (
        <section className="page-container">
          <h1>Car Details</h1>

          <div className="details-card">
            <img
              src={`https://images.unsplash.com/${selectedCar.image}?auto=format&fit=crop&w=1000&q=80`}
              alt={selectedCar.name}
            />

            <div className="details-content">
              <h2>{selectedCar.name}</h2>
              <h3>{selectedCar.price}</h3>

              <p>Category: {selectedCar.category}</p>
              <p>Fuel Type: {selectedCar.fuel}</p>
              <p>Transmission: {selectedCar.transmission}</p>
              <p>Model Year: {selectedCar.year}</p>

              <button onClick={() => changePage("contact")}>
                Contact Us →
              </button>
            </div>
          </div>

          <button
            className="back-button"
            onClick={() => changePage("cars")}
          >
            ← Back to Cars
          </button>
        </section>
      )}

      {/* PAGE 5: CONTACT */}
      {/* PAGE 5: CONTACT */}
      {page === "contact" && (
        <section className="page-container contact-page">
          <h1>Contact Velocity Motors</h1>
          <p>Send us your car enquiry.</p>

          <form
            className="enquiry-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <h2>Car Enquiry Form</h2>

            <label>Customer Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              required
            />

            <label>Select Car</label>
            <select
              value={customerCar}
              onChange={(e) => setCustomerCar(e.target.value)}
              required
            >
              <option value="">Choose a car</option>
              {cars.map((car) => (
                <option key={car.name} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>

            <label>Your Message</label>
            <textarea
              placeholder="Write your enquiry here..."
              value={customerMessage}
              onChange={(e) => setCustomerMessage(e.target.value)}
              required
            />

            <button type="submit">Submit Enquiry →</button>

            {submitted && (
              <div className="success-message">
                Thank you, {customerName}!
                Your enquiry form has been submitted successfully.
              </div>
            )}
          </form>

          <div className="contact-card">
            <h2>Our Contact Details</h2>
            <p>Email: info@velocitymotors.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Coimbatore, Tamil Nadu</p>
          </div>

          <button onClick={() => changePage("home")}>
            ← Back to Home
          </button>
        </section>

      )} 
      <footer className="velocity-footer"> 
        <h3>VELOCITY MOTORS</h3> 
        <p>Drive the Future...</p>
        <small>© 2026 Velocity Motors. All
Rights Reserved.</small>
      </footer>

    </div>

  );

}

export default App;     