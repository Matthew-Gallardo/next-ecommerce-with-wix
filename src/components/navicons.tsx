"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CartModal from "./cartModal"

const NavIcon = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const router = useRouter();
  const isLoggeddIn = true;

  const handleProfile = () => {
    if (!isLoggeddIn) {
      router.push("/login");
      
    } else {
      setProfileOpen((prev) => !prev);
    }
  }

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image 
        src="/profile.png" 
        alt="Profile" 
        width={22} 
        height={22} 
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-small bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image src="/notification.png" alt="Notification" width={22} height={22} className="cursor-pointer"/>
      <div className="relative cursor-pointer " onClick={() =>setCartOpen((prev) => !prev) }>
      <Image 
      src="/cart.png" 
      alt="" 
      width={22} 
      height={22} 
      className="cursor-pointer"
      
      />
      <div className="absolute -top-4 -right-4 w-6 h-6 bg-theme rounded-full text-white text-sm flex items-center justify-center">2</div>
       {isCartOpen && (
         <CartModal/>
      )}
      </div>
    </div>
  )
}

export default NavIcon
