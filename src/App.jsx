import "./App.css";
import Selector from "./components/Selector";
import { useState } from "react";

function App() {
  const [cream, setCream] = useState("strawberry");

  const flavors = [
    {
      id: 1,
      type: "strawberry",
      url: "/images/icecream-strawberry.png",
    },
    {
      id: 2,
      type: "blueberry",
      url: "/images/icecream-blueberry.png",
    },
    {
      id: 3,
      type: "chocolate",
      url: "/images/icecream-chocolate.png",
    },
    {
      id: 4,
      type: "evergreen",
      url: "/images/icecream-evergreen.png",
    },
  ];

  const handleSelect = (flavor) => {
    setCream(flavor.type);
  };

  return (
    <div className="main__container" id={cream}>
      <nav className="navbar">
        <h1 className="navbar__logo">Chillz</h1>

        <ul className="navbar__links">
          <li>Home</li>
          <li>Shop</li>
          <li>Delivery</li>
          <li>Contact</li>
        </ul>

        <button className="navbar__button">Order Your Ice-cream</button>
      </nav>

      <main>
        <div className="main__content">
          <h1 className="main__heading">ice cream</h1>
          <span className="main__flavor">{cream} cone</span>
          <div className="main__text">
            <p>
              Embark on a culinary journey of Delight as You Immerse Yourself in
              Our Artisan-Crafted Ice Cream Collection—Each Flavor a Story, Each
              Scoop an Unforgettable Chapter in Your Sweet Odyssey!
            </p>
            <p>
              Indulge in a World of Imagination, Where Every Scoop Unveils a New
              Taste Adventure! Choose your favorite
            </p>
          </div>

          <div className="selector__container">
            {flavors.map((flavor) => (
              <Selector
                key={flavor.id}
                flavor={flavor.type}
                url={flavor.url}
                onClick={() => handleSelect(flavor)}
              />
            ))}
          </div>

          <div className={`main__ice-cream ${cream}`}></div>
        </div>
      </main>
    </div>
  );
}

export default App;
