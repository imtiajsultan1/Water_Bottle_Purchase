import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS } from "../../utilities/localStorage";

const Bottles = () => {

    const [bottles , setBottles] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(response => response.json())
        .then(data => setBottles(data))
    },[])

    const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);

        addToLS(bottle.id);
    }
    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <h3>Cart : {cart.length}</h3>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart} ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;