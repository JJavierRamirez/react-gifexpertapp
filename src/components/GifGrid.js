import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import React, { useState, useEffect } from 'react';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs(category);
   
    return (
        <>
        <h3>{category}</h3>
        { loading  && <p className='card animate__animated animate__flash'>Loading...</p> }
            <div className='card-grid'>
                
                {
                    images.map((img)=>
                        //<li key={image.id}>{image.title}</li>
                        <GifGridItem 
                            key={img.id}
                            //img={img} esto manda a cada propiedad img (props.img) el img
                            {...img} //Esto manda cada img como una propiedad (es decir solo props)
                        />
                    )
                }

            </div>
        </>
    )
}
