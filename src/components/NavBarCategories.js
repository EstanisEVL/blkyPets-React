import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

export const NavBarCategories1 = () => {
  const [ category, setCategory] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const collectionQuery = collection(db, 'categories');
    getDocs(collectionQuery)
      .then((value) => {
        setCategory(value.docs.map((doc) => ({ ...doc.data()})))
      })
      // agregar catch()
  }, [ categoryId ]);

  return(
    <div className='categories-div'>
      <li className='nav-item'>
        { category.map((value) => { return <NavLink className='nav-link fs-2' to={`/category/${value.key}`} key={value.key}>{value.name}</NavLink>})}
      </li>
    </div>
  );
};

export const NavBarCategories2 = () => {
  const [ category, setCategory] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const collectionQuery = collection(db, 'categories2');
    getDocs(collectionQuery)
      .then((value) => {
        setCategory(value.docs.map((doc) => ({ ...doc.data()})))
      })
  }, [ categoryId ] )

  return(
    <div className='categories-div'>
      <li className='nav-item'>
        { category.map((value) => { return <NavLink className='nav-link fs-2' to={`/category/${value.key}`} key={value.key}>{value.name}</NavLink>})}
      </li>
    </div>
  );
};


