import React from 'react'

const Card = ({ api }) => {
    return (

        <div className="card mx-1 my-2 align-self-start bg-light" style={{width: "18rem"}}>
            <img src={api.image} style={{height: "15rem"}} alt="..." />
                <hr />
                <div className="card-body">
                    <h5 className="card-title">{api.title}</h5>
                    <div className='description'>
                    <p className="card-text">{api.description}</p>
                    </div>
                    <p className="card-text">{api.price}</p>
                </div>
        </div>
    )
}

export default Card