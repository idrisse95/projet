import '@/styles/globals.css'
import 'animate.css';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Container from '@/components/container/Container';
import Connexion from '@/components/Connexion';


export default function App({ Component, pageProps }) {
  return (

    <>
  
  

      <Provider store={store}> <Container>  <Component {...pageProps} /> </Container> </Provider>

    </>

  )
}
