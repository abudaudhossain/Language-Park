import React from 'react';
import useServices from '../../hooks/useServices';
import CourseQuality from '../courseQuality/CourseQuality';
import Service from '../Service/Service';


const Home = () => {
    const services = (useServices());
    return (
        <div id="home" className="container ">
            <CourseQuality></CourseQuality>
            <h4 className="text-center text-danger my-5">Our Services</h4>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    services.slice(0, 4).map(service => <Service key={service.id} service={service}></Service> )
                }
            </div>
        </div>
    );
};

export default Home;