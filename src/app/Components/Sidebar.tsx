import React, { ChangeEvent, useState } from "react"
import SidebarChat from "./SidebarChat"
import { collection, getDocs, query , where } from "firebase/firestore"
import { db } from "firebase/firebase"

interface Props {
    setUser:  React.Dispatch<React.SetStateAction<string>>,
}

export default function Sidebar(props : Props) {
    const [userName, setUserName] = useState<string>("")
    const [err, setErr] = useState<boolean>(false)
    
     
    const handleSearch = async () => {
        const q = query(collection(db,"users"), where( "UserName", "==" ,userName))
          
        try {
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                props.setUser(doc.data().name)
            })
        }
        catch(err) {
         setErr(true)         
        }
    }

    return (
        <div className="bg-blue-400 w-1/3 rounded-md ">
            <div className='bg-blue-700 h-12 px-4 border-black border-2 rounded-md rounded-b-none'>
                <div className='flex justify-between mt-2'>
                    <div>
                        <img src="" alt="" />
                        <span className='text-white leading-tight'>{ "User Name"}</span>
                    </div>
                    <button className='text-white px-2 py-1 text-sm rounded-md bg-sky-400
      hover:bg-sky-700
      '>Logout</button>
                </div>
            </div>
            <div>
                <input onChange={(e :ChangeEvent<HTMLInputElement> ) => setUserName(e.target.value)} type="text" placeholder="Find a user"/>
            </div>
            <div className="flex flex-col gap-2 text-sm">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>
        </div>
    )
}