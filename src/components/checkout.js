import React, {useContext} from 'react'
import {Store} from '../store';



const Checkout = () => {
    const {state, dispatch} = useContext(Store);

    // const total = state.cart.length > 1 ? state.cart.reduce( (a, b) =>  +a.precio + +b.precio) : 0;

    const eliminarDelCarrito = (i) => {
        dispatch( {type: 'DELETE_ITEM', payload: i})
    }

    return (
        <div>
            <h1> Checkout ({state.cart.length}) </h1>
            {/* <h3> Total: ${total}</h3> */}
            <ul>
                {state.cart.map( (p, i) => <ItemCheckout {...p} eliminarDelCarrito={() => eliminarDelCarrito(i)}  key={i}/>)}
            </ul>
        
        </div>
    )

}


const ItemCheckout = ({titulo, precio, imagen, eliminarDelCarrito}) => {

    return (
        <li className="item-checkout"> 
            <div>
                <img src={imagen} className="img-checkout" />
            </div>
            <div>
                <h3>  {titulo}</h3>
            </div>
            <div>
                <h2> $ {precio} </h2>
            </div>
            <div>
                <button  className="boton-borrar" onClick={eliminarDelCarrito}> Eliminar </button>
            </div>
        </li>
    )
}

export default Checkout;