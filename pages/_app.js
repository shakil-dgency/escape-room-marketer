import { ChakraProvider } from '@chakra-ui/react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <ChakraProvider><Navbar /><Component className="main_component" {...pageProps} /><Footer /></ChakraProvider>
}
