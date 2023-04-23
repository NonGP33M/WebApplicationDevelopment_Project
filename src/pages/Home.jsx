import React from 'react'

function Home() {
  return (
    <div className='flex-col'>
        <div className='relative flex flex-wrap h-screen items-center justify-center font-kanit caret-transparent'>
            <div className='text-center my-28  drop-shadow-md'>
                <p className='text-[4rem]'>จะกินอะไรก็สั่งมา</p>
                <p className='text-[2rem]'>- ไอ้พวกเวร -</p>
            </div>

            <div className='w-[500px] right-[50px] rotate-[25deg]'>
                <img src={require('../img/homePic1.png')} alt='homePic1'/>
            </div> 

        </div>

        <div className='relative flex h-screen w-full bg-zinc-800 justify-center'>
            <div className='text-center text-white font-kanit caret-transparent mt-28'>
                    <p className='text-[4rem]'>จัดทำโดย</p>
                    <p className='text-[2rem]'>- ไอ้พวกเวร -</p>
                </div>
            </div>
    </div>
  )
}

export default Home