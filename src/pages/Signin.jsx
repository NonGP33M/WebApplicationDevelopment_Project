import React from 'react'

function Signin() {
    return (
        <div className='flex-col'>
        <div className="flex w-full h-screen">
            <div className="hidden relative lg:flex w-1/3 items-center justify-center bg-gray-200">
                <img className='scale-125 pt-10' src={require('../img/homePic1.png')} alt='homePic1'/>
            </div>
            <div className="flex items-center justify-center lg:w-2/3">
                <div className=' w-12/12 max-w-[800px] px-20 pt-[65px]'>
                    <h1 className='text-3xl font-bold'>Sign in to [Title]</h1>
                    <div className='mt-10'>
                        <label className='text-1xl font-medium'>Username or Email Address</label>
                        <input 
                            className='bg-gray-200 w-full bordedr-2 border-gray-100 rounded-xl p-2 mt-2 text-1xl'
                            placeholder='Enter your username or Enter your email'
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='text-1xl font-medium'>Password</label>
                        <input
                            className='bg-gray-200 w-full bordedr-2 border-gray-100 rounded-xl p-2 mt-2 text-1xl'
                            placeholder='Enter your password'
                            type='password'
                        />
                    </div>
                    <div className='mt-10 flex flex-col gap-y-4'>
                        <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-black text-white font-bold text-1xl'>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
    )
}
export default Signin