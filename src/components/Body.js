import { RestrauntList } from "../Config";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
    return(
      <div class="restraunt-list">
        {
          RestrauntList.map((Restraunt) => {
            return <RestrauntCard {...Restraunt.info} />
          })
        }
      </div>
    );
  }

  export default Body;