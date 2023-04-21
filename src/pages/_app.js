
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from "next/router";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  let variable = "";
  const router = useRouter();
// Add variable whenever asdding a new page down here
  if (router.pathname === "/resume") {
    variable = "resume.md";
  } else if (router.pathname === "/whoami") {
    variable = "whoami.md";
  } else {
    variable = "";
  }

  return (
    <section className={`px-8 py-8 md:px-24 flex flex-col w-full items-center min-h-screen md:py-10 ${inter.className}`}>
    <Nav inter={inter} variable={variable} />
    <Component {...pageProps} />
    </section>
  )
}
