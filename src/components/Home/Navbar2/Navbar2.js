import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const Navbar2 = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                            <Link class="nav-link ms-3" to='/'><h2>Cholo Riders</h2></Link>
                    <ul class="navbar-nav ms-auto mx-5 px-5">
                        <li class="nav-item">
                            <Link class="nav-link active ms-3" aria-current="page"to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-3" to='/destination'>Destination</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-3" to='/blog'>Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-3" href="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                        <h6 class="nav-link ms-3">{loggedInUser.name}</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar2;