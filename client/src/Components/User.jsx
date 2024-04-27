import Home from "./Home"
import ChatBot from "./ui/ChatBot"
import Navbar from "./ui/Navbar"

const User = () => {
  return (
    <div className="min-h-screen w-full bg-[#E0E9F5]">
        <Navbar />
        <Home />
        <ChatBot />
    </div>
  )
}

export default User