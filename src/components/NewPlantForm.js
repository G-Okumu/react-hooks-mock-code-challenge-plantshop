import React, { useState } from "react";

function NewPlantForm() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

  const [errors, setErrors] = useState([]);

  function handleChange(e) {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    // e.preventDefault();
    if (formData.name && formData.image && formData.price !== "") {
      fetch('http://localhost:6001/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          image: formData.image,
          price: parseFloat(formData.price),
        }),
      })
        .then(response => response.json())
        .then(formData => {
          alert('Success:');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      setErrors(["Field required!"]);
      e.preventDefault();
    }

  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} placeholder="Plant name" onChange={handleChange} />
        <input type="text" name="image" value={formData.image} placeholder="Image URL" onChange={handleChange} />
        <input type="number" name="price" value={formData.price} step="0.01" placeholder="Price" onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
      {/* conditionally render error messages */}
      {errors.length > 0
        ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
        : null}
    </div>
  );
}

export default NewPlantForm;
