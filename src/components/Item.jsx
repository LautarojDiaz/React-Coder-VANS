import {Link} from "react-router-dom";

const Item = ({item}) => {
    return(
        <Link to={"/item/" + item.index} className="text-decoration-none text-dark" >
            <div class="card">
            <img src={item.imagen} class="card-img-top" alt={item.nombre} />
                <div class="card-body text-center">
                    <h5 class="card-title">{item.nombre}</h5>
                </div>
            </div>
        </Link>
    )
}

export default Item;