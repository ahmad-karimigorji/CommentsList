import { NavLink } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
            <h2>Not Found Page / 404</h2>
            <NavLink to='/'>go to Home</NavLink>
        </>
     );
}
 
export default NotFound;