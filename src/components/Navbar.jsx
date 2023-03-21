
import logo from "./images/logo.jpg"
import CartWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom";
    
    
const Navbar = () => {
    return (
<div className="container">
    <div className="row">
        <nav className="navbar navbar-expand-lg bg-body-">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}><img src={logo} width={"140"} alt="Vans Argentina"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink className="nav-link active text-black" activeClassName={"active"} to={"/"}>Productos</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-black" activeClassName={"active"} to={"/category/zapatillas"}>Zapatillas</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-black" activeClassName={"active"} to={"/category/gorras"}>Gorras</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-black" activeClassName={"active"} to={"/category/buzos"}>Buzos</NavLink>
                            </li>
                        </ul>
                    </div>
                    
                    {/* CARRITO */}
                    <div className="col d-flex aling-items-center justify-content-end">
                        <CartWidget />
                    </div>
            </div>
        </nav>
    </div>
</div>
    )
}

export default Navbar;
