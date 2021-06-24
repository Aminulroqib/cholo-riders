import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email };
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });

    }
    // const handleBlur = (e) => {
    //     let isFormValid = true;
    //     if (e.target.name === 'email') {
    //         const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
    //     }
    //     if (e.target.name === 'password') {
    //         const isPasswordValid = e.value.target.length > 6;
    //         const passwordHasNumber = /\d{1}./.test(e.target.value);
    //         console.log(isPasswordValid && passwordHasNumber);
    //     }
    //     if (isFormValid) {
    //         const newUserInfo = { ...loggedInUser };
    //         newUserInfo[e.target.name] = e.target.value;
    //         setLoggedInUser(newUserInfo);
    //     }
    // }
    // const handleSignIn = () => {
    //     firebase.auth().signInWith(provider)
    //         .then(result => {
    //             const { displayName, photoURL, email } = result.user;
    //             const signedInUser = {
    //                 isSignedIn: true,
    //                 name: displayName,
    //                 photo: photoURL,
    //                 email: email,
    //             }
    //             console.log(displayName, photoURL, email);
    //             console.log(result);
    //             setLoggedInUser(signedInUser);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //             console.log(err.message);
    //         })
    // }
    // const handleSignOut = () => {
    //     firebase.auth().signOut()
    //         .then(result => {
    //             const signedOutUser = {
    //                 isSignedIn: false,
    //                 name: '',
    //                 photo: '',
    //                 email: '',
    //                 error: '',
    //                 success: false,
    //             }
    //             setLoggedInUser(signedOutUser);
    //         })
    //         .catch(err => {

    //         })
    // }
    // const handleSubmit = (e) => {
    //     if (loggedInUser.email && loggedInUser.password) {
    //         firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
    //             .then(res => {
    //                 const newUserInfo = { ...loggedInUser };
    //                 newUserInfo.error = '';
    //                 newUserInfo.success = true;
    //                 setLoggedInUser(newUserInfo)
    //                 console.log(res)
    //             })
    //             .catch(error => {
    //                 const newUserInfo = { ...loggedInUser };
    //                 newUserInfo.error = error.message;
    //                 newUserInfo.success = false;
    //                 setLoggedInUser(newUserInfo);
    //             });
    //         if (!newUser && loggedInUser.email && loggedInUser.password) {
    //             firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
    //                 .then(res => {
    //                     const newUserInfo = { ...loggedInUser };
    //                     newUserInfo.error = '';
    //                     newUserInfo.success = true;
    //                     setLoggedInUser(newUserInfo);
    //                     console.log(res);
    //                 })
    //                 .catch(error => {
    //                     const newUserInfo = { ...loggedInUser };
    //                     newUserInfo.error = error.message;
    //                     newUserInfo.success = false;
    //                     setLoggedInUser(newUserInfo);
    //                 });
    //         }
    //     }
    //     e.preventDefault();
    // }

    // const handleFbSignIn = () => {
    //     var fbProvider = new firebase.auth.FacebookAuthProvider();
    //     firebase
    //         .auth()
    //         .signInWithPopup(fbProvider)
    //         .then((result) => {
    //             /** @type {firebase.auth.OAuthCredential} */
    //             var credential = result.credential;

    //             // The signed-in user info.
    //             var user = result.user;

    //             // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //             var accessToken = credential.accessToken;

    //             // ...
    //         })
    //         .catch((error) => {
    //             // Handle Errors here.
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             // The email of the user's account used.
    //             var email = error.email;
    //             // The firebase.auth.AuthCredential type that was used.
    //             var credential = error.credential;

    //             // ...
    //         })
    // }
    const classes = useStyles();
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            // onBlur={handleBlur}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            // onBlur={handleBlur}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />

                        {/* {loggedInUser.isSignedIn ? <button onClick={handleSignOut}>Sign Out</button> : */}
                        <Button
                            //    onClick={handleSignIn}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        > Sign In </Button>
                        <div className='row' >
                            <Grid item>
                                <Link to='/signup'> Don't have an account? Sign Up </Link>
                            </Grid>
                        </div>
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <button className='btn btn-primary' onClick={handleGoogleSignIn}>Login with Google</button>
            </Container>

        </div>
    );
};

export default Login;