import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <div>
            <h2>My Dashboard</h2>
            <Link to="/">Home</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/users">Users</Link>
            <Link to="/settings">Settings</Link>
        </div>
    )
}
export default Sidebar;