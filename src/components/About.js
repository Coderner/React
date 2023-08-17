import {useContext} from "react";
import userContext from "../../utils/userContext";
const About = () => {
    const {name, email}=useContext(userContext);
    return(
        <>
          <h1>This is the About Page</h1>
          <p>Welcome to React Course</p>
          <h2>Created by : {name} with email as : {email}</h2>
        </>
    )
}

export default About;