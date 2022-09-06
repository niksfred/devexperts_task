import React, { useState } from "react";

const Application = () => {
  const [filter, setFilter] = useState([]);
  return (
    <div>
      <div className="w-4/5">
        <header>
          <div>
            <img src="./devexperts_logo.png" alt="logo" />
          </div>
        </header>
        <main></main>
      </div>
    </div>
  );
};

export default Application;
