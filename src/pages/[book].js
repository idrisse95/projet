import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { retrait } from '../../redux/reduce/reduxe';

export default function Book(props) {
 console.log(props);

 const [chargement,setChargement] = useState('block')

 setTimeout(() => {
  setChargement('hidden')
 }, 1000);
 
 const router = useRouter()
 const id = router.query
 console.log(id);

 const dispatch = useDispatch()
 const fav = (id) =>{
    dispatch(retrait({ id: id.id, title: id.title, img: id.image_url }))

}

    // const book = location.state.book
  return (
    
    <div className='bg-vr/60  h-full py-[25px] px-[25px]'>


<div className={`bg-vr z-[9999] flex justify-center items-center top-0 left-0 fixed w-full h-screen ${chargement}`}>
                <div class="three-body">
                    <div class="three-body__dot"></div>
                    <div class="three-body__dot"></div>
                    <div class="three-body__dot"></div>
                </div>
            </div>

      <div className='pt-[10px] bg-gray-100/100 pb-[50px]'>
      <div className='text-center mb-10 text-3xl text-vr font-semibold'> {id.title}</div>
      <div className='lg:flex gap-16 max-lg:px-6 justify-center'>
          <div className='lg:w-[30%] h-[450px]'><img className='w-full h-full' src={id.img} alt="" />
          </div>
          <div className='lg:w-[50%] max-lg:text-center flex flex-col justify-between max-lg:px-5 pt-16'>
            <p className='mb-24 max-lg:mb-10'>{id.description}</p>
            <div className='lg:pl-[100px] max-lg:text-center'>
                <button onClick={()=>{fav(id)}} className='bg-vr px-7 py-2 rounded text-white'>
      
                    Ajouter Favoris      </button>
            </div>
          </div>
      </div>
      
      
      
      </div>
    </div>
  )
}





// export async function getServerSideProps(context) {

//     // const response = await fetch('https://example-data.draftbit.com/books')
 
//     // const data = await response.json();

//     const { query } = context
 
//     const data = await fetch(query.book)

//     return {
//         props: {
//             data
//         }
//     }
// }