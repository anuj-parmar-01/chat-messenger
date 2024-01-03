import React from "react"

interface proptype {
  name : string ,
  image : string 
}

export default function SidebarChat(){
     
  const selectChat = () :void  => {
       
  }

    return (
        <div onClick={selectChat} className="cursor-pointer flex text-slate-700 p-1 items-center bg-white gap-2 hover:bg-blue-200">
          <img src="https://images.pexels.com/photos/15031666/pexels-photo-15031666/free-photo-of-portrait-of-a-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
           alt="profilepic" className="w-12 h-12 rounded-3xl object-cover" />
          <div>
            <span> Name</span>
          </div>
        </div>
    )
}