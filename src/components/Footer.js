import { useContext } from "react";
import userContext from "../../utils/userContext";

let Footer = () => {
    const {name, email} = useContext(userContext);
    return(
      <>
          <h4>Footer</h4>
          <h5>This site is developed by {name} email- {email}</h5>
      </>
    );
  }

export default Footer;