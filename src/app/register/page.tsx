"use client"
import React, {  useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/firebase"
import { useRouter } from 'next/navigation'
import { addUser } from 'utils/Utils';
import { News_Cycle } from 'next/font/google';

export default function Login() {
    const [name, setName] = useState<string>("")
   const [email,setEmail] = useState<string>("")
   const [password,setpswd] = useState<string>("")
   const router = useRouter()
   
  async  function submit (e : any){
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in 
      let NewUser = {
        name : name ,
        photo : "",
        id : userCredential.user.uid.slice(0,21)
      }
      console.log(userCredential)
     await addUser(NewUser)
    //  localStorage.setItem("user" , JSON.stringify(NewUser))
     router.push("/login")

    })
    .catch((error) => {
      console.log("login eror" , error)
    });

   }
   

    return (
        <div className="relative flex flex-col justify-center min-h-screen mx-auto overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign Up
                </h1>
                <form className="mt-6" onSubmit={(e)=> submit(e)}>
                <div className="mb-2">
                        <label
                            htmlFor="text"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                        onChange={(e)=> setName(e.target.value)}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                        onChange={(e)=> setEmail(e.target.value)}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                        onChange={(e)=> setpswd(e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Register
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                   Already have an account?{" "}
                    <button
                        onClick ={() => router.push("/login")}
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign in
                    </button>
                </p>
            </div>
        </div>
    );
}