import { RestrauntList } from "../Config";
import RestrauntCard from "./RestrauntCard";
import {useState} from "react";

function filterData(searchText,RestrauntList){
    const filterData= RestrauntList.filter((restraunt) => restraunt.info.name.includes(searchText));
    return filterData;
}

const Body = () => {
    const [restraunts, setRestraunts] = useState(RestrauntList); 
    const [searchText, setSearchText] = useState("");
    
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