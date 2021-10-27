import React from "react";
import './card.css';
import Image from "./assets/br-c24rg5-lc24rg50fqlmzd-black-308747812.png";
import Button from "../addCartButton/button";
import Wishlist from "../addWishlistButton/wishButton";

function Card(info) {
    const {i} = info;

        return(
            <div className="card">
                <Wishlist/>
                <div className="image">
                    <img src={Image} alt="Monitor Gamer Samsung Odyssey 27 polegadas" />
                </div>
                <div className="cardInfo">
                    <h1 className="title">{i.title}</h1>
                    <span className="price">R$ {i.price}</span>
                    <p className="promPrice">R$ {i.promocionalPrice}</p>
                    <p className="division">em até <strong> 10x de R${i.division}</strong> sem Juros</p>
                </div>
                <Button/>
            </div>
        );
}

export default Card