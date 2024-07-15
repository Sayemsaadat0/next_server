"use client";

import { useState } from "react";

const AddProductComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name) {
      alert("Name Is Required");
      return;
    }
    try {
      console.log("Success");
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          className="border border-black p-2 rounded-2xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Product Email"
          className="border border-black p-2 rounded-2xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Add New Product</button>
      </form>
    </div>
  );
};

export default AddProductComponent;
