import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
const Footer = () => {
  return (
    <footer className='w-full pt-10 pb-10 relative overflow-hidden' id="contact">
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50'
            />
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw] -mt-10 text-white'>
                Contact <span className='text-purple'>Me</span>
            </h1> 
            <a href="mailto:khuranaakshat33@gmail.com" target='_blank'>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        <div className='flex items-center gap-6 mt-8'>
        {socialMedia.map((profile) => (
  <a
    key={profile.id}
    href={profile.link}
    target="_blank"
    rel="noopener noreferrer"
    className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
  >
    <img src={profile.img} alt="profile.id" width={30} height={30} />
  </a>
))}

        </div>
      </div>
      <div className='flex mt-16 ml-10'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2025 Akshat Khurana
        </p>
      </div>
    </footer>
  )
}

export default Footer
