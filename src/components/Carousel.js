import React from 'react'
import img1 from '../../../projet/public/img/carou.png'
import img2 from '../../../projet/public/img/carou2.png'
import img3 from '../../../projet/public/img/carou3.png'
import img4 from '../../../projet/public/img/carou4.png'
import Link from 'next/link'
import Image from 'next/image'
import { Carousel } from 'react-bootstrap'



export default function MyCarousel() {
    return (

        <>





            <Carousel className='bg-gray-300/30 py-[100px] pl-[200px] max-md:px-10 max-md:py-10 pr-[100px]  max-md:text-center'>
                <Carousel.Item interval={6000}>
                    <div className='flex w-full justify-between max-md:flex-col max-md:text-center max-md:px-0  pr-20 shrink-0'>
                        <div className='pt-[100px] animate__backInDown animate__animated  md:w-[50%]'>
                            <p className='uppercase tracking-widest font-bold text-vr mb-2 animate__backInDown animate__animated '>Let's make the best investment</p>
                            <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6 '>There Is No Friend As <br /> Loyal As  A Book</p>
                            <p className='p-2 text-gray-500 text-xl pb-14 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                            <Link href='/all-books'><button className='bg-vr px-7 py-3 text-white rounded my-10'>Shop now</button></Link>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={img1} className='w-[400px] h-[450px]' />
                        </div>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <div className='flex w-full justify-between max-md:flex-col max-md:text-center max-md:px-0  pr-20 shrink-0'>
                        <div className='pt-[100px] animate__backInDown animate__animated  md:w-[50%] '>
                            <p className='uppercase tracking-widest font-bold text-vr mb-2 animate__backInDown animate__animated '>Let's make the best investment</p>
                            <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6 '>There Is No Friend As <br /> Loyal As  A Book</p>
                            <p className='p-2 text-gray-500 text-xl pb-14 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                            <Link href='/all-books'><button className='bg-vr px-7 py-3 text-white rounded my-10'>Shop now</button></Link>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={img2} className='w-[400px] h-[450px]' />
                        </div>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <div className='flex w-full justify-between max-md:flex-col max-md:text-center max-md:px-0  pr-20 shrink-0'>
                        <div className='pt-[100px] animate__backInDown animate__animated  md:w-[50%]'>
                            <p className='uppercase tracking-widest font-bold text-vr mb-2 animate__backInDown animate__animated '>Let's make the best investment</p>
                            <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6 '>There Is No Friend As <br /> Loyal As  A Book</p>
                            <p className='p-2 text-gray-500 text-xl pb-14 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                            <Link href='/all-books'><button className='bg-vr px-7 py-3 text-white rounded my-10'>Shop now</button></Link>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={img3} className='w-[400px] h-[450px]' />
                        </div>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <div className='flex w-full justify-between max-md:flex-col max-md:text-center max-md:px-0  pr-20 shrink-0'>
                        <div className='pt-[100px] animate__backInDown animate__animated  md:w-[50%]'>
                            <p className='uppercase tracking-widest font-bold text-vr mb-2 animate__backInDown animate__animated '>Let's make the best investment</p>
                            <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6 '>There Is No Friend As <br /> Loyal As  A Book</p>
                            <p className='p-2 text-gray-500 text-xl pb-14 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                            <Link href='/all-books'><button className='bg-vr px-7 py-3 text-white rounded my-10'>Shop now</button></Link>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={img4} className='w-[400px] h-[450px]' />
                        </div>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>
    )
}
