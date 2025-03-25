import { CalendarDays, Clock, Globe, MapPin, Users, UsersRound } from 'lucide-react'
import React from 'react'

function banner2() {
  return (
    <div className="flex flex-col gap-20 pb-20 items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex items-center gap-3">
          <CalendarDays className="w-10 h-10 text-blue-500" />
          <h1 className="text-xl sm:text-2xl"><span className="font-semibold">Date:</span> April 18, 2025</h1>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-10 h-10 text-green-500" />
          <h1 className="text-xl sm:text-2xl"><span className="font-semibold">Duration:</span> 8 hours (may extend to 24 hours)</h1>
        </div>
        <div className="flex items-center gap-3">
          <Globe className="w-10 h-10 text-purple-500" />
          <h1 className="text-xl sm:text-2xl"><span className="font-semibold">Mode:</span> Offline (Round 1 Online, Round 2 Offline)</h1>
        </div>
        <div className="flex items-center gap-3">
          <Users className="w-10 h-10 text-[#004aac]" />
          <h1 className="text-xl sm:text-2xl"><span className="font-semibold">Expected Participation:</span> 500+ participants</h1>
        </div>
        <div className="flex items-center gap-3">
          <UsersRound className="w-10 h-10 text-red-500" />
          <h1 className="text-xl sm:text-2xl"><span className="font-semibold">Team Size:</span> 2-4 members per team</h1>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-10 h-10 text-indigo-500" />
          <h1 className="text-xl sm:text-2xl"><span className="font-semibold">Venue:</span> G.L. Bajaj Institute of Technology</h1>
        </div>
      </div>
    </div>
  )
}

export default banner2