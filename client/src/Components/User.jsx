import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import other components
import Home from "./Home";
import ChatBot from "./Ui/ChatBot";
import Navbar from "./Ui/Navbar";
import Moodpage from './Moodpage';
import Example from "./Ui/Example";

const User = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Example /> 
      ) : (
        <div className="min-h-screen w-full bg-[#E0E9F5]">
          <Navbar />
          <Moodpage />
          <Home />
          <ChatBot />
        </div>
      )}
    </>
  );
};

export default User;