/*---- Importación de recursos ----*/
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { db } from '../../utils/Firebase';

const MySwal = withReactContent(Swal);

/*---- Renderiza las categorías que hidratan el menú desplegable: ----*/
const NavBarCategories = () => {
  const [ category, setCategory] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const collectionQuery = query(collection(db, 'categories'),
      orderBy('name')
    );
    getDocs(collectionQuery)
      .then((value) => {
        setCategory(value.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
      })
      .catch(err => {
        return MySwal.fire({
          title: 'Error de conexión',
          text: `${err}`,
          icon: 'error',
          confirmButtonText: 'ACEPTAR'
        });
      })
  }, [ categoryId ]);

  return(
    <div className='categories-div'>
      <li className='nav-item'>
        { category.map((value) => { return <NavLink className='nav-link fs-2' to={`/category/${value.key}`} key={value.key}>{value.name}</NavLink>})}
      </li>
    </div>
  );
};

export default NavBarCategories;
