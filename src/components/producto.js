import React from 'react'; 


const Producto = ({titulo, precio, imagen, addItem}) => {

    return (
        <li className="item-producto"> 
                 <h3> {titulo} </h3>
                 <h2><b>{precio}</b></h2>
                 <img src={imagen} />
                 <button onClick={addItem} className="button-agregar">
                  AGREGAR AL CARRITO </button>
        </li>
    )
}


export default Producto;