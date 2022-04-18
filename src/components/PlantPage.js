import React, { useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => {
      setPlants(data);
    })
  }, [])


    //Delete single plant
    function deleteSinglePlant(id, name) {
      fetch(`http://localhost:6001/plants/${id}`, {
        method: 'DELETE'
      }).then(response => {
        return response.json()
      }).then(() => {
        const newPlants = plants.filter((plant) => plant.id !== id);
        setPlants(newPlants);
      });
      alert(`${name} deleted successfully`);
    }

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} deletePlant={deleteSinglePlant} />
    </main>
  );
}

export default PlantPage;
