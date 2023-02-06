import './App.css';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Homescreen from './Homescreen';
import About from './About';
import Loginpage from './Loginpage';
import Notfound from './Notfound';
import SighnupScreen from './SighnupScreen';
import { auth } from './firebase';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Profilescreen from './Profilescreen';













function App() {

    const userfound = useSelector(state => state.user);

    const [user, setUser] = useState('');
    useEffect(() => {
            if (userfound === null || userfound === undefined) {
                setUser(null)
            } else {
                setUser(userfound.email)
            }
        }, [userfound]

    )






    const dispatch = useDispatch();
    useEffect(
        () => {
            const unsubscribe = auth.onAuthStateChanged((userauth) => {
                if (userauth) {
                    //logged in 
                    console.log(userauth);
                    dispatch({
                        type: "userfound",
                        payload: {
                            email: userauth.email,
                            uid: userauth.uid
                        }
                    })
                } else {
                    dispatch({ type: "usernotfound" })
                }
            });
            return unsubscribe;
        }, [dispatch]
    );







    return (


        <
        div className = 'app' >








        {!user ? ( <
                Loginpage / >
            ) : ( <
                BrowserRouter >
                <
                Routes >
                <
                Route path = '/'
                element = { < Homescreen / > }
                />

                <
                Route path = '/login'
                element = { < Loginpage / > }
                />

                <
                Route path = '/about'
                element = { < About / > }
                />

                <
                Route path = '*'
                element = { < Notfound / > }
                /> 

                <
                Route path = '/signin'
                element = { < SighnupScreen / > }
                /> <
                Route path = '/profile'
                element = { < Profilescreen / > }
                />

                <
                /Routes>

                <
                /BrowserRouter>
            )
        }





        <
        /div>


    );
}

export default App;