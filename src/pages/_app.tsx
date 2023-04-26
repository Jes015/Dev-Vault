// Types
import type { AppProps } from 'next/app'

// Styles
import '@/styles/normalize.css'
import '@/styles/global.css'
import { Roboto } from "@next/font/google"

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={roboto.className}>
    <Component {...pageProps} />
  </main>
  )
}
