import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Nav from '../components/Nav'; 
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;