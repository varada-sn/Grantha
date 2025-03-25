import { Divider } from '@mui/material'
import React from 'react'
import { CartItem } from './CartItem'

const items=[1,1]

export const Cart = () => {
  return (
    <div>
        <main className='lg:flex justify-between'>
            <section className='lg:w-[55%] w-[90%] space-y-6 min-h-[300px] pt-10 bg-gray-800 border border-gray-700 shadow-lg rounded-lg p-6 mx-auto mt-6'>
                {items.map((item) => (
                    <CartItem/>
                ))}
            </section>
            <Divider/>
            
            <div className='lg:w-[35%] w-[90%] billDetails px-4 text-sm bg-gray-800 border border-gray-700 shadow-lg rounded-lg p-6 mx-auto mt-6'>
                <p className='font-extralight py-5'>Bill Details</p>
                <div className='space-y-3'>
                    <div className='flex justify-between text-gray-400'>
                        <p>Item Total</p>
                        <p>Rs.99</p>
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p>Delivery charge</p>
                        <p>Rs.19</p>
                    </div>
                    <Divider/>
                    <div className='flex justify-between text-gray-400'>
                        <p>Total amount</p>
                        <p>Rs.128</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
