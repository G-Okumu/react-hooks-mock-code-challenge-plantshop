import React from "react";

function PlantCard({plant, deletePlant}) {
  // const {name, image, price} = plant;
  function handleDelete(){
    deletePlant(plant.id, plant.name);
  }
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button className="delete" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
