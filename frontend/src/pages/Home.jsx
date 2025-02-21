import React from 'react';
import { FaArrowRight, FaDatabase, FaNetworkWired, FaCode, FaObjectGroup, FaTree, FaLaptop } from 'react-icons/fa';
import Bg from '../assets/Bg.gif';
import '../css/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-container">
            <div className="container">
                <div className="content">
                    <h1>get a realistic online <span style={{ color: "purple" }}>interview</span><br /> experience with us!</h1>
                    <img src={Bg} alt="" />
                </div>

                <Link to={'/interview'} style={{ textDecoration: "none", marginTop: "-10rem" }}>
                    <button>Take an Interview Now <FaArrowRight /></button>
                </Link>

                <div className="promo">
                    <h2>Why Choose techReady.<span id='ai' style={{ color: "purple" }}>ai</span> ?</h2>
                    <div className="card-grid">

                        <div className="card">
                            <p><span style={{ color: "purple" }}>Realistic</span> interview experience</p>
                        </div>

                        <div className="card">
                            <p><span style={{ color: "purple" }}>Handpicked</span> interview questions on each topic</p>
                        </div>

                        <div className="card">
                            <p>Get an approximate <span style={{ color: "purple" }}>score </span>based on your performance</p>
                        </div>

                        <div className="card">
                            <p><span style={{ color: "purple" }}>Personalized report </span>  and feedback for each question</p>
                        </div>

                        <div className="card">
                            <p><span style={{ color: "purple" }}>Model answers </span>  to know where you made a mistake</p>
                        </div>

                        <div className="card">
                            <p><span style={{ color: "purple" }}>Review </span>  your interview reports anytime</p>
                        </div>
                    </div>
                </div>

                <h2 style={{ marginTop: "8rem", fontSize: "1.75rem" }}>Start Your <span style={{ color: "purple" }}>Mock Interview</span> With Most Popular Concepts</h2>
                <div className="second-grid">
                    <div className="card-grid tall-cards">

                        <div className="card">
                            <FaDatabase size={40} />
                            <p>DBMS</p>
                        </div>

                        <div className="card">
                            <FaNetworkWired size={40} />
                            <p>Computer Networks</p>
                        </div>

                        <div className="card">
                            <FaTree size={40} />
                            <p>Data Structures and Algorithms</p>
                        </div>

                        <div className="card">
                            <FaCode size={40} />
                            <p>Web Development</p>
                        </div>

                        <div className="card">
                            <FaObjectGroup size={40} />
                            <p>Object Oriented Programming</p>
                        </div>

                        <div className="card">
                            <FaLaptop size={40} />
                            <p>Operating systems</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}






