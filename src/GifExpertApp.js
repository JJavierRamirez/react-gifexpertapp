import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //Mandamos a llamar un hook ([variable, funcion])
    const [categories, setCategories] = useState(['Baby yoda']);

    // const handleAdd = (evento) =>{
    //     //setCategories([...categories, 'Viajes']);
    //     setCategories(cats => [...cats, 'Viajes']); //Callback donde primer argumento (cats) es el estado anterior y tiene que retornar un nuevo estado
    // }

    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}></AddCategory>
        <hr/>

        {/* <button onClick={handleAdd}>Agregar</button> */}
        
        <ol>
            {
                //map regresa un nuevo arreglo con base a categories
                //donde tiene una variable category declarada ahi mismo
                //y un iterador, el cual no es necesario en este caso
                //categories.map((category, i) => {
                // categories.map(category => {
                //     return <li key={category}> {category}</li>
                // })
                categories.map(category =>
                  <GifGrid 
                    key={category} 
                    category={category}
                  />
                )
            }
        </ol>
      </>
    )
  }
  