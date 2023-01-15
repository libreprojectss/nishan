import React from 'react';
import './App.css';
import { FaRecycle } from 'react-icons/fa';
import { FcReuse } from 'react-icons/fc';
import { TbArrowsMinimize } from 'react-icons/tb';
import { GoPerson } from 'react-icons/go';
import { MdEmojiEvents } from 'react-icons/md';
import { FaDonate } from 'react-icons/fa';


export default function App() {
  const a = [1, 2, 3]
  return (
    <>
      <div className=' text-white h-screen flex flex-col justify-center theme'>
        <div className='ml-[8vw] text-[4vw]  mb-[40vh]'>
          
        </div>
        <div className='text-[4vw] ml-[8vw]'>
          Small Approach To A Bigger Change
        </div>
        <div className='text-[2vw] ml-[8vw]'>
          Contribute to a Sustainable World from your Fingertips
        </div>
        <div>
          <button className=' mt-5 rounded-xl p-4 bg-blue-500 ml-[8vw] text-xl font-semibold'>
            Let's Get Started
          </button>
        </div>
      </div>
      <div className='h-screen px-[8vw] py-[12vh] '>
        <div className=' h-[75vh] flex justify-between items-center '>
          <div className='h-[60vh] w-[25vw] rounded-3xl shadow-lg flex flex-col items-center bg-slate-200'>
            <div className='h-[25vh] w-[22vw] mx-auto rounded-xl text-center imgur1 mt-5'></div>
            <div className=' my-[2vh] text-justify mx-6'>According to the Global E-waste Monitor 2020, which said a record 53.6 million tonnes of e-waste was generated globally in 2019, Nepal produced 28 metric kilotons of e-waste in the same year. The same report said that as global e-waste volumes have increased by 21 percent in the past five years, an average Nepali generated 900gm of e-waste in 2019.</div>
          </div>
          <div className='h-[60vh] w-[25vw] rounded-3xl shadow-lg flex flex-col items-center bg-slate-200'>
            <div className='h-[25vh] w-[22vw] mx-auto  rounded-xl text-center imgur2 mt-5'></div>
            <div className=' my-[2vh] text-justify mx-6'>The unsafe handling of used electronic devices and e-waste can lead to serious harm to human health as such practices can expose people to high levels of contaminants such as lead, mercury, cadmium, and arsenic, leading to irreversible health effects, including cancers, miscarriages, neurological damage etc. according to the Agency of the US.</div>
          </div>
          <div className='h-[60vh] w-[25vw] rounded-3xl shadow-lg flex flex-col items-center bg-slate-200'>
            <div className='h-[25vh] w-[22vw] mx-auto  rounded-xl text-center imgur3 mt-5'></div>
            <div className='my-[2vh]  text-justify mx-6'>According to the Global E-waste Monitor 2020, released by International Telecommunication Union and International Solid Waste Association, raw materials in the global e-waste generated in 2019 were worth approximately $57 billion. Iron, copper, and gold contribute mostly to this value.</div>
          </div>
        </div>
      </div>
      <div className='h-screen'>
        <div className='mb-[5vh] text-[4vw] text-center'>
          Our Services
        </div>
        <div className='flex justify-between px-[8vw] mt-[5vh]'>
          <div className='h-[70vh] w-[22.5vw] rounded-3xl bg-slate-200 shadow-xl flex flex-col justify-evenly items-center'>
            <div className=''><TbArrowsMinimize style={{ "fontSize": "8vw" }} /></div>
            <div className=' text-3xl font-bold'>Reduce</div>
            <div className='text-justify w-11/12'>
              <p className='font-bold text-xl'>Reduce the amount of waste you produce.</p>
              <p>We will be organizing different  e-waste awarness  programmes by collaborating from local to government level.People can also express their views through blogs</p>
            </div>
          </div>
          <div className='h-[70vh] w-[22.5vw] rounded-3xl bg-slate-200 shadow-xl flex flex-col justify-evenly items-center'>
            <div className=''><FcReuse style={{ "fontSize": "8vw" }} /></div>
            <div className=' text-3xl font-bold'>Reuse</div>
            <div className='text-justify w-11/12'>
              <p className='font-bold text-xl'>
                Reuse items as much as you can before replacing them.
              </p>
              <p>We also  provide you the opportunity to sell your used items in second hand so that the electronic items can be reused if someone buys your item.</p>
            </div>
          </div>
          <div className='h-[70vh] w-[22.5vw] rounded-3xl bg-slate-200 shadow-xl flex flex-col justify-evenly items-center'>
            <div className=''><FaRecycle style={{ "fontSize": "8vw" }} /></div>
            <div className=' text-3xl font-bold'>Recycle</div>
            <div className='text-justify w-11/12'>
              <p className='font-bold text-xl'>Recyle items wherever as much  possible.</p>
              <p>Our app mainly focus on recycling e-wastes.You can upload e-waste in our app and our team will collect all the wastes to recycle.You can also get rewarded for this. </p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-screen'>
        <div className=' mb-[5vh] text-[4vw] text-center'>
          Our Donation Program
        </div>
        <div className='mb-[5vh] text-[1.5vw] text-center px-[8vw]'>
          We aim to help many needy people of our country through our donation program by collaborating with different charity organizations. Your trash might be a treasure for those needy people.
        </div>
        <div className='text-[2vw] text-center font-semibold'>
          Here are our top donors:
        </div>
        <div className='flex justify-between px-[8vw] mt-[5vh]'>
          <div className='h-[40vh] w-[20vw] rounded-3xl bg-slate-200 shadow-xl flex flex-col items-center'>
            <div className='h-[22vh] w-[17vw] mx-auto rounded-xl text-center im1 mt-5'></div>
            <div className='font-bold text-2xl mt-[3vh]'>Mrs. Beauty</div>
          </div>
          <div className='h-[40vh] w-[20vw] rounded-3xl bg-slate-200 shadow-xl flex flex-col items-center'>
            <div className='h-[22vh] w-[17vw] mx-auto rounded-xl text-center im2 mt-5'></div>
            <div className='font-bold text-2xl mt-[3vh]'>Mr. Handsome</div>
          </div>
          <div className='h-[40vh] w-[20vw] rounded-3xl bg-slate-200 shadow-xl flex flex-col  items-center'>
            <div className='h-[22vh] w-[17vw] mx-auto rounded-xl text-center im3 mt-5'></div>
            <div className='font-bold text-2xl mt-[3vh]'>Mr. Musk</div>
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
              <div className=' text-4xl text-yellow-400 font-bold my-[3vh]'>5550</div>
              <div className=' text-3xl text-white my-[3vh]'>Items Recycled</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className=' text-white text-3xl font-bold my-[3vh]'><FaDonate style={{ "fontSize": "6vw" }} /></div>
              <div className=' text-4xl text-yellow-400 font-bold my-[3vh]'>550</div>
              <div className=' text-3xl text-white my-[3vh]'>Items Donated</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className=' text-white text-3xl font-bold my-[3vh]'><MdEmojiEvents style={{ "fontSize": "6vw" }} /></div>
              <div className=' text-4xl text-yellow-400 font-bold my-[3vh]'>50</div>
              <div className=' text-3xl text-white my-[3vh]'>Events Organized</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

