import { Menu } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
    <div className="py-5 w-full sticky flex items-center justify-center">
      <div className="w-11/12 flex justify-end">
        <button className="text-2xl tracking-wider font-righteous flex items-center gap-3">MENU <span className="p-3 bg-orange-500 rounded-full text-white"><Menu /></span></button>
      </div>
    </div>
  )
}

export default Navbar