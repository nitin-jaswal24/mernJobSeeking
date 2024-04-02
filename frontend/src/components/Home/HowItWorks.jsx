import React from 'react'
import { FaUserPlus} from 'react-icons/fa'
import {MdFindInPage} from 'react-icons/md'
import {IoMdSend} from 'react-icons/io'
const HowItWorks = () => {
  return (
    <div className='howitworks'>
      <div className="container">
        <h3>How carrerNest works.</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p className='font-serif'>Create Account</p>
            <p className='font-serif'>Experience seamless registration on our website! Create a personalized account effortlessly. Enter your details, and you're set. Enjoy exclusive features with just a few clicks. Join us today!</p>
          </div>
          <div className="card" >
            <MdFindInPage/>
            <p className='font-serif'>Find a Job/Post A Job</p>
            <p className='font-serif ' style={{'color':'white'}}>Discover your dream job effortlessly with our platform. Effortlessly browse through diverse opportunities, connect with employers, and apply seamlessly. Your next career move is just a click away. Explore now!</p>
          </div>
          <div className="card">
            <IoMdSend/>
            <p className='font-serif'>Apply Job</p>
            <p className='font-serif'>Elevate your career by applying for your ideal job through our user-friendly platform. Effortlessly navigate through diverse opportunities and submit applications with ease. Your next career step awaits – apply now!</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HowItWorks
