import React from 'react'
import Modalka from './components/Modalka';
import Btns from './components/Btns';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import logo from './logo.png';
import { Link, Outlet } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, Telegram, Twitter, YouTube } from '@mui/icons-material';


function Layout() {
  return (
    <div className='container m-auto'>
        <nav className='flex items-center justify-evenly py-8 container m-auto'>
              <section className='px-20'>
                <img src={logo} className='max-w-[100px]' />
              </section>
              <section className='px-5 space-x-3 hidden md:block'>
                <Link to="/">Main</Link>
                <Link to="/coursepage">Courses</Link>
                <Link to="/eventspage">Events</Link>
                <Link to="/blog">Blog</Link>
              </section>
              <section className='px-5 space-x-3 hidden md:block'>
                <Btns title='Get consultation'/>
                <span><Person2OutlinedIcon/>Log in / Register</span>
              </section>
              <section className='block md:hidden pr-[5vh]'>
                  <Modalka/>
              </section>
        </nav>
        <Outlet/>
        <footer className='py-20 px-20 md:flex text-center space-y-5 bg-[#1E212C] container m-auto'>
            <section className='text-white space-y-5'>
                  <p className='text-[35px] font-bold'>CREATX</p>
                  <p className='py-5'>
                  Createx Online School is a leader in online studying. <br />
                  We have lots of courses and programs from the main <br />
                  market experts. We provide relevant approaches to <br />
                  online learning, internships and employment in the <br />
                  largest companies in the country. 
                  </p>
                  <span className='space-x-5 py-5'>
                    <Facebook/> <Twitter/> <YouTube/> <Telegram/> <Instagram/> <LinkedIn/> 
                  </span>
            </section>
            <section className='lg:px-20  text-white text-[25px] space-y-3'>
                <p className='text-[20px] font-semibold'>SITE MAP</p>
                <p className='text-16px text-[#887b7b]' >About Us</p>
                <p className='text-16px text-[#887b7b]' >Courses</p>
                <p className='text-16px text-[#887b7b]' >Events</p>
                <p className='text-16px text-[#887b7b]' >Blog</p>
                <p className='text-16px text-[#887b7b]' >Contacts</p>
            </section>
            <section className='lg:px-20  text-white text-[25px] space-y-3'>
                <p className='text-[20px] font-semibold'>COURSES</p>
                <p className='text-16px text-[#887b7b]'>Marketing</p>
                <p className='text-16px text-[#887b7b]'>Management</p>
                <p className='text-16px text-[#887b7b]'>HR & Recruting</p>
                <p className='text-16px text-[#887b7b]'>Design</p>
                <p className='text-16px text-[#887b7b]'>Development</p>
            </section>
            <section className='lg:px-20  text-white text-[25px] space-y-3'>
              <p className='text-[20px] font-semibold'>CONTACT US</p>
                <p className='text-16px text-[#887b7b]'>(405) 555-0128</p>
              <p className='text-16px text-[#887b7b]'>hello@createx.com</p>

            </section>
        </footer>
    </div>
  )
}

export default Layout