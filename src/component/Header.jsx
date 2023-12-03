import React from "react"


export default function Header() {
    return(
        <nav>
            <h1>GAME <span>STORE</span></h1>
            <input 
            type="text"  
            className="inp"
            placeholder="search for a game"
            />
            <div className="top-text">
                <p>Home</p>
                <p>Streams</p>
                <p>Game Store</p>
                <p>News</p>
            </div>
            <div className="top-icon">
                <img src="baseline_shopping_cart_black_24dp.png" alt="" />
                <img src="baseline_favorite_black_24dp.png" alt="" />
                <img src="baseline_account_circle_black_24dp.png" alt="" />
            </div>
        </nav>
    )
}