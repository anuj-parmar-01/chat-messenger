"use client"


import { useState, useEffect } from "react"
import Message from './Components/Message'
import { addDoctoDb, getUsers, updateDocinDb, user } from 'utils/Utils'
import { DocumentData, DocumentReference, DocumentSnapshot, QueryDocumentSnapshot, QuerySnapshot, Unsubscribe, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase"
import Sidebar from "./Components/Sidebar";
import { MissingStaticPage } from "next/dist/shared/lib/utils";

interface userList {
  name : string,
  user : {
      name : string,
      id : number
  }
}

export default function Home() {
  let [msg, setmsg] = useState<{ message: string, id: string }[]>([])
  let [currMsg, setCurrMsg] = useState<string>("")
  let [id, setid] = useState<number>(1)
  const [currentUser , setCurrentUser] = useState<userList | {}>({})
  const [docId , setId] = useState<string>("")


  useEffect(() => {
    let unsub: Unsubscribe
    if (docId.length>0){
       unsub = onSnapshot (doc(db, "chats", docId), (doc) => {
        console.log("Current data: ", doc.data());
        // setmsg([{"message" : doc.get("message"), "id":1}])
        if(doc.exists()) setmsg(doc.data().chats)
        return () => {
      unsub()
    }
      });
    }
  }, [currentUser])

  const setChats = async (friend : user) => {
    let owner : string= sessionStorage.getItem("user") ||""
    let currentOwner : user = JSON.parse(owner)
    let combineId = currentOwner.id > friend.id ? currentOwner.id + friend.id : friend.id + currentOwner.id
     let data = await addDoctoDb(combineId)
     if(data){
      //set messages set current user
      console.log(data, "chat data")
      setmsg(data.chats)
     }
     else {
      //set current user set messages = []

     }
     setId(combineId)
     setCurrentUser(friend)
  }
  return (
    <div className='min-h-screen h-1'>
      <h1 className='text-xl font-bold text-center'>
        This is Chat Messenger
      </h1>
      <div className="h-3/4 flex w-3/4 mx-auto">
        <Sidebar  setUser ={setChats}/>
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
                return <Message message={text.message} key={i} owner={text.id == JSON.parse(sessionStorage.getItem("user")).id} />
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
                let owner : string= sessionStorage.getItem("user") ||""
                let currentOwner : user = JSON.parse(owner)
                setCurrMsg("")
                await updateDocinDb(docId , {message: currMsg, id: currentOwner.id})
                
              }
            } className='self-center float-right py-1 px-3 bg-sky-500  text-white font-bold
         hover:cursor-pointer hover:bg-sky-700 rounded-md'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
