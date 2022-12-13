import { NavLink } from "./NavLink";
import './navbar.css'
export default function Navbar() {
    return (
        <div className="navB">
            <h1>Tour of Heroes</h1>
            <nav>
                <ul className="navUl">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/heroes">Heroes</NavLink>
                </ul>
            </nav>
        </div>

    )
}