import React from 'react'
import Btns from './components/Btns';
import Modalka from './components/Modalka';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.png';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.png';
import photo4 from './assets/photo4.png';
import logo from './assets/logo.png';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Facebook, Instagram, LinkedIn, Telegram, Twitter, YouTube } from '@mui/icons-material';

function Blog() {
  return (
    <div className='container m-auto'>
            <body className='py-20 px-20 container m-auto'>
                  <section className='py-10 text-center'>
                      <p className='text-[25px]  font-semibold'>Our blog</p>
                      <p className='text-[40px]  font-bold'>Createx School Journal</p>
                  </section>
                  <section className='md:flex flex-wrap md:px-10  gap-5'>
                      <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image8} className='w-full' />
                          </section>
                          <section className="py-5  m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
                      </section>

                      <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image7} className='w-full' />
                          </section>
                          <section className="py-5 m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
                      </section>

                      <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image6} className='w-full' />
                          </section>
                          <section className="py-5 px-5 m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
                      </section>
                  </section>
                  <section className='md:flex py-20 gap-10 md:px-10'>
                        <section>
                          <section className="md:w-[705px] h-[300px]">
                               <img src={image5} className='w-full' />
                          </section>
                          <section className=" py-5">
                                <p className='font-black'>
                                    HR statistics: job search,  interviews, hiring and recruiting
                                </p>
                                  <p>
                                    Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing <br />
                                    aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor,<br />
                                    massa vivamus. A molestie id semper fermentum pretium...
                                  </p>
                          </section>
                        </section>
                        
                        <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image4} className='w-full' />
                          </section>
                          <section className="py-5  m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
                      </section>

                  </section>
                  <section className='md:flex flex-wrap md:px-10  gap-5'>
                      <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image3} className='w-full' />
                          </section>
                          <section className="py-5  m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
                      </section>

                      <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image2} className='w-full' />
                          </section>
                          <section className="py-5 m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
                      </section>

                      <section className=''>
                          <section className="sm:w-[390px] h-[300px] m-auto">
                            <img src={image1} className='w-full' />
                          </section>
                          <section className="py-5 px-5 m-auto">
                            <p className='font-black'>What is traffic arbitrage and does it really <br /> make money?</p>
                            <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida... </p>
                          </section>
                      </section>
                  </section>
                  <section className='bg-[#fedcd2] pt-10 md:px-20'>
                <section className='text-center text-[25px] text-semibold'>
                <p>Don’t miss anything</p>
                <p className='font-bold'>Subscribe to the Createx School <br /> announcements</p>
                </section>
                <section className='grid md:grid-cols-3'>
                    <section className='w-[50%] hidden  md:flex justify-end '>
                      <img src={photo4} className='w-full' />
                    </section>
                    <section className='md:flex justify-center py-3 items-center'>
                        <input type="text" placeholder='Enter your E-mail' className='rounded  px-5 py-2' /><Btns title="Subscribe"/>
                    </section>
                    <section className='w-[50%] m-auto hidden md:block'>
                      <img src={photo4} className='w-full' />
                    </section>
                </section>
                  </section>
            </body>
    </div>
  )
}

export default Blog