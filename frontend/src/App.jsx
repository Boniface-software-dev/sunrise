import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Hero from './components/Hero'
import Services from './components/Services'
import Featured from './components/Featured'


export default function App(){
const [services, setServices] = useState([])
const [featured, setFeatured] = useState([])


useEffect(()=>{
axios.get('/api/services')
.then(r=>setServices(r.data))
.catch(e=>console.error(e))


axios.get('/api/featured')
.then(r=>setFeatured(r.data))
.catch(e=>console.error(e))
}, [])


return (
<div>
<Hero />
<main>
<Services items={services} />
<Featured items={featured} />
</main>
</div>
)
}