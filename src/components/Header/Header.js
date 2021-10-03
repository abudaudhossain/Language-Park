import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Heade.css'

const Header = () => {
    return (
        <div className="bg-color">
            <Navbar></Navbar>
            <header className="d-flex align-items-center text-center justify-content-center">
                <div>
                    <h1 className="title fw-bold">Language Park</h1>
                    <p>The goal of the modern language department is to prepare students to communicate successfully with Chinese, French, or Spanish native speakers.</p>
                    <button type="button" className = "btn btn-primary btn-lg">Get Start Course</button>
                </div>
            </header>
        </div>

    );
};

export default Header;