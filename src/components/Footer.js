import { useContext } from "react";
import userContext from "../../utils/userContext";

let Footer = () => {
    const {user} = useContext(userContext);
    return(
      <>
          <h4>Footer</h4>
          <h5>This site is developed by {user.name} email- {user.email}</h5>
      </>
    );
  }

export default Footer;