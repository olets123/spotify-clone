import React from 'react'
import './Login.css'
import { accessUrl } from './spotify'

function Login() {
    return (
        <div className="login">
            <img
            src="https://www.midiaresearch.com/storage/uploads/blog/images/2019/02/Spotify_Logo_RGB_Green.png"
            alt="logo"
             />
             <small>React Spotify Clone 2020</small>
             <a href={accessUrl }>LOGIN WITH SPOTIFY</a>
             <p>Created and styled by Ole Thomas Skogli - 2020</p>
        </div>
    )
}

export default Login
