import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const services = (useServices());
    return (
        <div className="container my-5">
            <h2 className ="text-center text-danger py-5">Our services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service> )
                }
            </div>
        </div>
    );
};

export default Services;