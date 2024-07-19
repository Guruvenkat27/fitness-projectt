import React from 'react'
import '../index.css'

const Navbar = () => {
  return (
    <>
      <nav className=' flex items-center justify-between z-10 fixed w-[100vw] h-[10vh] px-[90px]'>

<div  className='font-bold text-2xl'>LOGO</div>
<div className='flex items-center gap-20'>
<span >Home</span>
<span >About </span>
<span >Contact</span>
<span className='bg-green-600 w-[7vw] flex items-center justify-center h-[4vh] rounded-md shadow-md' >Signup/Login</span>

</div>
      </nav>



    </>
  )
}

export default Navbar
