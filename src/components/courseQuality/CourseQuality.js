import React from 'react';
import quality from '../../quality.webp';

const CourseQuality = () => {
    return (
        <div className="d-flex  align-items-center justify-content-center">
            <div className="p-5">
                <img className="" src={quality} alt="" />
            </div>
            <div className="px-5">
                <h4 className="text-danger">High Quality</h4>
                <h1 className="title">Let’s Start Your Education!</h1>
                <p>We offer a brand new approach to the most basic things. The wide range of learning options allows our students to select the most convenient and effective course!</p>
                <button type="button" className="btn btn-primary btn-lg">Get Start Course</button>
            </div>
        </div>
    );
};

export default CourseQuality;