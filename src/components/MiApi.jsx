import React, { useEffect } from 'react'
import { useState } from 'react'
const url = "https://fakestoreapi.com/products"

const MiApi = () => {

    useEffect(() => {
        getApi()
    }, [])

    const [api, setApi] = useState([]);

    const getApi = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setApi(data)
    }

    return (
        <div>
            {api.map( item => 
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <img src={item.image} />
                    <p>{item.price}</p>
                </div>)}
        </div>
    )
}

export default MiApi;
