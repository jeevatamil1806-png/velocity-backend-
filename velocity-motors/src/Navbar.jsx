function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        VELOCITY <span>MOTORS</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#collection">Collection</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#collection" className="nav-btn">
        Explore Cars
      </a>
    </nav>
  );
}

export default Navbar;