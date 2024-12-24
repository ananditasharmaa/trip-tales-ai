import { Button } from '@/components/ui/button';
import { IoMdShare } from "react-icons/io";
import React, { useEffect, useState } from 'react';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalAPI';
import { useToast } from '@/components/ui/use-toast';

function InfoSection({ trip }) {
  const [PhotoUrl, setPhotoUrl] = useState();
  const { toast } = useToast();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.UserSelection?.location?.label,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    }).catch(err => console.error('Failed to fetch photo:', err));
  };

  const shareLink = `${window.location.origin}/trips/${trip?.id || ''}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink)
      .then(() => {
        toast({
          title: "Link Copied",
          description: "The trip link has been copied to your clipboard.",
          variant: "success",
        });
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: "Failed to copy the link. Please try again.",
          variant: "destructive",
        });
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div>
      <img src={PhotoUrl} className="h-[340px] w-full object-cover rounded-xl" alt="Trip" />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">{trip?.UserSelection?.location?.label}</h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              📅{trip?.UserSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              💰{trip?.UserSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              🥂No. of Traveler: {trip?.UserSelection?.traveler}
            </h2>
          </div>
        </div>

        <Button onClick={handleCopyLink} className="bg-gray-600 text-white flex items-center p-2 rounded-md">
          <IoMdShare className="mr-2" />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
