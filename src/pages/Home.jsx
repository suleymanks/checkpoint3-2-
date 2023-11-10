import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [carName, setCarName] = useState("");
  const [carAge, setCarAge] = useState("");
  const [storedCars, setStoredCars] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newCar = {
      name: carName,
      age: carAge,
    };

    const updatedCars = [...storedCars, newCar];
    setStoredCars(updatedCars);

    localStorage.setItem("cars", JSON.stringify(updatedCars));
    setCarName("");
    setCarAge("");
  }

  return (
    <form>
      <label>Car Name: </label>
      <input
        type="text"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
        required
        placeholder="enter your car name please"
      />
      <label>Car Age: </label>
      <input
        type="number"
        value={carAge}
        onChange={(e) => setCarAge(e.target.value)}
        required
        placeholder="enter car age please"
      />
      <br />
      <button type="button" onClick={handleSubmit}>
        Add Cars
      </button>
      <button onClick={() => navigate("/CarList/")}>List Cars</button>
      <button onClick={() => navigate("/CarSearch/")}>Search Cars</button>
    </form>
  );
}
