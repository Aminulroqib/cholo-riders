import React from 'react';
import { Link, Router } from 'react-router-dom';

const Sidebar = () => {
    return (
        <section>
            <div className="sidebar d-flex flex-column justify-content-between col-md-3 mx-5 py-5 px-4" style={{ height: "100vh" }}>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Pick From</label>
                        <input type="email" class="form-control" placeholder="Mirpur"/>
                    </div>
                        
                        <br/>
                        <div class="form-group">
                        <label for="exampleInputEmail1">Pick To</label>
                        <input type="email" class="form-control" placeholder="Agrabad"/>
                    </div>
                    <br/>
                    <button type="submit" class="btn btn-primary">Search</button>
                </form>
                        </div>
        </section>
                    );
};

                    export default Sidebar;