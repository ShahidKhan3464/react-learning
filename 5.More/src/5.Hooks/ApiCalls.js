import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Movies() {
    const [number, setNumber] = useState(1)
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`https://swapi.co/api/films/${number}/`)
            console.log(response)
        }
        getData()
    })

    const handleChoose = (e) => setNumber(e.target.value)
    return (
        <div>
            <h1>Pick A Movie</h1>
            <h4>You choose : {number} </h4>
            <select value={number} onChange={handleChoose}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}