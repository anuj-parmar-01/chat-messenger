"use client"

import Image from 'next/image'
import {useState} from "react"
import Message from './Components/Message'
export default function Home() {
  let [msg , setmsg]  = useState<string[]>([])
  let [currMsg , setCurrMsg] = useState<string>("")
  // console.log( currMsg)
  return (
    <div className='min-h-screen h-1'>
      <h1 className='text-xl font-bold text-center'>
        This is Chat Messenger
      </h1>
      <div className='bg-blue-600 h-3/4 w-3/4 mx-auto my-5 flex flex-col border-2 border-slate-400
      rounded-md 
      '>
        <div className='bg-slate-950 h-12 px-4 border-black border-2 rounded-md rounded-b-none'>
          <div className='flex justify-between mt-2'>
            <div>
              <img src="" alt="" />
              <span className='text-white leading-tight'>Name</span>
            </div>
            <button className='text-white px-2 py-1 text-sm rounded-md bg-sky-400
            hover:bg-sky-700
            '>Logout</button>
          </div>
        </div>
        <div className='bg-blue-200 grow'>
          { msg.map((text) => {
            return <Message message= {text} />
          }) }
        </div>
        <div className="h-15 bg-white p-2 flex justify-between gap-3">
          <textarea onChange={(e)=> {
            setCurrMsg(e.target.value)
            
          }} value = {currMsg} placeholder='Type message here' className='text-sm h-9  box-border p-1 resize-none flex-1
           focus:outline-none
          ' />
          <button onClick = {
            () => {
              setmsg([...msg , currMsg ])
              setCurrMsg("")
            }
          } className='self-center float-right py-1 px-3 bg-sky-500  text-white font-bold
         hover:cursor-pointer hover:bg-sky-700 rounded-md'>Send</button>
        </div>
      </div>
    </div>
  )
}
