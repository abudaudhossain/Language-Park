import React from 'react';
import Form from '../Form/Form';
import connectImg from "../../5964.jpg"

const Contact = () => {
    return (
        <div>
            <div className="text-center">
                <h4 className="text-danger">Contact us</h4>
                <h2 className="title my-3">Get In Touch With Us</h2>
                <p>Verbling is without a doubt the best one-on-one teaching resource when it comes to convenience.</p>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4 my-4">
                    <div>
                        <img src={connectImg} alt="" />
                    </div>
                    <Form></Form>
                </div>

            </div>
        </div>
    );
};

export default Contact;