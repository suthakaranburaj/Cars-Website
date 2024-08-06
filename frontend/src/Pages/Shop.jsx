import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import Newsletter from '../Components/Newsletter/Newsletter'
// import LoginSignup from './LoginSignup'
const Shop = () => {
  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/popularinwomen') 
            .then((res) => res.json()) 
            .then((data) => setPopular(data))
    fetch('http://localhost:4000/newcollections') 
            .then((res) => res.json()) 
            .then((data) => setNewCollection(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])
  return (
    <div>
     {/* <LoginSignup/> */}
    <Hero></Hero>
    <Popular data={popular}/>
    
    <NewCollections data={newcollection}/>
    <Newsletter/>
    
   
    </div>
  )
}

export default Shop
