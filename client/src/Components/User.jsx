import Home from "./Home"
import ChatBot from "./ui/ChatBot"
import Navbar from "./ui/Navbar"
import Moodpage from './Moodpage';

const User = () => {
  return (
    <div className="min-h-screen w-full bg-[#E0E9F5]">
        <Navbar />
        <Moodpage />
        <Home />
        <ChatBot />
    </div>
  )
}

export default User