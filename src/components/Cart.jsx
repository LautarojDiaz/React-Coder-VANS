import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "./images/trash.svg"
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, cartTotal, removeItem, clear, cartSum} = useContext(CartContext);

    const generarOrden = () => {
        const buyer = {name:nombre, email:email, phone:telefono}
        const fecha = new Date();
        const items = [...cart]
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.
        getMinutes}:${fecha.getSeconds}`;
        const order = {buyer:buyer, items:{cart}, date:date, total:cartSum()}
    
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            clear();
        })
    }


    if (cartTotal() === 0) {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {orderId ? <div class="alert alert-warning text-center" role="alert"><h3>
                        Gracias por su compra</h3>
                        <p>Se genero una compra con el ID: <b>{orderId}</b></p></div> : ""}
                    </div>
                </div>
            </div>
           
        )

    }



    return(
        <div className="container my-5">
            <div className="row">
                <h1 className="text-center" >Su carro de compras:</h1>
                <div className="col-md-3">
                    <form>
                        <div class="mb-3">
                            <label htmlFor="Nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" onInput={(e) =>
                            {setNombre(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="Email" class="form-label">Email</label>
                            <input type="text" class="form-control" id="email" onInput={(e) =>
                            {setEmail(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="telefono" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="telefono" onInput={(e) =>
                            {setTelefono(e.target.value)}}/>
                        </div>
                        <button type="button" class="btn btn-warning" onClick={generarOrden} >Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-9">
                    <table className="table">
                        <tr>
                            <td  className="text-end" colSpan={5}><Link type="button" className="btn btn-warning" 
                            onClick={() => {clear()}} >Vaciar carro</Link></td>
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
                            <td className="text-center" ><b>${cartSum()}</b></td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Cart;