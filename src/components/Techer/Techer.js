import React from 'react';

const Techer = (props) => {
    return (
        <div className="col">
            <div className="card">
                <img src={props.img} className="card-img-top" alt="Techer-img" style={{ height: "350px" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Techer;