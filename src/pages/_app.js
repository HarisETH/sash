import Link from "next/link";
import { ChakraProvider } from '@chakra-ui/react'
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
    <ChakraProvider>
      <section className="flex justify-center items-center bg-black">
      <section className={`min-h-screen min-w-full lg:w-3/5 md:py-10 ${inter.className}`}>
    <div className="px-8 py-8 md:px-24 flex flex-col justify-between w-full items-center ">
    <Nav inter={inter} variable={variable} />
    <Component {...pageProps} />
    </div>
    <div className="flex justify-center gap-6 pb-8 text-gray-400 ">
        <Link href="/resume" className="hover:text-green-600">resume.md</Link>
        <Link href="/whoami" className="hover:text-green-600">whoami.md </Link>
        {/* <Link href="/projects" className="hover:text-green-600">projects.md</Link> */}
      </div>
    </section>
    </section>
    </ChakraProvider>
  )
}
