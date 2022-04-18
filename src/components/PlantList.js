import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, deletePlant}) {

  return (
    <ul className="cards">{/* render PlantCards components in here */}

      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} deletePlant={deletePlant} />
      ))
      }
      {/* {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))} */}
    </ul>
  );
}

export default PlantList;
