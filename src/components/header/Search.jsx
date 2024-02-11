import { useContext } from 'react';
import SearchLogo from '../../assets/search.svg';
import { LocationContex } from '../../context';
import { getLocationByName } from '../../data/location-data';
import { useDebounce } from '../../hooks';
export default function Search() {
  // const [searchTerm, setSearchTerm] = useState('');
  const {setSelectedLocation} = useContext(LocationContex);

  const doSearch = useDebounce((term)=>{
    const fetchLocation = getLocationByName(term);
    setSelectedLocation({...fetchLocation});
  }, 500);

  function handleChange(e) {
    const value = e.target.value;
    // setSearchTerm(value);
    doSearch(value);

  }

  //  function handleSubmit(e){
  //   e.preventDefault();
  //   const fetchLocation = getLocationByName(searchTerm);
  //   setSelectedLocation({...fetchLocation});
  // }
  return (
    // <form action="#" onSubmit={handleSubmit}>
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          onChange={(e)=> {handleChange(e)}}
        />
        <button type="submit">
          <img src={SearchLogo} />
        </button>
      </div>
    </form>
  );
}
