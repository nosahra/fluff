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
      <img src={placehold} className='w-full pt-15 mb-4 bg-yellow-200'/>
      <div className='flex flex-col gap-1 cursor-default'>
        <h1 className='text-3xl text-yellow-400 font-bold'>Best Sellers</h1>
        <p className='text-lime-400'>Get them while you can!</p>
      </div>
      <div className='flex gap-10 items-center justify-between p-5 pl-20 pr-20'>
        <FluffItem image={item1} rank='border-amber-300' />
        <FluffItem image={item2} rank='border-slate-300' />
        <FluffItem image={item3} rank='border-stone-400' />
      </div>
    </div>
  )
}

export default Landing
