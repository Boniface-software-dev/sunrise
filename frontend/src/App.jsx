import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Hero from './components/Hero'
import Services from './components/Services'
import Featured from './components/Featured'

export default function App() {
  // 1. Initialize with empty arrays so the page loads without crashing
  const [services, setServices] = useState([])
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    // --- Fetch Services ---
    axios.get('/api/services')
      .then(r => {
        console.log("Services API response:", r.data); // Debugging: See what the API sends
        // 2. Safety Check: Only set state if it is an array
        if (Array.isArray(r.data)) {
          setServices(r.data)
        } else {
          console.error("API Error: Services data is not an array", r.data)
        }
      })
      .catch(e => console.error("Failed to fetch services:", e))

    // --- Fetch Featured Properties ---
    axios.get('/api/featured')
      .then(r => {
        console.log("Featured API response:", r.data); 
        if (Array.isArray(r.data)) {
          setFeatured(r.data)
        } else {
          console.error("API Error: Featured data is not an array", r.data)
        }
      })
      .catch(e => console.error("Failed to fetch featured:", e))
  }, [])

  return (
    <div>
      <Hero />
      <main>
        {/* Even if the API fails, passing 'services' (which is []) 
            will render an empty section instead of crashing.
        */}
        <Services items={services} />
        <Featured items={featured} />
      </main>
    </div>
  )
}