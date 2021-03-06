import React, {useState, useContext, useEffect} from 'react';
import Producto from './producto';
import {Store} from '../store';

const initialProductos = [
    {
      "titulo": "Samsung A4",
      "precio": "10500",
      "imagen": "https://www.91-img.com/pictures/132136-v2-samsung-galaxy-a10-mobile-phone-large-1.jpg"
    },
    {
      "titulo": "Samsung Galaxy 4",
      "precio": "7500",
      "imagen": "https://www.91-img.com/pictures/132136-v2-samsung-galaxy-a10-mobile-phone-large-1.jpg"
    },
    {
      "titulo": "Samsung ACE 3",
      "precio": "17000",
      "imagen": "https://www.91-img.com/pictures/132136-v2-samsung-galaxy-a10-mobile-phone-large-1.jpg"
    },
    {
      "titulo": "Samsung J8",
      "precio": "16000",
      "imagen": "https://www.91-img.com/pictures/132136-v2-samsung-galaxy-a10-mobile-phone-large-1.jpg"
    },
    {
      "titulo": "Samsung J7 PRIME",
      "precio": "11000",
      "imagen": "https://www.91-img.com/pictures/132136-v2-samsung-galaxy-a10-mobile-phone-large-1.jpg"
    }
  ];  


  const Home = () => {
    const [productos, setProductos] = useState(initialProductos);
     const { state, dispatch } = useContext(Store);

    const addItem = (i) => {
      const producto = productos.find( (_, id) => id === i);
      dispatch({type:'ADD_ITEM', payload: producto});
    }

    const getData = () => {
      fetch('../data.json').then(data => console.log(data))
    }


    useEffect(() => {
      getData();
    });


    return (
        <div>
         <ul className="lista-productos">
              {productos.map((producto, i) => <Producto addItem={() => addItem(i)} key={i}  {...producto}/>)}
         </ul>
        </div>
    )
  }

  export default Home;