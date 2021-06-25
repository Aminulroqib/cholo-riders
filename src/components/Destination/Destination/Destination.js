import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import Navbar2 from '../../Home/Navbar2/Navbar2'
import Map from'../../../images/Map.png'

const Destination = () => {
    return (
        <section className="container-fluid row">
            <Navbar2></Navbar2>
            <div className="col-md-4">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-6">
                <img style={{width:'600px'}} src={Map} alt="" />

            </div>
        </section>
    );
};

export default Destination;