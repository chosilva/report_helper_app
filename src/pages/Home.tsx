// src/pages/Home.tsx
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <button>
        <a href="/about">Click aqui</a>
      </button>
    </div>
  );
};

export default Home;
