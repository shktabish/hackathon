import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { IoSendSharp } from "react-icons/io5";
import api from "../../utils/axios";

const Button = ({ isActive, setIsActive }) => {
  return (
    <div onClick={() => setIsActive(!isActive)} className="absolute bottom-0 right-0 overflow-hidden w-[100px] h-[40px] rounded-[25px]">
      <motion.div 
        className="relative w-full h-full"
        animate={{top: (isActive?"-100%":"0")}}
        transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
      >
        <div className="w-full h-full bg-[#E0E9F5] text-black flex justify-center items-center font-Neue font-semibold cursor-pointer">Chat!</div>
        <div className="absolute top-full w-full h-full bg-white flex justify-center items-center font-Neue font-semibold cursor-pointer">Close</div>
      </motion.div>
    </div>
  );
}

const ChatBot = () => {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);


  const formatResponse = (content) => {
    // Remove asterisks (*) and bullet points from the text
    return content.replace(/\*+/g, '').replace(/- /g, '');
  };

  const handleClick = async () => {
    const userMessage = message;
    const res = await api.post("/send-message", { message });
    const botMessage = res.data.response;
    setChatMessages(prevMessages => [
      ...prevMessages,
      { text: `Me: ${userMessage}`, sender: 'user' },
      { text: `AI: ${formatResponse(botMessage)}`, sender: 'bot' }
    ]);
    setMessage("");
  }
  

  useEffect(() => {
    const fetchInitialMessage = async () => {
      const res = await api.post("/send-message");
      const initialMessage = res.data.response;
      setChatMessages([{ text: `AI: ${formatResponse(initialMessage)}`, sender: 'bot' }]);
    }
    fetchInitialMessage();
  }, []);

  const variant = {
    open: {
      width: 400,
      height: 550,
      bottom: "-25px",
      right: "-25px"
    },
    close: {
      width: 100,
      height: 40,
      bottom: "0px",
      right: "0px"
    }
  }

  return (
    <>
      <div className="fixed bottom-[50px] right-[50px] z-[51]">
        <motion.div 
          className={`relative rounded-[25px] bg-[#37383c] flex flex-col-reverse items-start py-6 px-3 ${isActive? "overflow-y-scroll" : "overflow-y-hidden"} chat-container`}
          variants={variant}
          animate={isActive? "open" : "close"}
          initial="close"
          transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
        >
            <div className="flex items-center">
                <input type="text" 
                    autoComplete="off" 
                    style={{border: "1px solid #b3b3b3"}} id="email"
                    className={`w-[100%] max-sm:w-[50%] rounded-full py-2 px-6 ${isActive? "block":"hidden"} focus:outline-black`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter a message"
                />
                <IoSendSharp className={`fill-white scale-150 ml-2 cursor-pointer ${isActive? "block":"hidden"}`} onClick={handleClick} />
            </div>
            <div className="flex flex-col gap-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`${isActive? "block":"hidden"} text-white`}>
                  {msg.text}
                </div>
              ))}
            </div>
        </motion.div>
        <Button setChatMessages={setChatMessages} isActive={isActive} setIsActive={setIsActive} />
    </div>
    </>
  );
}

export default ChatBot;
