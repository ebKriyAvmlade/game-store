//Card.jsx
import React from "react"

export default function Card(props) {






    return(
        <div className="card">
            <img src={props.img} alt="" />
            <div className="game-info">
                <p className="game-name">{props.name}</p>
                <p className="game-price">{props.genre}</p>
                <p>{props.platform}</p>
                <p>{props.platform1}</p>
                <button className="cart" onClick={() => onAddToCart(id)}>Add to Cart</button>
            </div>
        </div>
    )
}