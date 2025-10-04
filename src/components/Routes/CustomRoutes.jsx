import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Services from "../Services";

function CustomRoutes(){

    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />}/>
            <Route path='/Services' element={<Services />} />
        </Routes>
    )
}

export default CustomRoutes;