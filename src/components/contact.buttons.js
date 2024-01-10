import React from 'react'
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa'

export default function ContactButtons() {
  return (
    <div className='hidden lg:block fixed bottom-0 left-0 w-full px-10'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col items-center gap-5'>
          <div className='flex flex-col gap-10 justify-center'>
            <a
              className='transform transition-all duration-300 hover:translate-y-[-5px]'
              href='https://linkedin.com/in/techsmartjsk'
            >
              <FaLinkedin color='white' fontSize={20} />
            </a>

            <a
              className='transform transition-all duration-300 hover:translate-y-[-5px] hover:text-[#64ffda]'
              href='https://github.com/techsmartjsk'
            >
              <FaGithub color='white' fontSize={20} />
            </a>
            <a
              className='transform transition-all duration-300 hover:translate-y-[-5px]'
              href='https://twitter.com/techsmartjsk'
            >
              <FaTwitter color='white' fontSize={20} />
            </a>
            <a
              className='transform transition-all duration-300 hover:translate-y-[-5px]'
              href='https://medium.com/@techsmartjsk'
            >
              <FaMedium color='white' fontSize={20} />
            </a>
          </div>
          <div className='border-l-2 border-white h-[100px]'></div>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <a
            href='mailto:techsmartjsk@gmail.com'
            className='transform transition-all duration-300 hover:translate-y-[-10px] text-white'
            style={{ writingMode: 'vertical-rl' }}
          >
            techsmartjsk@gmail.com
          </a>
          <div className='border-l-2 border-white h-[100px]'></div>
        </div>
      </div>
    </div>
  )
}
