
import React from 'react';

const apiKey = "2gBEUdkcxS1wlPD81pgYt7h9Rvk47OUm70Edg9gr";

export default async function AstronomyPage () {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const data = await res.json();

    return (
        <div>
            <h1>Astronomy Picture of the Day</h1>
            <img src={data.url} alt={data.title} />
            <p>{data.title}</p>
            <p>{data.explanation}</p>
        </div>
    );
}

