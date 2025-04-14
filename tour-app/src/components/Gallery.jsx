import React, {useEffect, useState} from "react";
import TourCard from "./TourCard";
//Gallery is responsible for fetching tour cards and rendering overall gallery

const Gallery = ({tours, settours, onRemove}) => {
    //local state to manage loading and errors
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(false);

    //function to fetch data from API
    const fetchTours = async () => {
        try {
            const res = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
            //map the API data to the only field we need
            const data = await res.json();
            const trimmed = data.map((tours) => ({
                id: tour.id,
                name: tour.name,
                info: tour.info[0]?.name || "Unknown",
            }));
            setTours(trimmed); //set data to global state
            setLoading(false); //set loading to false
        } catch (error) {
            setError(true); //if fetch fails, show error
            setLoading(false);
        }
};

//run fetchtours once after component mounts
useEffect(() => {
    fetchTours();
}, []);
//render loading state
if (loading) {
    return <h2>Loading...</h2>;
};
//render error state
if (error) {
    return <h2> Something went wrong...</h2>;
};
//render if no tours remain
if(tours.length === 0) {
    return <h2>No tours left</h2>;
    <button onClick={fetchTours}>Refresh</button>
};
//render the Gallery
return (
    <section className="tour-list">
        {tours.map((tour) => {
            return (
                <TourCard
                key={tour.id}
                {...tour} //spread operator to all tour properties
                onRemove={onRemove} //pass the remove function
                />
            );
        })}
        </section>
);
};
export default Gallery;