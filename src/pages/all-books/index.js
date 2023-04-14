
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ajout, retrait } from '../../../redux/reduce/reduxe';
import { useRouter } from 'next/router';
import { AiOutlineInsertRowBelow } from 'react-icons/ai';
import { BsLayoutThreeColumns } from 'react-icons/bs';
import Footer from '@/components/footer/Footer';


export default function Book() {

    const [book, setBook] = useState([]);
    useEffect(() => {
        axios.get(`https://example-data.draftbit.com/books`)
            .then(response => {
                setBook(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [setBook]);



    const dispatch = useDispatch()



    const ajout = (e) => {

        dispatch(retrait({ id: e.id, title: e.title, img: e.image_url }))
        console.log(e);
    }

    const routerr = useRouter()
    const page = (e) => {
        routerr.push({
            pathname: `/${e.id}`,
            query: { title: e.title, description: e.description, img: e.image_url, pages: e.num_pages }
        })
    }


    const [direction, setDirection] = useState('flex flex-wrap')
    const [direction_div, setDirectiondiv] = useState('max-md:w-[47%] w-[32%]')

    const [txt, setTxt] = useState('txt')

    const row = () => {
        setDirection('flex flex-wrap')
        setDirectiondiv('max-md:w-[47%] w-[32%] ')
        setTxt('txt')
    }

    const col = () => {
        setDirection('flex flex-col')
        setDirectiondiv('max-md:w-[100%] w-[90%] justify-arround flex')
        setTxt('')
    }

    const [chargement, setChargement] = useState('block')
    setTimeout(() => {
        setChargement('hidden')
    }, 1000);




    const [livresState, setLivresState] = useState(book || []); // Vérifie si book est défini avant de l'utiliser, sinon initialiser avec un tableau vide
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [selectedAuthor, setSelectedAuthor] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const router = useRouter();

    const pushFonction = (id) => {
        router.push(`/${id}`);
    };

    function isOnSearch(bookName) {
        return (
            bookName && bookName.toLowerCase().includes(inputValue.toLowerCase())
        );
    }

    function handleCategoryChange(e) {
        const category = e.target.getAttribute("data-category");
        if (selectedCategory === category) {
            return;
        }
        if (category === "All") {
            setLivresState(book);
        } else {
            const filteredLivres = book.filter(
                (livre) => livre.genres && livre.genres.includes(category)
            );
            setLivresState(filteredLivres);
        }
        setSelectedCategory(category);
    }

    function handleAuthorChange(e) {
        setSelectedAuthor(e.target.value);
        if (e.target.value === "") {
            setLivresState(book);
        } else {
            const filteredLivres = book.filter(
                (livre) => livre.authors === e.target.value
            );
            setLivresState(filteredLivres);
        }
    }

    function handleSortChange(e) {
        const value = e.target.value;
        let sortedLivres;
        if (value === "az") {
            sortedLivres = livresState.slice().sort((a, b) => {
                if (!a.title || !b.title) return 0;
                return a.title.localeCompare(b.title);
            });
        } else if (value === "za") {
            sortedLivres = livresState.slice().sort((a, b) => {
                if (!a.title || !b.title) return 0;
                return b.title.localeCompare(a.title);
            });
        
        } else {
            sortedLivres = book;
        }
        setLivresState(sortedLivres);
    }

    useEffect(() => {
        setLivresState(book || []); // Vérifie si book est défini avant de l'utiliser, sinon initialiser avec un tableau vide
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [book]);



    return (
        <div >

            <div className='px-[140px] max-md:px-[20px] md:flex gap-x-10 py-[80px]'>


                <div className={`bg-vr z-[9999] flex justify-center items-center top-0 left-0 fixed w-full h-screen ${chargement}`}>
                    <div class="three-body">
                        <div class="three-body__dot"></div>
                        <div class="three-body__dot"></div>
                        <div class="three-body__dot"></div>
                    </div>
                </div>



                <div>
                    <div><input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='Search' className='bg-gray-300/30 py-2 pl-3 fontsemibold max-md:w-full' /></div>


                    <div className='mt-7'>
                        <p className='font-semibold max-md:mb-[20px] text-xl text-bl'>Category</p>
                        <div className='flex mt-4 flex-col max-md:flex-row max-md:flex-wrap gap-3'>
                            <ul className='max-md:flex-wrap flex md:flex-col gap-4 '>
                                <li className='cursor-pointer' onClick={handleCategoryChange} data-category="All">
                                    All
                                </li>
                                <li className='cursor-pointer' onClick={handleCategoryChange} data-category="Mystery">
                                    Mystery
                                </li>
                                <li className='cursor-pointer' onClick={handleCategoryChange} data-category="Fantasy">
                                    Fantasy
                                </li>
                                <li className='cursor-pointer' onClick={handleCategoryChange} data-category="Biography">
                                    Biography
                                </li>
                                <li className='cursor-pointer' onClick={handleCategoryChange} data-category="Religion">
                                    Religion
                                </li>
                                <li className='cursor-pointer' onClick={handleCategoryChange} data-category="Fiction">
                                    Fiction
                                </li>
                                <li className='cursor-pointer' onClick={handleCategoryChange} data-category="Historical">
                                    Historical
                                </li>
                                <li className='cursor-pointer' onClick={handleCategoryChange} data-category="Inspirational">
                                    Inspirational
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-7 max-md:mb-[20px]'>
                        <p className='font-semibold text-bl max-md:mb-[20px] mb-3 text-xl'>Author</p>
                        <select value={selectedAuthor} onChange={handleAuthorChange} className='bg-gray-300/30 w-[150px] py-2 pl-3 pr-1'>
                            <option value="">All Authors</option>
                            {book
                                .map((livre) => livre.authors)
                                .filter((value, index, self) => self.indexOf(value) === index)
                                .map((author) => (
                                    <option key={author} value={author}>
                                        {author}
                                    </option>
                                ))}
                        </select>



                    </div>
                </div>

                <div className='w-full'>

                    <div className='flex justify-between mb-[50px]'>
                        <div>

                            <button onClick={row} className='bg-gray-300 p-2 text-2xl hover:text-white duration-300 rounded focus:bg-black focus:text-white'>
                                <AiOutlineInsertRowBelow />
                            </button>

                            <button onClick={col} className='bg-gray-300 p-2 text-2xl hover:text-white duration-300 rounded ml-3 focus:bg-black focus:text-white'>
                                <BsLayoutThreeColumns />
                            </button>
                        </div>
                        <div>
                            <select name="sort" id="sort" onChange={handleSortChange}>
                                <option value="">Trier par</option>
                                <option value="az">Titre A-Z</option>
                                <option value="za">Titre Z-A</option>
                               
                            </select>
                        </div>

                    </div>


                    <div className={`${direction} justify-between gap-5 max-md:gap-y-14 w-full`}>
                        {livresState &&
                            livresState.slice().map((e) =>
                                isOnSearch(e.title) ? (
                                    <div className={`rounded car shadow-lg animate__animated animate__animated animate__fadeIn bg-white border duration-300 relative ${direction_div}`} key={e.id} >

                                        <div className='absolute right-2 top-2 flex flex-col gap-2 text-white'>
                                            <i className='bg-vr rounded-full log2 duration-300 ease-in-out opacity-0 px-3 py-1'>I</i>
                                            <i onClick={() => { page(e) }} className='bg-vr rounded-full duration-700 opacity-0 log1 ease-in-out px-3 py-1 cursor-pointer'>I</i>
                                        </div>
                                        <div className=''><img className='h-[300px] max-md:h-[200px] w-full' src={e.image_url} alt={e.title} /></div>
                                        <div className={`${txt} duration-500 bg-white p-5 flex flex-col justify-between max-md:h-[200px] h-[130px]`}>
                                            <div>
                                                <p className='font-bold mb-3'>{e.title}</p>
                                                <p>By:<span className='font-semibold text-bl'> {e.authors}</span></p>
                                                <p>Pages:<span className='font-semibold text-bl'> {e.num_pages}</span></p>
                                            </div>
                                            <button onClick={() => { ajout(e) }} className='bg-bl  opacity-0 duration-300 ease-in-out w-full pt-4 pb-9 rounded overflow-hidden text-center mt-3 text-white but '><span>Add to Favoris</span></button>
                                        </div>

                                    </div>
                                ) : null
                            )}
                    </div>








                </div>

            </div>
            <Footer />

        </div>
    );
}





