import React from 'react';
import './Home.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Frame from '../../images/Frame.png'
import Frame1 from '../../images/Frame-1.png'
import Frame2 from '../../images/Frame-2.png'
import Group from '../../images/Group.png'
import Destination from '../Destination/Destination';

const Home = () => {

    const vehicles = [
        {
            vehicleType: 'Bike',
            description: 'Make your trip via Bike',
            img: {Frame}

        },
        {
            vehicleType: 'Bus',
            description: 'Make your trip via Bus'

        },
        {
            vehicleType: 'Car',
            description: 'Make your trip via Car'

        },
        {
            vehicleType: 'Train',
            description: 'Make your trip via Train'

        }
    ]

    return (
        <div className="home">
            <Card className="card">
                <CardActionArea>
                    <CardMedia/>
                    <CardContent >
                        <img className='card-img' src={Frame} alt=''/>
                    </CardContent>
                    <h1 className="tagline">Bike</h1>
                </CardActionArea>
            </Card>
            <Card className="card">
                <CardActionArea>
                    <CardMedia/>
                    <CardContent >
                        <img className='card-img' src={Frame1} alt=''/>
                    </CardContent>
                    <h1 className="tagline">Bus</h1>
                </CardActionArea>
            </Card>
            <Card className="card">
                <CardActionArea>
                    <CardMedia/>
                    <CardContent >
                        <img className='card-img' src={Frame2} alt=''/>
                    </CardContent>
                    <h1 className="tagline">Car</h1>
                </CardActionArea>
            </Card>
            <Card className="card">
                <CardActionArea>
                    <CardMedia/>
                    <CardContent >
                        <img className='card-img' src={Group} alt=''/>
                    </CardContent>
                    <h1 className="tagline">Train</h1>
                </CardActionArea>
            </Card>

           {/* <div>
           {
                vehicles.map(vehicle => <Destination key={vehicle.vehicleType} vehicle={vehicle}></Destination>)
            }
           </div> */}

        </div>




    );
};

export default Home;