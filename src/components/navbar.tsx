import Link from "next/link"
import Menu from "./menu"
import Image from "next/image"
import SearchBar from "./search"
import NavIcon from "./navicons"
const NavBar = () => {
    return (
      <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
        {/*mobile*/} 
      <div className="h-full flex items-center justify-between md:hidden">
      <Link href="/">
        <div className="text-2xl tracking-wide"> TeMu</div>

      </Link>
      <Menu/>
      </div>
      {/*bigger mobile*/} 
      <div className="hidden md:flex items-center justify-between gap-8 h-fll ">
       {/*Left*/} 
      <div className="w-1/3 xl:w-1/2 flex items-center gap-8">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.png" alt="" width={24} height={24} />
        <div className="text-2xl tracking-wide">TeMu</div>
      </Link>
      <div className="hidden xl:flex gap-5">
        <Link href="/">Homepage</Link>
        <Link href="/">Shop</Link>
        <Link href="/">Deals</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
        {/*Right*/} 
       <div className="w-2/3 flex items-center justify-between gap-8"></div>
       <SearchBar/>
       <NavIcon/>
        
      </div>
      </div>
    )
  }
  
  export default NavBar