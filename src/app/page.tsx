"use client"


import { useState, useEffect } from "react"
import Message from './Components/Message'
import { addDoctoDb, getUsers, updateDocinDb } from 'utils/Utils'
import { DocumentData, DocumentReference, DocumentSnapshot, QueryDocumentSnapshot, QuerySnapshot, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase"
import Sidebar from "./Components/Sidebar";

interface userList {
  name : string,
  user : {
      name : string,
      id : number
  }
}

export default function Home() {
  let [msg, setmsg] = useState<{ message: string, id: 1 | 2 }[]>([])
  let [currMsg, setCurrMsg] = useState<string>("")
  let [id, setid] = useState<number>(1)
  const [currentUser , setCurrentUser] = useState<userList | {}>({})


  useEffect(() => {
    const unsub = onSnapshot (doc(db, "chats", "LA"), (doc) => {
      // console.log("Current data: ", doc.data().region);
      // setmsg([{"message" : doc.get("message"), "id":1}])
      if(doc.exists()) setmsg([doc.data()])
      
    });
  }, [currentUser])

  const setChats = async () => {
   
  }
  return (
    <div className='min-h-screen h-1'>
      <h1 className='text-xl font-bold text-center'>
        This is Chat Messenger
      </h1>
      <div className="h-3/4 flex w-3/4 mx-auto">
        <Sidebar  setUser ={setCurrentUser}/>
        <div className='bg-blue-200 min-h-full grow mx-auto flex flex-col border-2 border-slate-400
      rounded-md 
      '>
          <div className='bg-slate-950 h-12 px-4 border-black border-2 rounded-md rounded-b-none'>
            <div className='flex justify-between mt-2'>
              <div>
                <img src="" alt="" />
                <span className='text-white leading-tight'>{currentUser?.name||"User Name"}</span>
              </div>
              <button className='text-white px-2 py-1 text-sm rounded-md bg-sky-400
            hover:bg-sky-700
            '>Logout</button>
            </div>
          </div>
          <div className='bg-blue-200 grow text-sm  overflow-auto my-1 px-2'>
            <div className='flex flex-col gap-3'>
              {msg.map((text, i) => {
                return <Message message={text.message} key={i} owner={true} />
              })}
            </div>
          </div>
          <div className="h-15 bg-white p-2 flex justify-between gap-3">
            <textarea onChange={(e) => {
              setCurrMsg(`${e.target.value}`)

            }} value={currMsg} placeholder='Type message here' className='text-sm h-9  box-border p-1 resize-none flex-1
           focus:outline-none 
          ' />
            <button onClick={
              async () => {
                // await updateDocinDb(currMsg )
                await getUsers()
                // setmsg([...msg, currMsg])
                if (id == 1) {
                  setid(2)
                }
                else setid(1)
                setCurrMsg("")
              }
            } className='self-center float-right py-1 px-3 bg-sky-500  text-white font-bold
         hover:cursor-pointer hover:bg-sky-700 rounded-md'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
