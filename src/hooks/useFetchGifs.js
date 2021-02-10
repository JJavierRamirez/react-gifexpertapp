import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true, 
    }); 

    useEffect(() => {
        getGifs(category)
            .then(imgs=>{
                setstate({
                    data: imgs,
                    loading: false,
                })
            })
    }, [category]); //Disparara el efecto cuando category cambie
    //Los corchetes vacios significan que el componente getGifs solo se renderizara una vez

    return state;
}
