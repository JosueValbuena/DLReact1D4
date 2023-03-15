import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from './Card'
const url = "https://fakestoreapi.com/products"

const MiApi = () => {

    useEffect(() => {
        getApi()
    }, [])

    const [api, setApi] = useState([]);
    const [filtro, setFiltro] = useState("")

    const getApi = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setApi(data)
    }

    const sortAZ = async() =>{
        let asd = await api.sort()
    }

    return (
        <div>
            <div>
                <h4>Organizar por:</h4>
                <button className='btn btn-outline-dark'
                onClick={() => sortAZ()}>Nombre A-Z</button>
            </div>
            <form >
                <input type="text" 
                       value={filtro}
                       onChange={(e)=>setFiltro(e.target.value)}
                       placeholder="buscar articulo.."
                       className="form-control" />
            </form>
            <div className='d-flex flex-wrap justify-content-evenly rounded'>
            {api.filter((item) => {
                return filtro.toLowerCase() === "" 
                ? item 
                : item.title.toLowerCase().includes(filtro)
            }).map(item => <Card api={item} key={item.id}/>)}
            </div>
        </div>
    )
}

export default MiApi;
