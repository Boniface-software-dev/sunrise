import React from 'react'


export default function 
Featured({items}){
return (
<section id="properties" className="featured">
<h2>Featured Properties</h2>
<div className="grid">
{items.map(it => (
<div className="card" key={it.id}>
<img src={it.image} alt={it.title} />
<h4>{it.title}</h4>
</div>
))}
</div>
</section>
)
}