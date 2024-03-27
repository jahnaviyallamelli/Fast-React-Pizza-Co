import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast react pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      
      {pizzas && (
        <>
        <p>Authentic italian Cuisine 6 creative dishes to choose from.
        All from our stone oven, all organic , all delicious.
      </p>
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaobj={pizza} />
          ))}
        </ul>
        </>
      )}

      {/* {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      /> */}
      {/* <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, Mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({pizzaobj}) {
  return (
    <li className={`pizza ${pizzaobj.soldOut ? 'sold-out' : " " }`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span> {pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const isopen = hour >= openhour && hour <= closehour;
  // if() alert("We are currently open!")
  // else alert("sorry we are close");
  return (
    <footer className="footer">
      {isopen ? <Order closehour={closehour} /> : <p>Closed</p>}
    </footer>
  );
}
function Order(props) {
  return (
    <div className="order">
      <p>
        We are open until {props.closehour}.00 Come visit us or order online.
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
