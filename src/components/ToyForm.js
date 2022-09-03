import React, { useState } from "react";

// need handle submit and useState, maybe useEffect if PATCH, POST here? 

function ToyForm({ addToy }) {

  const [formData, setFormData] = useState({ 
    name: "", 
    image: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    addToy(formData);

  }
 

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmitForm} >
        <h3>Create a toy!</h3>
        <input onChange={handleFormChange}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input onChange={handleFormChange}
          value={formData.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
