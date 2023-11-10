import { useState, useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"

export default function CarSearch() {
    const [carIndex, setCarIndex] = useState("");
    const [foundCar, setFoundCar] = useState(null);

    const navigate = useNavigate()

    function handleClick() {
        const cars = JSON.parse(localStorage.getItem("cars")) || [];
        const index = parseInt(carIndex);

        if (!isNaN(index) && index >= 0 && index < cars.length) {
            setFoundCar(cars[index]);
          } else {
            setFoundCar(null);
          }
    }

    return (
        <div>
            <input         
                type="number"
                value={carIndex}
                onChange={(e) => setCarIndex(e.target.value)}
                placeholder="Enter car index" />
            <button onClick={handleClick}>Search cars!</button>

            {foundCar && (
            <div>
            <h2>Found Car:</h2>
            <p>
            {foundCar.name} - {foundCar.age} years old
            </p>
        </div>
      )}

            <button onClick={()=> navigate('/')}>Back to Homepage</button>
        </div>
    )
}