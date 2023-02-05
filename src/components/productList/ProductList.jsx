import './productList.css';
import Product from './../product/Product';
import {products} from '../../data';

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Proyectos realizados por mí</h1>
            <p className="pl-desc">Hay proyectos maquetados solamente utilizando Html, Css y Javascript como por ejemplo: CarolinaSpa y GuitarLa. Por otro lado, hay proyectos donde se utilizó ReactJs, tales proyectos son PediBar y Vivero, los cuales cuentan con almacenamiento de información(registro de usuario, guardado de orden de compra, etc.), uno utilizando LocalStorage y otro Firebase.</p>
        </div>
        <div className="pl-list">
            {
                products.map( (item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))
            }
        </div>
    </div>
  )
}

export default ProductList