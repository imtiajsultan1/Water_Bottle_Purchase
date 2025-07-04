import './Bottle.css'

const Bottle = ({bottle ,handleAddToCart}) => {

    const {name, img, price} = bottle;

    return (
        <div className="bottle">
            <h3>Bottle : {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;