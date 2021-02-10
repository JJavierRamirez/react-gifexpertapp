import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    //Hook useState con variable y funcion
    const [inputValue, setInputValue] = useState('');

    //Funcion para manejar el evento de cambio en el imput
    const handleInputChange = (e) => {
        //(e.target.value) sirve para extraer el valor del elemento e que detecta el evento onChange
        setInputValue(e.target.value);
    }
    
    //Funcion para manjear el evento 
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit hecho');
        //Validar que la cadena no sea vacia
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = { 
    setCategories: PropTypes.func.isRequired
}

AddCategory.defaultProps = {
    
}
