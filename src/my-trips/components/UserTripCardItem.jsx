import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalAPI';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({ trip }) {
    const [PhotoUrl, setPhotoUrl] = useState();
    useEffect(() => {
        trip && GetPlacePhoto();
    }, [trip])

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: trip?.UserSelection?.location?.label
        };
        const result = await GetPlaceDetails(data).then(resp => {
            console.log(resp.data.places[0].photos[3].name)

            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
            setPhotoUrl(PhotoUrl)
        })
    };

    return (
        <Link to={'/view-trip/'+trip?.id}>
            <div className='hover:scale-105 transition-all '>
                <img className=" h-[340px] w-full object-cover rounded-xl" src={PhotoUrl ? PhotoUrl : "/placeholder.jpg"} alt="destination image" />
                <div>
                    <h2 className='font-bold text-lg'>{trip?.UserSelection?.location?.label}</h2>
                    <h2 className='text-sm text-gray-500'>{trip?.UserSelection?.noOfDays} Day trip with {trip?.UserSelection?.budget} budget</h2>
                </div>
            </div>
        </Link>
    )
}

export default UserTripCardItem