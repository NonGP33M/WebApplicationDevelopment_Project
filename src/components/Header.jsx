import React from 'react'

function Header() {
  return (
    <div className='container fixed z-50 bg-zinc-900 shadow flex justify-between w-full h-20 min-w-full items-center font-kanit drop-shadow-xl'>
        <div className='flex text-white mx-12 text-xl'>
          [Title]
        </div>

        {/* Before Signed In */}
        <div className='flex mx-12 text-white justify-between items-center'>
            <a className='mx-4 text-xl' href='/#'>Sign in</a>
            <a className='mx-4 text-xl rounded-lg border-2 py-1 px-2' href='/#'>Sign up</a>
        </div>

        {/* After Signed In */}
        {/* <div className='flex mx-12 text-white justify-between'>
            <a className='mx-4 text-xl' href='/#'>Home</a>
            <a className='mx-4 text-xl' href='/#'>Order</a>
            <a className='mx-4 text-xl' href='/#'>Scoreboard</a>
            <a className='mx-4 text-xl' href='/#'>[Username]</a>
        </div> */}
    </div>
  )
}

export default Header