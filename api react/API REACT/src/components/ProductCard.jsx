import React from "react";
 const ProductCard=(props)=>{
    return (
        <div classname="product-card">
            <img src={props.image}></img>
            <h3 className="w-96">TITLE:{props.title}</h3>
            <p className="w-1/2">DESCRIPTION:
            {props.description}
            </p>
        </div>
    )
    };

    export default ProductCard;
