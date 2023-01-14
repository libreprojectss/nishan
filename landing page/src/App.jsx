import React from 'react';
import './App.css';
import { FaRecycle } from 'react-icons/fa';
import { FcReuse } from 'react-icons/fc';
import { TbArrowsMinimize } from 'react-icons/tb';
import { GoPerson } from 'react-icons/go';
import { MdEmojiEvents } from 'react-icons/md';
import { FaDonate } from 'react-icons/fa';


export default function App() {
  return (
    <>
      <div className=' text-white h-screen flex flex-col justify-evenly theme'>
        <div className='ml-[8vw] text-[4vw]  mb-[40vh]'>
          EAEW
        </div>
        <div className='text-[4vw] ml-[8vw]'>
          Small Approach To A Bigger Change
        </div>
        <div className='text-[2vw] ml-[8vw]'>
          Contribute to a Sustainable World from your Fingertips
        </div>
        <div>
          <button className=' mt-5 rounded-xl p-4 bg-blue-500 ml-[8vw]'>
            Let's Get Started
          </button>
        </div>
      </div>
      <div className='h-screen px-[8vw] py-[12vh]'>
        <div className=' h-[75vh] flex justify-between items-center'>
          <div className='h-[60vh] w-[20vw] rounded-3xl shadow-lg flex flex-col items-center'>
            <div className='h-[25vh] w-[17vw] mx-auto rounded-xl text-center imgur'>Image</div>
            <div className=' my-[2vh] text-justify mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi nam expedita veniam numquam natus, perferendis iusto debitis cum doloribus, voluptas provident sint nemo. Quibusdam earum molestias perferendis hic totam.</div>
          </div>
          <div className='h-[60vh] w-[20vw] rounded-3xl shadow-lg flex flex-col items-center'>
            <div className='h-[25vh] w-[17vw] mx-auto  rounded-xl text-center imgur'>Image</div>
            <div className=' my-[2vh] text-justify mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim hic consequuntur dolorum facere perspiciatis quos ratione nulla nisi aliquid distinctio, quas repudiandae non minus deleniti fuga placeat tempora itaque?</div>
          </div>
          <div className='h-[60vh] w-[20vw] rounded-3xl shadow-lg flex flex-col items-center'>
            <div className='h-[25vh] w-[17vw] mx-auto  rounded-xl text-center imgur'>Image</div>
            <div className='my-[2vh]  text-justify mx-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ipsam voluptatum voluptatem laudantium! Itaque corrupti fuga nobis eum esse, nostrum deleniti tenetur sint necessitatibus totam veniam neque perferendis eligendi nulla.</div>
          </div>
        </div>
      </div>
      <div className='h-screen'>
        <div className='mb-[5vh] text-[4vw] text-center'>
          Our Services
        </div>
        <div className='flex justify-between px-[8vw] mt-[5vh]'>
          <div className='h-[70vh] w-[22.5vw] rounded-3xl bg-slate-200 shadow-xl flex flex-col justify-evenly items-center'>
            <div className=''><FcReuse style={{ "fontSize": "8vw" }} /></div>
            <div className=' text-3xl font-bold'>Reuse</div>
            <div className='text-justify w-11/12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum incidunt nulla repellendus. Sequi recusandae tempore debitis quo cum, asperiores, magnam non fugit deserunt est ab dolorem. Aspernatur delectus exercitationem deleniti.</div>
          </div>
          <div className='h-[70vh] w-[22.5vw] rounded-3xl bg-slate-200 shadow-xl flex flex-col justify-evenly items-center'>
            <div className=''><FaRecycle style={{ "fontSize": "8vw" }} /></div>
            <div className=' text-3xl font-bold'>Recycle</div>
            <div className='text-justify w-11/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat facilis velit vitae itaque eveniet optio at non impedit voluptate beatae blanditiis, animi sint cumque quas quis modi eos! Velit.</div>
          </div>
          <div className='h-[70vh] w-[22.5vw] rounded-3xl bg-slate-200 shadow-xl flex flex-col justify-evenly items-center'>
            <div className=''><TbArrowsMinimize style={{ "fontSize": "8vw" }} /></div>
            <div className=' text-3xl font-bold'>Reduce</div>
            <div className='text-justify w-11/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio tempore blanditiis accusantium cupiditate dicta laboriosam! Ex ea labore hic odit at. Dolorem dicta nesciunt blanditiis laborum, voluptatibus explicabo voluptate.</div>
          </div>
        </div>
      </div>
      <div className='h-screen'>
        <div className=' mb-[5vh] text-[4vw] text-center'>
          Our Donation Program
        </div>
        <div className='mb-[5vh] text-[2vw] text-center px-[8vw]'>
          We aim to help many needy people of our country through our donation program by collaborating with different charity organizations. Your trash might be a treasure for those needy people.
        </div>
        <div className='text-[2vw] text-center'>
          Here are our top donors
        </div>
        <div className='flex justify-between px-[8vw] mt-[5vh]'>
          <div className='h-[40vh] w-[20vw] rounded-3xl bg-slate-200 shadow-xl flex flex-col justify-evenly items-center'>
            <div className=''><GoPerson style={{ "fontSize": "6vw" }} /></div>
            <div className='font-bold text-2xl'>Mr XYZ XYZ</div>
          </div>
          <div className='h-[40vh] w-[20vw] rounded-3xl bg-slate-200 shadow-xl flex flex-col justify-evenly items-center'>
            <div className=''><GoPerson style={{ "fontSize": "6vw" }} /></div>
            <div className='font-bold text-2xl'>Mr XYZ XYZ</div>
          </div>
          <div className='h-[40vh] w-[20vw] rounded-3xl bg-slate-200 shadow-xl flex flex-col justify-evenly items-center'>
            <div className=''><GoPerson style={{ "fontSize": "6vw" }} /></div>
            <div className='font-bold text-2xl'>Mr XYZ XYZ</div>
          </div>
        </div>
      </div>
      <div className='h-screen'>
        <div className='text-center text-[4vw]'>
          Our Acheivement
        </div>
        <div className='mx-[8vw] theme1 rounded-3xl shadow-lg'>
          <div className='h-[60vh] mt-[6vh] flex justify-around items-center'>
            <div className='flex flex-col items-center'>
              <div className=' text-white text-3xl font-bold my-[3vh]'><FaRecycle style={{ "fontSize": "6vw" }} /></div>
              <div className=' text-4xl text-yellow-400 font-bold my-[3vh]'>12345</div>
              <div className=' text-3xl text-white my-[3vh]'>Items Recycled</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className=' text-white text-3xl font-bold my-[3vh]'><FaDonate style={{ "fontSize": "6vw" }} /></div>
              <div className=' text-4xl text-yellow-400 font-bold my-[3vh]'>12345</div>
              <div className=' text-3xl text-white my-[3vh]'>Items Donated</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className=' text-white text-3xl font-bold my-[3vh]'><MdEmojiEvents style={{ "fontSize": "6vw" }} /></div>
              <div className=' text-4xl text-yellow-400 font-bold my-[3vh]'>12345</div>
              <div className=' text-3xl text-white my-[3vh]'>Events Organized</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

