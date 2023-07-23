import {IMG_CDN_URL} from "../Config";

const RestrauntCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    return( 
       <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId}
         className="restraunt-card-img"/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  }

export default RestrauntCard;