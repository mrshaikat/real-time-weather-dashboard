import { useContext } from "react";
import { FavouriteContex, LocationContex } from "../../context";

export default function FavouriteListModal() {
  const {favourites} = useContext(FavouriteContex);
  const {setSelectedLocation} = useContext(LocationContex);

  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
       {favourites.length > 0 ? <>{favourites.map((fav, index)=>  <li key={index} className="hover:bg-gray-200">
        <a onClick={()=> setSelectedLocation({...fav})}>{fav.location}</a>
       </li>)}</> : <li className=" text-red-400">Item Not Found</li>}
      </ul>
    </div>
  );
}
