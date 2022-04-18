import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => {
        setPlants(data);
      })
  }, [])


  //For search
  const searchedPlant = plants.filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase()));

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
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={searchedPlant} deletePlant={deleteSinglePlant} />
    </main>
  );
}

export default PlantPage;
