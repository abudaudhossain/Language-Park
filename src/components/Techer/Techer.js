import React from 'react';

const Techer = (props) => {
    return (
        <div class="col">
            <div class="card">
                <img src={props.img} class="card-img-top" alt="Techer-img" style={{height: "350px"}} />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Techer;