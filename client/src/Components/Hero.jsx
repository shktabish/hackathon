import { Link } from 'react-router-dom'
import WaterDropGrid from './Ui/WaterDropGrid'

const Hero = () => {
  return (
    <div className='h-screen relative'>
        <div className='absolute z-50 top-0 left-0 h-full w-[55%] ml-10 flex flex-col gap-4 justify-center'>
            <div className='text-9xl font-semibold font-Grotesk'>Breaking the Silence</div>
            <div className='font-Neue text-3xl'>Mental Health Awareness and Prevention</div>
            <div className='font-Neue text-lg'>In a world of stigma and silence, we shatter barriers around mental health. Welcome to our sanctuary, where understanding and empowerment thrive. Join us on a journey to holistic well-being and resilience.</div>
            <div className='flex gap-4'>
                <Link to="/signup" className='bg-[#b3b3b3] font-Neue text-lg font-semibold py-2 px-4 text-black rounded-full'>Sign Up</Link>
                <Link to="/login" className='bg-black font-Neue text-lg font-semibold py-2 px-8 text-white rounded-full'>Login</Link>
            </div>
        </div>
        <WaterDropGrid />
    </div>
  )
}

export default Hero