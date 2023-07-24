import { RestrauntList } from "../Config";
import RestrauntCard from "./RestrauntCard";
import {useState, useEffect} from "react";

function filterData(searchText,RestrauntList){
    const filterData= RestrauntList.filter((restraunt) => restraunt.info.name.includes(searchText));
    return filterData;
}

const Body = () => {
    const [restraunts, setRestraunts] = useState(RestrauntList); 
    const [searchText, setSearchText] = useState("");
   
    useEffect(()=>{ 
     getRestraunts();
    },[])
   
    async function getRestraunts(){
         const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
         const ans = await data.json();
         console.log(ans);
         console.log(ans.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
         setRestraunts(ans?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
   
    return(
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
                    const data = filterData(searchText, RestrauntList);
                    setRestraunts(data);
                  }}
                  >
                    Search</button>
               
            </div>
            <div className="restraunt-list">
             {
               restraunts.map((Restraunt) => {
               return <RestrauntCard {...Restraunt.info} />
               })
             }
      </div>
        </>
    );
  }

  export default Body;