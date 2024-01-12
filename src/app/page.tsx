import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <main>
    <h1>Home Page</h1>
    <h2>welcome to sam fitness app</h2>
      <ul>
        <li>
        <Link href="/contact">Contact</Link>
        {/* <Link href="/about">About</Link> */}
        <Link href="/">Home</Link>
        </li>
      </ul>
       
    

  </main>
  
  )
}
