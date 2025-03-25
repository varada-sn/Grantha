import React from 'react'

export const CartItem = () => {
  return (
    <div className='px-5'>
        <div className='lg:flex items-centre lg:space-x-5'>
            <div>
                <img className='w-[5rem] h-[5rem] object-cover' src="https://m.media-amazon.com/images/I/51ibv4eCmwL._SL500_.jpg" alt="" />
            </div>
            <div className='flex items-center justify-between lg:w-[70%]'>
                <div className='space-y-1 lg:space-y-3 w-full'>
                    <p>Full- Stack React Projects</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-1'>
                            <p>Rs.499</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
