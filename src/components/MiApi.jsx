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

    let resultado  = api;

    const ordenarMenor = () =>{
        resultado = resultado.sort((a, b) => a.title.localeCompare(b.title))
    console.log(resultado);
    }


    const ordenarMayor = () =>{
        resultado = resultado.sort((b, a) => a.title.localeCompare(b.title))
        console.log(resultado);
    }

    return (
        <div className='container'>
            <div className='d-flex my-3'>
                <h4>Organizar por:</h4>
                <button className='btn btn-outline-dark mx-3'
                onClick={ordenarMenor}
                >Nombre A-Z</button>
                <button className='btn btn-outline-dark mx-3'
                onClick={ordenarMayor}
                >Nombre Z-A</button>
            </div>
            <form className=' d-flex  justify-content-center my-3'>
                <input type="text" 
                       value={filtro}
                       onChange={(e)=>setFiltro(e.target.value)}
                       placeholder="buscar articulo.."
                       className="form-control w-50" />
            </form>
            <div className='d-flex flex-wrap justify-content-evenly rounded'>
            {resultado.filter((item) => {
                return filtro.toLowerCase() === "" 
                ? item 
                : item.title.toLowerCase().includes(filtro)
            }).map(item => <Card api={item} key={item.id}/>)}
            </div>
        </div>
    )
}

export default MiApi;
