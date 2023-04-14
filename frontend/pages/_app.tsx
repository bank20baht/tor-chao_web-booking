import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavbarComponent from '@/component/NavbarComponent'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavbarComponent/>
      <Component {...pageProps} />
    </>

  )
}
