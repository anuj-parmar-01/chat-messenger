import React from "react"
import SidebarChat from "./SidebarChat"



export default function Sidebar() {
    return (
        <div className="bg-blue-400 w-1/3 rounded-md ">
            <div className='bg-blue-700 h-12 px-4 border-black border-2 rounded-md rounded-b-none'>
                <div className='flex justify-between mt-2'>
                    <div>
                        <img src="" alt="" />
                        <span className='text-white leading-tight'>User Name</span>
                    </div>
                    <button className='text-white px-2 py-1 text-sm rounded-md bg-sky-400
      hover:bg-sky-700
      '>Logout</button>
                </div>
            </div>
            <div className="flex flex-col gap-2 text-sm">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>
        </div>
    )
}