"use client"
import React, {  useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/firebase"
import { useRouter } from 'next/navigation'
import { getUsers } from 'utils/Utils';
export default function Login() {
   const [email,setEmail] = useState<string>("")
   const [password,setpswd] = useState<string>("")
   const router = useRouter()
   
  async  function submit (e : any){
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in 
      let user = await getUsers(userCredential.user.uid.slice(0,21))
      sessionStorage.setItem("user",JSON.stringify(user))
      router.push('/')
    })
    .catch((error) => {
      console.log("login eror" , error)
    });

   }
   

    return (
        <div className="relative flex flex-col justify-center min-h-screen mx-auto overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign in
                </h1>
                <form className="mt-6" onSubmit={(e)=> submit(e)}>
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
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <button
                        onClick ={() => router.push("/register")}
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    );
}