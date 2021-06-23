import React from 'react';
import { Link } from 'react-router-dom';
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



const Vehicles = () => {
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
                <Link class="nav-link ms-3" to='/destination'><span><h1 className='text-secondary'>Bike</h1></span></Link>
            </CardActionArea>
        </Card>
        <Card className="card">
            <CardActionArea>
                <CardMedia/>
                <CardContent >
                    <img className='card-img' src={Frame1} alt=''/>
                </CardContent>
                <Link class="nav-link ms-3" to='/destination'><span><h1 className='text-secondary'>Bus</h1></span></Link>
            </CardActionArea>
        </Card>
        <Card className="card">
            <CardActionArea>
                <CardMedia/>
                <CardContent >
                    <img className='card-img' src={Frame2} alt=''/>
                </CardContent>
                <Link class="nav-link ms-3" to='/destination'><span><h1 className='text-secondary'>Car</h1></span></Link>
            </CardActionArea>
        </Card>
        <Card className="card">
            <CardActionArea>
                <CardMedia/>
                <CardContent >
                    <img className='card-img' src={Group} alt=''/>
                </CardContent>
                <Link class="nav-link ms-3" to='/destination'><span><h1 className='text-secondary'>Train</h1></span></Link>
            </CardActionArea>
        </Card>
        </div>
    );
};

export default Vehicles;