import React from 'react';
import './Login.css'
import { Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }

    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='Your Email'/>
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john <Link to='/register'>Create Account</Link></p>
                <div>----------Or---------</div>
                <button 
                    className='btn-regular' 
                    onClick={handleGoogleLogin}
                    >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;