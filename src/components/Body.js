import RestrauntCard from "./RestrauntCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

function filterData(searchText,allRestraunts){
    const filterData= allRestraunts.filter((restraunt) => restraunt.info.name.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
}

const Body = () => {
    const [allRestraunts, setAllRestraunts] = useState([]);
    const [filteredRestraunts, setFilteredRestraunts] = useState([]); 
    const [searchText, setSearchText] = useState("");
   
    useEffect(()=>{ 
     getRestraunts();
    },[])
   
    async function getRestraunts(){
         const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
         const ans = await data.json();
         console.log(ans);
         console.log(ans.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setAllRestraunts(ans?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setFilteredRestraunts(ans?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

    if(!allRestraunts) return null;
   
    return (allRestraunts?.length===0)?<Shimmer/>:(
        <>
            <div className="search-container"> 
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e)=>{
                    setSearchText(e.target.value)
                  }}
                />
                <button className="search-btn"
                  onClick={()=>{
                    const data = filterData(searchText, allRestraunts);
                    setFilteredRestraunts(data);
                  }}
                  >
                    Search</button>
               
            </div>
            <div className="restraunt-list">
             {
               filteredRestraunts.map((Restraunt) => {
               return <RestrauntCard key={Restraunt.id} {...Restraunt.info} />
               })
             }
      </div>
        </>
    );
  }

  export default Body;