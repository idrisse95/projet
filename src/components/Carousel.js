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





            <Carousel className='bg-gray-300/30 py-[100px] pl-[200px] pr-[100px] '>
                <Carousel.Item interval={6000}>
                    <div className='flex w-full justify-between pr-20 shrink-0'>
                        <div className='pt-[100px] animate__backInDown animate__animated  w-[50%]'>
                            <p className='uppercase tracking-widest font-bold text-vr mb-2 animate__backInDown animate__animated '>Let's make the best investment</p>
                            <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6 '>There Is No Friend As <br /> Loyal As  A Book</p>
                            <p className='p-2 text-gray-500 text-xl pb-14 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                            <Link href='/all-books'><button className='bg-vr px-7 py-3 text-white rounded my-10'>Shop now</button></Link>
                        </div>
                        <div>
                            <Image src={img1} className='w-[400px] h-[450px]' />
                        </div>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <div className='flex w-full justify-between pr-20 shrink-0'>
                        <div className='pt-[100px] animate__backInDown animate__animated  w-[50%]'>
                            <p className='uppercase tracking-widest font-bold text-vr mb-2 animate__backInDown animate__animated '>Let's make the best investment</p>
                            <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6 '>There Is No Friend As <br /> Loyal As  A Book</p>
                            <p className='p-2 text-gray-500 text-xl pb-14 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                            <Link href='/all-books'><button className='bg-vr px-7 py-3 text-white rounded my-10'>Shop now</button></Link>
                        </div>
                        <div>
                            <Image src={img2} className='w-[400px] h-[450px]' />
                        </div>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <div className='flex w-full justify-between pr-20 shrink-0'>
                        <div className='pt-[100px] animate__backInDown animate__animated  w-[50%]'>
                            <p className='uppercase tracking-widest font-bold text-vr mb-2 animate__backInDown animate__animated '>Let's make the best investment</p>
                            <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6 '>There Is No Friend As <br /> Loyal As  A Book</p>
                            <p className='p-2 text-gray-500 text-xl pb-14 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                            <Link href='/all-books'><button className='bg-vr px-7 py-3 text-white rounded my-10'>Shop now</button></Link>
                        </div>
                        <div>
                            <Image src={img3} className='w-[400px] h-[450px]' />
                        </div>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <div className='flex w-full justify-between pr-20 shrink-0'>
                        <div className='pt-[100px] animate__backInDown animate__animated  w-[50%]'>
                            <p className='uppercase tracking-widest font-bold text-vr mb-2 animate__backInDown animate__animated '>Let's make the best investment</p>
                            <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6 '>There Is No Friend As <br /> Loyal As  A Book</p>
                            <p className='p-2 text-gray-500 text-xl pb-14 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                            <Link href='/all-books'><button className='bg-vr px-7 py-3 text-white rounded my-10'>Shop now</button></Link>
                        </div>
                        <div>
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
{/* <div id="default-carousel" className=" carouse  w-full bg-gray-300/30 py-[100px]   px-[100px]  relative" data-carousel="slide">

    <div className="relative  overflow-hidden  rounded-lg md:h-[450px]">
        <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <div className='flex w-full justify-between pr-20 shrink-0'>
                <div className='pt-[100px] animate__backInDown animate__animated  w-[50%]'>
                    <p className='uppercase tracking-widest font-bold text-vr mb-2 animate__backInDown animate__animated '>Let's make the best investment</p>
                    <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6 '>There Is No Friend As <br /> Loyal As  A Book</p>
                    <p className='p-2 text-gray-500 text-xl pb-14 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                    <Link href='/all-books'><button className='bg-vr px-7 py-3 text-white rounded my-10'>Shop now</button></Link>
                </div>
                <div>
                    <Image src={img1} className='w-[400px] h-[450px]' />
                </div>
            </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className='flex w-full justify-between pr-20 shrink-0'>
                <div className='pt-[100px] w-[50%] animate__backInDown animate__animated '>
                    <p className='uppercase tracking-widest font-bold text-vr mb-2'>Let's make the best investment</p>
                    <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6'>There Is No Friend As <br /> Loyal As  A Book</p>
                    <p className='p-2 text-gray-500 text-xl pb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                    <Link href='/all-books'><button className='bg-vr px-7 py-3 text-white rounded my-10'>Shop now</button></Link>
                </div>
                <div>
                    <Image src={img2} className='w-[400px] h-[450px]' />
                </div>
            </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className='flex w-full justify-between pr-20 shrink-0'>
                <div className='pt-[100px] w-[50%]  animate__backInDown animate__animated '>
                    <p className='uppercase tracking-widest font-bold text-vr mb-2'>Let's make the best investment</p>
                    <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6'>There Is No Friend As <br /> Loyal As  A Book</p>
                    <p className='p-2 text-gray-500 text-xl pb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                    <Link href='/all-books'><button className='bg-vr px-7 py-3 text-white rounded my-10'>Shop now</button></Link>
                </div>
                <div>
                    <Image src={img3} className='w-[400px] h-[450px]' />
                </div>
            </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className='flex w-full justify-between pr-20 shrink-0'>
                <div className='pt-[100px] w-[50%]  animate__backInDown animate__animated '>
                    <p className='uppercase tracking-widest font-bold text-vr mb-2'>Let's make the best investment</p>
                    <p className='font-titre font-semibold text-5xl text-bl tracking-wider mb-6'>There Is No Friend As <br /> Loyal As  A Book</p>
                    <p className='p-2 text-gray-500 text-xl pb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                    <Link href='/all-books'><button className='bg-vr px-7 py-3 text-white rounded my-10'>Shop now</button></Link>
                </div>
                <div>
                    <Image src={img4} className='w-[400px] h-[450px]' />
                </div>
            </div>
        </div>
    </div>
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
    </div>
    <button type="button" className="absolute b_un top-0 left-0 z-30 flex items-center duration-500 translate-x-full opacity-0 justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  bg-vr/80 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute duration-500 -translate-x-full opacity-0  b_deux top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-vr/80 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div> */}
