import React, { useEffect, useRef, useState } from 'react'
import img1 from '../../../public/img/carou.png'
import img2 from '../../../public/img/carou2.png'
import img3 from '../../../public/img/carou3.png'
import img4 from '../../../public/img/carou4.png'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { ajoutPanier, simpleLogin } from '../../../redux/reduce/reduxe'
import { BsFillArrowDownLeftCircleFill, BsTelephoneForward } from 'react-icons/bs'
import { MdOutlineAccountCircle, MdOutlineFavoriteBorder } from 'react-icons/md'
import { IconName } from "react-icons/bs";

export default function Nav() {


    const [trans_burger, setTrans_burger] = useState('-translate-x-full')
    const [trans_panier, setTrans_panier] = useState('translate-x-full')
    const [flow, setFlow] = useState(' overflow-hidden')
    const [haut, setHaut] = useState('relative overflow-hidden')

    const [noir, setNoir] = useState('')

    const burger = () => {
        setTrans_burger('translate-x-0')
        setFlow('')
        setNoir('w-screen h-screen fixed bg-black/30')
        setTrans_panier('-translate-x-full hidden')
    }
    const log = () => {
        setTrans_panier('translate-x-0')
        setFlow('')
        setNoir('w-full h-screen fixed bg-black/30')
        setHaut('')

    }

    const [acc, setAcc] = useState('')

    const croix = () => {
        setTrans_burger('-translate-x-full')
        setFlow(' overflow-hidden')
        setNoir('')
        // setTrans_panier('block -translate-x-full')
    }
    const croix_panier = () => {
        setTrans_panier('translate-x-full')
        setFlow(' overflow-hidden')
        setNoir('')
        setHaut('relative overflow-hidden')

    }

    const panier = useSelector(state => state.sideBarFav.panier);
    const dispatch = useDispatch()
    const retirer = (e) => {
        dispatch(ajoutPanier(e.id))
    }


    const [headerClass, setHeaderClass] = useState('');
    const [col_log, setColLog] = useState('text-red-500 text-3xl')

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setHeaderClass('fixed  bg-vr w-full z-50 shadow-lg');

        } else {
            setHeaderClass('');

        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);





    const connecter = useSelector(state => state.sideBarFav.connecter)

    const text_log = useSelector(state => state.sideBarFav.text)
    // const [text_log, setTextlog] = useState('Connectez-vous ici')

    const [valide, setValide] = useState('')
    const [div_co, setDivco] = useState('')
    const [div_insc, setDivinsc] = useState('hidden')
    const [liste, setListe] = useState('hidden')
    const email = useRef()
    const pass = useRef()

    const [tableau, setTableau] = useState([{ nom: "James" }, { nom: "Samantha" }, { nom: "David" }, { nom: "Emily" }, { nom: "Michael" }]
    )
    console.log(connecter);
    const valider = () => {
        console.log(email);
        if (email.current.value.includes('@') && email.current.value.includes('.')) {
            setColLog('text-vr text-3xl')
            setTimeout(() => {

                setListe('block')
                setDivco('hidden')
                dispatch(simpleLogin())
                for (let i = 0; i < tableau.length; i++) {
                    if (tableau[i].nom === email.current.value) {
                        return true;
                    }
                }
                return false;
            }, 1000);

            setValide('')
            console.log(connecter);


        }
        else {
            setValide('Entrez un mail valide !')

        }
    }

    const connet = () => {
        setTrans_burger('translate-x-0')
        setFlow('')
        setNoir('w-screen h-screen fixed bg-black/30')
        setTrans_panier('-translate-x-full hidden')
        setListe('hidden')
        setDivco('block')
    }


    //inscrition
    const inscription = () => {
        setDivinsc('block')
        setDivco('hidden')
    }
    const login = () => {
        setDivinsc('hidden')
        setDivco('block')
    }

    const nb = useSelector(state => state.sideBarFav.panier.length)


    const nom = () => {


    }

    return (
        <div className={`${haut}`}>
            <div className={`${noir} duration-200`}>

            </div>
            <header className={`px-[100px] items-center duration-300 max-md:px-[20px] flex justify-between ${headerClass} py-5 ${flow}`}>
                <div className='flex items-center gap-5'>
                    <div onClick={burger} className='cursor-pointer bug w-[40px]'
                    >
                        <div className='w-[10px] sp_un  h-[3px] duration-300 ease-in-out bg-black rounded'></div>
                        <div className='w-[30px] my-1 sp_deux duration-300 h-[3px] bg-black rounded'></div>
                        <div className='w-[20px] h-[3px] bg-black rounded'></div>
                    </div>
                    <Link href="/">
                        <div className='font-[Philosopher] uppercase text-3xl'>Bookshelf.</div>
                    </Link>
                </div>

                <div className='w-[500px] bg-gray-300/20 md:flex max-md:hidden'>
                    <label className=' p-2 flex items-center w-full' htmlFor="">
                        <a href="#bo">Logo</a> <input type="text" placeholder='Search your book here' className='bg-transparent border-none w-full' />
                    </label>
                </div>
                <div >
                    <div className='flex items-center gap-3 relative'>
                        <MdOutlineAccountCircle className={`${acc} text-2xl ${col_log}`} onClick={connet} />
                        <p className='bg-red-500/80  rounded-lg text-white font-semibold absolute top-7 -left-28'>{text_log}</p>

                        <p className='max-md:hidden flex  items-center'><span><BsTelephoneForward /></span> +01234567890</p>
                        <div onClick={log} className='cursor-pointer bg-vr text-white p-2 rounded-full '><span><MdOutlineFavoriteBorder /></span> <div className='absolute bg-white text-vr rounded-full px-2 border-2 -top-3 -right-5'>{nb}</div></div>
                    </div>
                </div>

                <div className={`bg-white z-50 absolute w-[400px] left-0 top-0 h-[1000px] duration-300 ${trans_burger}`}>
                    <div className='flex justify-between text-3xl py-9 px-7 font-semibold bg-gray-300/30 text-black'>
                        <div>Bookshelf</div>
                        <button onClick={croix}><i>X</i></button>
                    </div>
                    <div className='py-16 px-2 text-bl text-xl'>
                        <div className={`border border-vr px-4 py-2 rounded ${div_co}`}>
                            <p className='text-4xl mb-16  text-center'>Connexion</p>
                            <p>{connecter}</p>

                            <div ><label htmlFor="">Email:</label> <input ref={email} type="text" className='rounded-lg bg-blue-100 border-0 ' />
                                <p className='pl-5 text-sm text-red-500 font-bold'>{valide}</p>
                            </div>
                            <div className='mb-7'><label htmlFor="">Password:</label> <input ref={pass} type="password" className='rounded-lg mt-5 bg-blue-100 border-0' /></div>

                            <div className=' text-center'><button onClick={valider} className='bg-bl text-white duration-200 hover:border-vr rounded ease-in-out but overflow-hidden px-4 py-2 '><span>Valider</span></button></div>
                            <p className='text-bl text-sm text-center mb-4 hover:underline cursor-pointer' onClick={inscription}>Pas de compte?</p>
                        </div>


                        <div className={`border border-vr px-4 py-2 rounded ${div_insc}`}>
                            <p className='text-4xl mb-16  text-center'>Inscription</p>


                            <div><label htmlFor="">Nom:</label> <input type="text" className='rounded-lg bg-blue-100 border-0 ' />

                            </div>
                            <div><label htmlFor="">Prénom:</label> <input type="text" className='rounded-lg mt-5 bg-blue-100  border-0 ' />
                            </div>




                            <div><label htmlFor="">Email:</label> <input type="text" className='rounded-lg mt-5 bg-blue-100  border-0 ' />

                            </div>
                            <div className='mb-7'><label htmlFor="">Password:</label> <input type="password" className='rounded-lg mt-5 bg-blue-100 border-0' /></div>

                            <div className='text-center'><button className='bg-bl text-white duration-200 hover:border-vr rounded ease-in-out but overflow-hidden px-4 py-2 '><span>Valider</span></button></div>
                            <p className='text-center text-sm text-bl cursor-pointer mb-4' onClick={login}>Vous avez déja un compte?</p>

                        </div>

                        <ul className={`flex pl-8 flex-col gap-7 ${liste}`}>
                            <li>Booskshelf Minimal</li>
                            <li>Booskshelf Modern</li>
                            <li>Bookshelf Classic</li>
                            <Link href='/all-books'>
                                <li>All Books</li>
                            </Link>

                        </ul>
                    </div>
                </div>

            </header>

            <div className={`bg-white z-50 fixed w-[400px] right-0 top-0 pb-[100px] duration-300 ${trans_panier}  px-5`}>
                <div className='flex  gap-16 text-2xl py-9 px-7 font-semibold'>
                    <button onClick={croix_panier}><i>X</i></button>
                    <div>Your carts items</div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[250px] relative h-[2px] mb-[50px] bg-vr/50'><div className='h-[15px] absolute -top-2 left-[50%] w-[15px] bg-vr/40 rotate-45'></div><div className='h-[15px] absolute -top-2 left-[45%] w-[15px] bg-vr/40 rotate-45'></div></div>
                </div>
                <div className='mt-3  text-bl text-xl flex flex-col gap-5 '>
                    {panier.map((e) => (
                        <div className='flex justify-between odd:bg-gray-300/60 py-3 px-2'>
                            <div ><img className='w-[100px] h-[80px]' src={e.img} alt="" /></div>
                            <div className='text-sm ml-3'>{e.title}</div>
                            <button onClick={() => { retirer(e) }} className='pl-3'><i>X</i></button>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
