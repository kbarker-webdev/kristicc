import React, { useState, useEffect } from "react";
import '../style/Login.css'

const { login } = require('../axios-services')

const Login = (props) => {
    const [username, setUsername] = [props.username, props.setUsername];
    const [password, setPassword] = [props.password, props.setPassword];
    const user = props.user;

    const logoutHandler = async (e) => {
        e.preventDefault();
		try {
			localStorage.removeItem('username');
			localStorage.removeItem('token');
			props.setUser({});
			window.location.reload(false);
		} catch (error) {
			throw error;
		}
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            let resp = await login(username, password);
            let token = resp.token;
            let userInfo = { username, token };
            if (!resp.token) {
                alert('Username or password incorrect');
            } else {
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
                props.setUser(userInfo);
            }
            setPassword('');
            setUsername('');
            window.location.reload(false);
        } catch (error) {
            throw error;
        }
    };

    return (
        <>
            {user.token ?
                <div>
                    <div className="background">
                        <div className="shape"></div>
                        <div className="shape"></div>
                    </div>
                    <form>
                        <h3>You are logged in as {user.username}</h3>
                        <button onClick={e => logoutHandler(e)}>Log Out</button>
                    </form>
                </div>
                :
                <div className="login">
                    <div className="background">
                        <div className="shape"></div>
                        <div className="shape"></div>
                    </div>
                    <form>
                        <h3>Login Here</h3>

                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Email or Phone" id="username" onChange={(e) => setUsername(e.target.value)} />

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />

                        <button onClick={e => submitHandler(e)}>Log In</button>
                        {/* <div className="social">
                            <div className="go"><i className="fab fa-google"></i>  Google</div>
                            <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                        </div> */}
                    </form>
                </div>
            }


        </>
    )
}

export default Login;