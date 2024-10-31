"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const apiKey = "2gBEUdkcxS1wlPD81pgYt7h9Rvk47OUm70Edg9gr";

export default function SearchEpicImage() {
    const searchParams = useSearchParams();
    const searchDate = searchParams.get("search");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        console.log("searchDate", searchDate);
        if (!searchDate) {
            console.error("No search date provided.");
            return;
        }

        const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(searchDate);
        if (!isValidDate) {
            setError(" Invalid date format. Please use YYYY-MM-DD format.");
            return;
        }

        setLoading(true);
        setError(null);

        const url = `https://api.nasa.gov/EPIC/api/natural/date/${searchDate}?api_key=${apiKey}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch EPIC image");
                }
                return response.json();
            })
            .then((data) => {
                if (data.length === 0) {
                    throw new Error("No images found for the specified date");
                }

                const firstImage = data[0];
                const formattedDate = searchDate.replace(/-/g, "/");
                const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${firstImage.image}.png`;
                setImage(imageUrl);
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [searchDate]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {image ? (
                <img style={{ height: "600px" , width: "600px"}} src={image} alt={`NASA EPIC Image for ${searchDate}`} />
            ) : (
                <p>Please provided a date in the URL query (e.g., ?search=2022-07-19).</p>
            )}
        </div>
    );
}
