import React from 'react';

const Service = (props) => {

    const {name, discription, image, price, duretion} = props.service;
    return (
        <div className ="col">
        <div className ="card h-100">
            <img src={image} className ="card-img-top" alt="..." />
            <div className ="card-body">
                <h5 className ="card-title">{name}</h5>
                <p className ="card-text">{discription}</p>
                <span class="badge rounded-pill bg-primary p-2 m-2 fs-6">{duretion}</span>
                <span class="badge rounded-pill bg-primary p-2 m-2 fs-6">${price}</span>
            </div>
            <div className = "card-footer">
            <button type="button" className = "btn btn-primary btn-lg">Enroll Now</button>
            </div>
        </div>
    </div>
    );
};

export default Service;