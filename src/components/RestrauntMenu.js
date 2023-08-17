import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMG_CDN_URL} from "../Config.js";
import Shimmer from "./Shimmer.js";

const RestrauntMenu = () =>{
    const {resId} = useParams(); 
    
    const [restraunt, setRestraunt] = useState(null);

    useEffect(()=>{
        getRestrauntInfo();
    },[]);

    async function getRestrauntInfo(){
       const ans = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=);
        const json = await ans.json();
       console.log(json);
       setRestraunt(json.data);
    }

    return (!restraunt)?<Shimmer/>:(
        <div className="Restraunt-info-container">
            <div className="info">
              <img src={IMG_CDN_URL+restraunt?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
              <h1>{restraunt?.cards[0]?.card?.card?.info?.name}</h1>
              <h2>{restraunt?.cards[0]?.card?.card?.info?.city}</h2>
              <h4>Rating: {restraunt?.cards[0]?.card?.card?.info?.avgRating}</h4>
              <h4>{restraunt?.cards[0]?.card?.card?.info?.costForTwoMessage}</h4>
            </div>
            <div className="menu">
               <h2>Menu:</h2>
               <ul>
               {restraunt?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map((item) => (
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
               ))}
               </ul>
            </div> 
        </div> 
    )
}

export default RestrauntMenu;