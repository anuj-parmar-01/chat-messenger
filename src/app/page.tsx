import Image from 'next/image'

export default function Home() {
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
        <div className='bg-blue-200 grow'></div>
        <div className="h-15 bg-white p-2">
          <button className='float-right py-1 px-3 bg-sky-500  text-white font-bold
         hover:cursor-pointer hover:bg-sky-700 rounded-md'>Send</button>
        </div>
      </div>
    </div>
  )
}
