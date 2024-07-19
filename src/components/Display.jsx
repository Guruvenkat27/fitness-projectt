import React from 'react'

const Display = () => {
  return (
    <>
      <div className='h-[100vh] relative'>
       <div className='absolute left-[10%] top-[30%] flex flex-col  '>
       <span className='font-bold text-[50px]  ' >WELCOME TO <span className='text-stroke-green '>FINESS BUDDY</span></span>
       <span className='font-bold'> Your Personal Fitness Companion</span>
<span className='w-[43vw] mt-3'>Transform your fitness journey with personalized workout plans designed to fit your lifestyle and goals. Whether you're aiming to build strength, lose weight, or improve endurance, our expertly crafted routines will guide you every step of the way.</span>

<span className='mt-5 text-lg'>Get started today and transform your fitness journey!</span>

<div className='mt-6'><button className='bg-green-600 w-[11vw] h-[5.3vh] text-[18px]'>Get Started</button></div>
       </div>

      </div>
    </>
  )
}

export default Display
