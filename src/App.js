import React, { useState } from "react";
import "./App.css"; // Import the CSS file

const App = () => {
  const [shops] = useState([
    {
      id: 1,
      name: "Quick Print Studio",
      theme: "blue",
      description: "Fast & Professional Printing Solutions",
    },
    {
      id: 2,
      name: "Digital Print Hub",
      theme: "green",
      description: "Advanced Digital Printing Services",
    },
    {
      id: 3,
      name: "Premium Print Shop",
      theme: "purple",
      description: "High-Quality Premium Prints",
    },
  ]);

  const handlePrintClick = (shopId) => {
    window.location.href = `https://print-frontend-ten.vercel.app/form/${shopId}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <header>
        <h1>VIIT Printing Services</h1>
        <p className="mt-2 text-lg text-gray-100">
          Your one-stop solution for all printing needs
        </p>
      </header>

      {/* Main Content */}
      <main>
        {/* Shop Cards Container */}
        <div className="shop-container">
          {shops.map((shop) => (
            <div key={shop.id} className="shop-card">
              <h2>{shop.name}</h2>
              <p>{shop.description}</p>
              <button onClick={() => handlePrintClick(shop.id)}>
                Print Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
