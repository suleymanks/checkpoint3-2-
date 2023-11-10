import { useState, useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"

export default function CarList({ cars }) {
    const navigate = useNavigate();

    const list = JSON.parse(localStorage.getItem("cars")) || [];
    console.log(list)

    return (
        <div>
            <h2>Stored Cars:</h2>
            <ul>
                {list.map((car, index) => (
                <li key={index}>
                {car.name} - {car.age} years old
                </li>
                ))}
            </ul>
            <button onClick={()=>navigate('/')}>Back to Homepage</button>
        </div>
      );
}