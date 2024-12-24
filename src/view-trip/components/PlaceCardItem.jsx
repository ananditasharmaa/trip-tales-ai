import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalAPI';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PlaceCardItem({ day, dayKey }) {
  const [photos, setPhotos] = useState({}); // Store photos for each place

  useEffect(() => {
    day?.plan?.forEach((place) => {
      GetPlacePhoto(place.placeName);
    });
  }, [day]);

  const GetPlacePhoto = async (placeName) => {
    const data = { textQuery: placeName };
    const result = await GetPlaceDetails(data).then((resp) => {
      const photoName = resp.data.places[0]?.photos[3]?.name; // Use optional chaining for safety
      if (photoName) {
        const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
        setPhotos((prev) => ({ ...prev, [placeName]: photoUrl }));
      }
    });
  };

  return (
    <div className='mt-5'>
      <h2 className='font-bold text-xl'>
        {dayKey.toUpperCase()} - Best Time: {day?.bestTimeToVisit}
      </h2>

      <div>
        {day?.plan?.map((place, placeIndex) => (
          <div
            key={placeIndex}
            className='p-4 border-b hover:scale-105 transition-all hover:shadow-md cursor-pointer'
          >
            <h3 className='font-semibold text-lg'>{place.placeName}</h3>
            <p>{place.placeDetails}</p>
            <p>
              <strong>Ticket Pricing:</strong> {place.ticketPricing}
            </p>
            <p>
              <strong>Time to Travel:</strong> {place.timeToTravel}
            </p>

            {/* Place Photo */}
            <Link
              to={
                'https://www.google.com/maps/search/?api=1&query=' +
                place.placeName
              }
              target='_blank'
            >
              <img
                src={photos[place.placeName] || '/placeholder.jpg'} // Show placeholder until photo is loaded
                alt={`Photo of ${place.placeName}`}
                className='w-[300px] h-[300px] object-cover mt-2 rounded'
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaceCardItem;
