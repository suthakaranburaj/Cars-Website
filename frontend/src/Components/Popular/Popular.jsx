import React from 'react'
import './Popular.css'
import Card from '../Card/Card.jsx'
import all_product from '../Assets/Category.js'
const Popular = () => {
  return (
    <div className='boy'>
    <div className='popular'>
      <h1>POPULAR CAR BRANDS</h1>
      <hr />
      <div className="popular-item">
        {all_product.map((item,index)=>{
            return <Card id={item.id} key={index} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div></div>
  )
}

export default Popular