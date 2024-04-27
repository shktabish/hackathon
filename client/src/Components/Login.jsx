import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import api from './../utils/axios'
import toast from "react-hot-toast"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const res = await api.post("/user/login", {
        email,
        password
      })
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.error)
    }
  }

  return (
    <div className="h-screen w-full grid grid-cols-2 max-md:grid-cols-1"> 
        <div className="bg-red-500 h-full max-md:hidden">

        </div>
        <div className="py-24 px-10">
            <div className="flex gap-3 items-center"><IoIosArrowBack className="inline-block" /> <span>Back to website</span></div>
            <div className="text-3xl font-semibold mt-10">Welcome!</div>
            <div className="text-sm mt-3"><span className="font-bold underline cursor-pointer">Create a free account</span> or login to get started using <span>I am fine</span></div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-10">
              <label htmlFor="email" className="ml-3">Email</label>
              <input 
                autoComplete="off" 
                style={{border: "1px solid #b3b3b3"}} id="email" type="text" 
                className="w-[80%] max-sm:w-[90%] rounded-full py-3 px-6 focus:outline-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <label htmlFor="password" className="mt-4 ml-3">Password</label>
              <input 
                style={{border: "1px solid #b3b3b3"}} id="password" type="password" 
                className="w-[80%] max-sm:w-[90%] rounded-full py-3 px-6 focus:outline-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div className="underline mt-2 ml-3">forgot password?</div>
              <button className="w-[80%] max-sm:w-[90%] mt-4 rounded-full p-3 bg-black text-white">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login