import { useState } from 'react'
import './reset.css'
import FluffItem from './FluffItem.tsx'
import placehold from './assets/placehold.jpg'
import item1 from './assets/item1.jpg'
import item2 from './assets/item2.jpg'
import item3 from './assets/item3.jpg'

function Landing() {
  return (
    <div>
      <img src={placehold} className='w-full pt-15 pb-4'/>
      <div className='flex flex-col gap-1 cursor-default'>
        <h1 className='text-3xl text-yellow-400 font-bold'>Best Sellers</h1>
        <p className='text-lime-400'>Adopt them while you can!</p>
      </div>
      <div className='flex gap-5 items-center justify-center pb-5 pt-5'>
        <FluffItem image={item1} />
        <FluffItem image={item2} />
        <FluffItem image={item3} />
      </div>
    </div>
  )
}

export default Landing
