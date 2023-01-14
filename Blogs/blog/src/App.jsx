import React from 'react'
import './App.css'

export default function App() {
  return (
    <>
      <div className='text-4xl text-center mt-[5vh]'>
        Our Latest Blogs
      </div>
      <div className='h-[100vh] w-[80vw] mx-auto  mt-[2vh] flex flex-col justify-center items-stretch'>
        <div className='flex justify-between'>
          <div className='w-[20vw] h-[45vh]  rounded-xl shadow-xl flex flex-col justify-around items-center'>
            <div className='h-2/4 w-11/12  text-center rounded-md imgur'>Image</div>
            <div className='mx-[1vw] text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate velit aliquam corrupti veritatis debitis assumenda, ex vitae? Nulla, earum corrupti!</div>
          </div>
          <div className='w-[20vw] h-[45vh] rounded-xl shadow-xl flex flex-col justify-around items-center'>
            <div className='h-2/4 w-11/12 text-center rounded-md imgur'>Image</div>
            <div className='mx-[1vw] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores aliquam repellendus eveniet molestiae tempore aperiam aspernatur ducimus quisquam totam.</div>
          </div>
          <div className='w-[20vw] h-[45vh] rounded-xl shadow-xl flex flex-col justify-around items-center'>
            <div className='h-2/4 w-11/12 text-center rounded-md imgur'>Image</div>
            <div className='mx-[1vw] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate repellendus inventore delectus suscipit eum, temporibus pariatur ipsam sit doloribus!</div>
          </div>
        </div>
        <div className='flex justify-between mt-[2vh]'>
          <div className='w-[20vw] h-[45vh] rounded-xl shadow-xl flex flex-col justify-around items-center'>
            <div className='h-2/4 w-11/12  text-center rounded-md imgur'>Image</div>
            <div className='mx-[1vw] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque id harum cupiditate odit facere quibusdam assumenda laudantium alias distinctio rerum?</div>
          </div>
          <div className='w-[20vw] h-[45vh] rounded-xl shadow-xl flex flex-col justify-around items-center'>
            <div className='h-2/4 w-11/12 text-center rounded-md imgur'>Image</div>
            <div className='mx-[1vw] text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed illum, deserunt tempora nesciunt alias itaque beatae aperiam at numquam nostrum.</div>
          </div>
          <div className='w-[20vw] h-[45vh] rounded-xl shadow-xl flex flex-col justify-around items-center'>
            <div className='h-2/4 w-11/12  text-center rounded-md imgur'>Image</div>
            <div className='mx-[1vw] text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, libero asperiores perferendis a necessitatibus odio neque rem facere nostrum porro?</div>
          </div>
        </div>
      </div>
    </>
  )
}
