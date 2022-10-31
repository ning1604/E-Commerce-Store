import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="main-content">
            <div className="home-section-one">
                <h1 className="main-heading">Deterre.</h1>
                <Link to="/shop" className="shop-btn">Shop Now</Link>
                <i className="fa-solid fa-arrow-down fa-7x"></i>
            </div>
            <div className="home-section-two">
                <div className="section-content">
                    <h2 className="sub-header">
                        Sustainable
                    </h2>
                    <div className="content-container">
                        <p className="position-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui. Vestibulum finibus venenatis purus vitae tincidunt.
                        </p>
                        <div className="image-container">
                            <img src="images/sustainableImage.jpg" alt="woman with sunglasses standing outdoor during daytime" className="home-images"></img>
                            <div className="content-number number-position-one">
                                1.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    <h2 className="sub-header">
                        Durable
                    </h2>
                    <div className="content-container">
                        <div className="image-container">
                            <img src="images/durableImage.jpg" alt="woman with sunglasses standing outdoor during daytime" className="home-images"></img>
                            <div className="content-number number-position-two">
                                2.
                            </div>
                        </div>
                        <p className="position-right">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.
                        </p>
                    </div>
                </div>
                <div className="section-content">
                    <h2 className="sub-header">
                        Ethical
                    </h2>
                    <div className="content-container">
                        <p className="position-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui. Vestibulum finibus venenatis purus vitae tincidunt. Aenean vel lacinia arcu. Donec bibendum purus non nunc maximus, in tincidunt magna mollis.
                        </p>
                        <div className="image-container">
                            <img src="images/ethicalImage.jpg" alt="woman with sunglasses standing outdoor during daytime" className="home-images"></img>
                            <div className="content-number number-position-three">
                                3.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
