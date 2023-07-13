import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


export default function Footer() {
  return (
    <div>
  <div className='flex mt-5 cursor-pointer '>
  <FaInstagram className='text-white w-10 h-10 ml-4 transition-transform transform hover:-translate-y-2 hover:text-red-700'/>
  <FaFacebook className='text-white w-10 h-10 ml-4 transition-transform transform hover:-translate-y-2 hover:text-red-700' />
  <FaTwitter className='text-white w-10 h-10 ml-4 transition-transform transform hover:-translate-y-2 hover:text-red-700' />

  </div>



    </div>
  )
}
