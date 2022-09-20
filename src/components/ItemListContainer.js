/*---- Componente contenedor que muestra un mensaje con una prop greeting ----*/
const ItemListContainer = (props) => {
    return(
        <div className='hero_container'>
            <p className='hero'>¡Bienvenido <span className="hero_span">{props.greeting}</span> a BLKY Pets!</p>
        </div>
    );
}

export default ItemListContainer;

