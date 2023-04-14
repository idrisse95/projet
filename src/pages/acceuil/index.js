import React, { useEffect, useState } from 'react'
import img1 from '../../../public/img/book1.jpg'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { fermerModal, retrait } from '../../../redux/reduce/reduxe'
import Carousel from '@/components/Carousel'
import Footer from '@/components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MyCarousel from '@/components/Carousel';


export default function Acceuil() {

    const [clicker, setClicker] = useState('')
    const [load, setLoad] = useState(8)

    const loadMore = () => {
        setLoad(load => load += 4)

    }

    const router = useRouter()
    const page = (e) => {

        setChargement('block')

        router.push({
            pathname: `/${e.id}`,
            query: { title: e.title, description: e.description, img: e.image_url, pages: e.num_pages }
        })
    }


    //API
    const [book, setBook] = useState([]);
    useEffect(() => {
        axios.get(` https://example-data.draftbit.com/books`)
            .then(response => {
                setBook(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [setBook]);
    console.log(book);

    // book.sort((a, b) => a.title.localeCompare(b.title));


    const dispatch = useDispatch()

    const ajout = (e) => {
        dispatch(retrait({ id: e.id, title: e.title, img: e.image_url }))
        console.log(e);
    }


    const modal = useSelector(state => state.sideBarFav.modal)


    const [chargement, setChargement] = useState('block')
    setTimeout(() => {
        setChargement('hidden')
    }, 1000);
    return (
        <div className='relative'>

            <div className={`bg-vr z-[9999] flex justify-center items-center fixed w-full h-screen ${chargement}`}>
                <div class="three-body">
                    <div class="three-body__dot"></div>
                    <div class="three-body__dot"></div>
                    <div class="three-body__dot"></div>
                </div>
            </div>

            <div className={`bg-black/80 flex justify-center w-full h-screen items-center duration-300 ease-in-out fixed z-50 ${modal}`}>
                <div className='bg-white px-[100px] py-[100px]'>
                    Deja en favoris <span className='text-red-500 cursor-pointer' onClick={() => { dispatch(fermerModal()) }}>X</span>
                </div>
            </div>


            <MyCarousel />



            <div className='bg-gray-300/20 w-full max-md:flex-col max-md:gap-5 max-md:items-center  flex justify-between md:px-[100px] max-md:px-[50px] py-[100px]'>

                <div className='md:w-[49%] h-[200px] overflow-hidden shadow-xl flex'>
                    <div className='card1 rounded-s-lg h-full overflow-hidden w-[50%]'><Image src={img1} className='w-full hover:scale-125 duration-300 ease-in-out h-full' alt="" /></div>
                    <div className='max-md:w-[70%] px-7 py-6 max-md:pt-2 rounded-r-lg bg-white '>
                        <p className='uppercase tracking-wider max-md:mb-1 font-bold text-vr mb-3'>sale up to 15%</p>
                        <p className='text-titre text-bl text-xl font-semibold'>Innovation in Education br (Hardvocer)</p>
                        <p className='text-gray-600'>Starting at: <span className='text-vr font-semibold'>$65.09</span></p>
                    </div>
                </div>

                <div className='md:w-[49%] h-[200px] overflow-hidden shadow-xl flex'>
                    <div className='card1 rounded-s-lg w-[50%]'><Image src={img1} className='w-full hover:scale-125 duration-300 ease-in-out h-full' alt="" /></div>
                    <div className='max-md:w-[70%] px-7 py-6 rounded-r-lg bg-white '>
                        <p className='uppercase tracking-wider max-md:mb-1 font-bold text-vr mb-3'>sale up to 15%</p>
                        <p className='text-titre text-bl text-xl font-semibold'>Innovation in Education br (Hardvocer)</p>
                        <p className='text-gray-600'>Starting at: <span className='text-vr font-semibold'>$65.09</span></p>
                    </div>
                </div>

            </div>


            <div id='bo' className='bg-gray-300/30 py-[100px]'>
                <div className='text-center mb-[50px]'>
                    <p className=' tracking-wider uppercase text-vr font-bold'>Books gallery</p>
                    <p className='text-titre font-semibold text-4xl tracking-wider text-bl'>Popular Books</p>

                </div>

                <div className='flex justify-center'>
                    <div className='w-[200px] relative h-[2px] mb-[50px] bg-vr/50'><div className='h-[15px] absolute -top-2 left-[50%] w-[15px] bg-vr/40 rotate-45'></div><div className='h-[15px] absolute -top-2 left-[45%] w-[15px] bg-vr/40 rotate-45'></div></div>
                </div>

                <div className='flex justify-center flex-wrap gap-5 max-md:gap-y-24 w-full max-sm:px-10 '>
                    {book.map((e, index) => {
                        if (index < load) {
                            return (
                                <div className='rounded car shadow-lg animate__animated animate__animated animate__fadeIn bg-white border duration-300 relative max-md:w-[45%] w-[20%] h-[500px] max-sm:w-full' key={e.id}>
                                    <div className='absolute right-2 top-2 flex flex-col gap-2 text-white'>

                                        <i className="fa-solid fa-info bg-vr rounded-full log2 duration-300 ease-in-out opacity-0 px-3 py-1 italic"></i>
                                        <i onClick={() => { page(e) }} className='bg-vr rounded-full duration-700 opacity-0 log1 ease-in-out px-3 cursor-pointer py-1'>I</i>
                                    </div>
                                    <div className=''><img className='max-md:h-[200px] h-[300px] w-full' src={e.image_url} alt={e.title} /></div>
                                    <div className='txt duration-500 bg-white p-5 flex flex-col justify-between max-md:h-[160px] h-[130px]'>
                                        <div>
                                            <p className='font-bold mb-3'>{e.title}</p>
                                            <p>By:<span className='font-semibold text-bl'> {e.authors}</span></p>
                                            <p>Pages:<span className='font-semibold text-bl'> {e.num_pages}</span></p>
                                        </div>
                                        <button className={`bg-bl ${clicker} opacity-0 duration-300 ease-in-out w-full pt-4 pb-9 rounded overflow-hidden  text-center mt-5 text-white but`} onClick={() => { ajout(e) }}><span>Add to Favoris</span></button>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>

                <div className='text-center my-20'>
                    <button className={`bg-bl py-2 px-7 text-white text-xl rounded overflow-hidden but`} onClick={loadMore}>
                        <span>Load More</span>
                    </button>
                </div>
            </div>

                    

            <Footer />
        </div>
    )
}



// export async function getStaticProps() {
//     const quote = await fetch('https://example-data.draftbit.com/books');
//     const data = await quote.json();
//     console.log(data);
//     console.log('ee');

//     return {
//         props: {
//             books:data
//         }
//     }
// }

// getStaticProps()