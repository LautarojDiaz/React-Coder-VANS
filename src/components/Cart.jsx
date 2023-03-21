import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "./images/trash.svg"

const Cart = () => {
    const {cart, cartTotal, removeItem, clear, cartSun} = useContext(CartContext);

    if (cartTotal() === 0) {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div class="alert alert-warning text-center" role="alert">
                        No se encontraron productos en el carro
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <tr>
                            <td  className="text-end" colSpan={5}><Link type="button" className="btn btn-warning" onClick={() => {clear()}} >Vaciar carro</Link></td>
                        </tr>
                        {
                            cart.map(item => (
                                <tr key={item.index} > 
                                    <td className="text-start" width="10%" ><img src={item.imagen} alt={item.nombre}
                                     width={120} /></td>
                                    <td className="text-start aling-middle" width="40%">{item.nombre}</td>
                                    <td className="text-start aling-middle" width="20%">{item.quantity} * ${item.precio} </td>
                                    <td className="text-start aling-middle" width="2%">${item.quantity * item.precio}</td>
                                    <td className="text-end aling-middle" width="10%"><button type="button" className="btn btn-warning" onClick={() => {removeItem(item.index)}} title={"Eliminar Producto"} ><img src={trash} alt={"Eliminar Produto"} width={40}/></button></td>
                                </tr>
                                ))
                        }
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total a pagar</td>
                            <td className="text-center" ><b>${cartSun()}</b></td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Cart;