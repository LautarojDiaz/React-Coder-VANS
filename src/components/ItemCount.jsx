import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);
  

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
        
    }
  
      const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (stock >= items){
            setItemStock(itemStock - items);
            setItems(1)
            console.log("Agregaste" + items + " productos al carro");
            setItemAdded(true);
            onAdd(items);
        }
    }
 

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);



    return(
        <div className="container">
            <div className="row my-1 text-center">
                <div className="col">
                    <div className="btn-group">
                        <button  className="btn btn-warning" onClick={decrementarStock}>-</button>
                        <button  className="btn btn-warning" >{items}</button>
                        <button  className="btn btn-warning" onClick={incrementarStock}>+</button>
                    </div>
                </div>
                </div>
                <div className="row my-1 text-center">
                    <div className="col">
                        {itemAdded ? <Link to={"/cart"} className="btn btn-warning">Finalizar mí compra</Link> :
                        <button className="btn btn-warning" onClick={addToCart}>Agregar al Carro</button> }
                    </div>
            </div>
        </div>
    )
}

export default ItemCount; 