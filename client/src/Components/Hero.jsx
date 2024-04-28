import { useState } from "react"
import { useEffect } from "react"
import BlurryCursor from "./Ui/Cursor"
import { Link } from "react-router-dom"

const Hero = () => {
    const [isActive, setIsActive] = useState(false)

  return (
    <div className="w-full overflow-x-hidden bg-black bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:75px_75px]">
        <BlurryCursor isActive={isActive} />
        <div id="hero" className="h-screen w-full flex flex-col justify-center items-center">
            <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} 
                className="text-white demo text-7xl max-sm:text-5xl font-Grotesk relative z-50"
            >
                I am fine!
            </div>
            <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} 
                className="text-white demo text-9xl text-center max-sm:text-7xl font-Grotesk relative z-50"
            >
                Break The Silence
            </div>
            <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} 
                className="text-white w-[50%] text-xl max-sm:w-[100%] text-center font-Neue font-thin my-4 relative z-50"
            >
                In a world of stigma and silence, we shatter barriers around mental health. Welcome to our sanctuary, where understanding and empowerment thrive. Join us on a journey to holistic well-being and resilience.
            </div>
            <div className="flex gap-10 mt-4">
                <Link to="/signup" className="bg-white/50 text-lg font-semibold py-2 px-8 rounded-full cursor-pointer">Sign Up</Link>
                <Link to="login" className="bg-white text-lg font-semibold py-2 px-8 rounded-full cursor-pointer">Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero