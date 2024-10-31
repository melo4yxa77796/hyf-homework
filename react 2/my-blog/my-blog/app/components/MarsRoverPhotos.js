"use client";
import React, { useEffect, useState } from 'react';

const MarsRoverPhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiKey = "2gBEUdkcxS1wlPD81pgYt7h9Rvk47OUm70Edg9gr"; 
    const roverName = "Curiosity"; 
    const sol = 1000; 

    useEffect(() => {
        const fetchMarsRoverPhotos = async () => {
            try {
                const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch Mars Rover photos");
                }
                const data = await response.json();
                setPhotos(data.photos.slice(0, 4)); 
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMarsRoverPhotos();

        return () => {
            setPhotos([]);
        };
    }, [roverName, sol, apiKey]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Mars Rover Photos</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {photos.map((photo) => (
                    <div key={photo.id} style={{ margin: '10px' }}>
                        <img src={photo.img_src} alt={`Mars Rover Photo ${photo.id}`} style={{ width: '300px', height: 'auto' }} />
                        <p>{`Taken by ${photo.rover.name} on Sol ${photo.sol}`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarsRoverPhotos;
