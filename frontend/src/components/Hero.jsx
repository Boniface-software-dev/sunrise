import React from 'react'


export default function Hero(){
// We will use the uploaded image path for local testing.
const heroPath = '/assets/hero.jpg' // frontend/public/assets/hero.jpg


return (
<header className="hero">
<img className="hero-bg" src={heroPath} alt="Sunrise" />
<nav className="topnav">
<a href="#">Home</a>
<a href="#">About</a>
<a href="#properties">Properties</a>
<a href="#contact">Contact</a>
</nav>
<div className="hero-content">
<h1>SUNRISE HOMES LIMITED</h1>
<p className="sub">Your Dream Home Awaits</p>
<a className="cta" href="#properties">Get Started</a>
</div>
</header>
)
}