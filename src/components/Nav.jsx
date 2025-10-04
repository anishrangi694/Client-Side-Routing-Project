import { Link } from "react-router-dom";

function Nav(){
    return (
        <div className="bg-gray-700 p-3" >
            <nav >
                <div className="text-right">
                <Link to='/' className="m-10 text-2xl text-gray-100">Home</Link>
                <Link to='/About' className="m-8 text-2xl text-gray-100">About</Link>
                <Link to='/Contact' className="m-8 text-2xl text-gray-100">Contact</Link>
                <Link to='/Services'className="mx-8 text-2xl text-gray-100">Services</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav;