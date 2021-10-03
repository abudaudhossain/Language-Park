import React from 'react';

const Details = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div>
                <img src="https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/2021/06/young-latin-woman-in-black-headphones-teaching-english-online-e1625538522520.jpg" alt="images" />
            </div>
            <div>
                <h4 className="text-danger">About Us</h4>
                <h2 className="title my-3">Know About Best Online Learning Platform With Verbalize</h2>
                <p>Choose from hundreds of free Language Learning courses or pay to earn a Course or Specialization Certificate. In language courses and Specializations</p>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <h3 className="title">Online Tutoring</h3>
                    <h3 className="title">50+ Courses</h3>
                    <h3 className="title">Lifetime Access</h3>
                    <h3 className="title">Activate Learning</h3>
                </div>
            </div>
        </div>
    );
};

export default Details;