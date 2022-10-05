/*---- Importación de recursos ----*/
import React, { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

import imgArnes from '../assets/img/Arneses.jpg';
import imgCollar from '../assets/img/Collares.jpg';
import imgCorrea from '../assets/img/Correas.jpg';
import imgMonio from '../assets/img/Monios.jpg';
import imgPortabolsita from '../assets/img/Portabolsitas.jpg';
import imgPretal from '../assets/img/Pretales.jpg';


/*---- Arreglo de productos: ----*/
const products = [
    { id: '1', title: 'Arnés', description: 'Confeccionados con tres capas de tela, nuestros arneses se destacan porque son bien acolchados, gruesos y resistentes. No lastiman el cuello ni la piel de tu mascota y son extra seguros. Además, son totalmente regulables! Podés ajustar la medida de cuello y de pecho de acuerdo a lo que tu mascota necesite.', category: 'arneses', price: 2500, pictureUrl: imgArnes },
    { id: '2', title: 'Collar', description: 'Realizados con poliéster de alta resistencia y acolchados por dentro, nuestros collares son suaves y no raspan el cuello de tu mascota. Además, son totalmente regulables, seguros y con colores brillantes y nítidos que no se destiñen al lavar.', category: 'collares', price: 3000, pictureUrl: imgCollar },
    { id: '3', title: 'Correa', description: 'Realizadas con poliéster de alta resistencia y con manijas acolchadas, nuestras correas resultan súper suaves en tus manos. Son confeccionadas con materiales de calidad y costuras reforzadas, volviendolas fuertes y seguras. Además, nuestro diseño con argolla incorporada permite llevar accesorios pequeños como bolsitas, luces led o lo que quieras.', category: 'correas', price: 3500, pictureUrl: imgCorrea },
    { id: '4', title: 'Moño', description: 'Nuestros moños son el mejor detalle para combinar con el collar de tu mascota. Hechos con tela de poliéster, llevan dos presillas de elástico en la parte trasera que permiten pasar el collar por el medio para colocarlo.', category: 'monios', price: 4000, pictureUrl: imgMonio },
    { id: '5', title: 'Portabolsita', description: 'Tene a mano siempre las bolsitas y complementa la correa de tu mascota con nuestros portabolsitas. Son estampados, livianos y lavables. Podés colocarlos en cualquier accesorio gracias a su argolla infinita, y permiten llevar varias bolsas de cualquier formato, no solo en rollito.', category: 'portabolsitas', price: 4500, pictureUrl: imgPortabolsita },
    { id: '6', title: 'Pretal', description: 'Realizados con poliéster de alta resistencia, nuestros pretales doble agarre sostienen a tu mascota tanto del bajo cuello como del pecho, asegurandote un paseo sin incidentes ni escapes. Son totalmente regulables y traen dos argollas soldadas en la parte superior, lo que te brinda dos opciones distintas de donde enganchar la correa.', category: 'pretales', price: 5000, pictureUrl: imgPretal }
];

/*---- Renderiza el producto cuyo id coincida con el id de la ruta usando un async mock de 2 segundos: ----*/
const ItemDetailContainer = () => {

    const [ item, setItem ] = useState({});

    const { itemId } = useParams();
    
    useEffect(() => {
        const getItem = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000)
        });
        getItem.then(res => setItem(res.find(product => product.id === itemId)));
    },[ itemId ]);

    return(
        <ItemDetail item={ item }/>
    );
};

export default ItemDetailContainer;