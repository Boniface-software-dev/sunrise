import React from 'react'


export default function Services({items}){
return (
<section className="services">
<h2>Our Services</h2>
<p className="lead">We provide exceptional real estate services to help you find your perfect home.</p>
<div className="icons">
{items.map(s=> (
<div className="icon-card" key={s.id}>
<div style={{fontSize:40}}>🏠</div>
<h3>{s.title}</h3>
<p>{s.desc}</p>
</div>
))}
</div>
</section>
)
}