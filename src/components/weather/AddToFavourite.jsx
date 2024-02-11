import { useContext, useEffect, useState } from "react";
import AddToFavouriteIcon from "../../assets/heart-red.svg";
import RemoveFromFavouriteIcon from "../../assets/heart.svg";
import { FavouriteContex, WeatherContext } from "../../context";

export default function AddToFavourite() {
  const { favourites, addToFavourites, removeFromFavourite } = useContext(FavouriteContex);
  const {weatherData} = useContext(WeatherContext);
  const {latitude, longitude, location} = weatherData;
  const [isFavourite, setToggleFavourite] = useState(false);

  useEffect(()=> {
    const found = favourites.find((fav) => fav.location === location);
    setToggleFavourite(found);
  }, []);

  const handleToggleFavouriteIcon = () =>{
    const found = favourites.find((fav) => fav.location === location);
    console.log("Found", found);
    if(!found){
      addToFavourites(latitude, longitude, location);
    }else{
      removeFromFavourite(location);
    }
      setToggleFavourite(prev => !prev);

  }
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button onClick={handleToggleFavouriteIcon} className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span>Add to Favourite</span>
          <img src={isFavourite ? AddToFavouriteIcon : RemoveFromFavouriteIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
