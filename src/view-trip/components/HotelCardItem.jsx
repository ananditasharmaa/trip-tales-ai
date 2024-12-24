import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalAPI';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HotelCardItem({ hotel }) {
    const [PhotoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        hotel && GetPlacePhoto();
    }, [hotel]);

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: hotel?.hotelName
        };
        const result = await GetPlaceDetails(data).then(resp => {
            console.log(resp.data.places[0].photos[2].name);
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
            setPhotoUrl(PhotoUrl);
        });
    };

    return (
        <Link
            to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotelName + ',' + hotel?.hotelAddress}
            target='_blank'
        >
            <div className='hover:scale-105 transition-all cursor-pointer'>
                <img src={PhotoUrl || "/placeholder.jpg"} className='rounded-xl' />
                <div className='my-2 flex flex-col gap-2'>
                    <h2 className='font-medium'>{hotel?.hotelName}</h2>
                    <h2 className='text-sm text-gray-500'>{hotel?.description}</h2>
                    <h2 className='text-xs text-gray-600'>📍{hotel?.hotelAddress}</h2>
                    <h2 className='text-sm'>{hotel?.price}</h2>
                    <h2 className='text-sm'>⭐{hotel?.rating}</h2>
                </div>
            </div>
        </Link>
    );
}

export default HotelCardItem;
