import React from 'react';
import PlaceCardItem from '../components/PlaceCardItem';

function PlacesToVisit({ trip }) {
  const API = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;

  return (
    <div>
      <h2 className='font-bold text-lg mt-5'>Places to Visit</h2>
      <div>
        {trip?.tripData?.itinerary &&
          Object.keys(trip.tripData.itinerary)
            .sort((a, b) => {
              const numA = parseInt(a.match(/\d+/)); // Extract the number
              const numB = parseInt(b.match(/\d+/));
              return numA - numB; // Sort numerically
            })
            .map((dayKey, index) => {
              const day = trip.tripData.itinerary[dayKey];
              return (
                <PlaceCardItem
                  key={index}
                  dayKey={dayKey}
                  day={day}
                  apiKey={API}
                />
              );
            })}
      </div>
    </div>
  );
}


export default PlacesToVisit;
