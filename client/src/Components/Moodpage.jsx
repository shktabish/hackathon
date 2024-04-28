import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Moodpage = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
        
        </span>
        <h3 className="text-4xl md:text-7xl font-semibold font-Grotesk">
          Real-Time <br /> Mood Tracker
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 font-Neue">
        Experience the power of instant emotional insight with our real-time mood tracker - effortlessly keeping you in tune with your feelings as they naturally evolve, helping you understand yourself better, moment by moment.
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Click Here
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "./happy1.jpg",
  },
  {
    id: 2,
    src: "./angry1.jpg",
  },
  {
    id: 3,
    src: "./sad1.jpg",
  },
  {
    id: 4,
    src: "./surprise1.jpg",
  },
  {
    id: 5,
    src: "./neutral.jpg",
  },
  {
    id: 6,
    src: "./happy2.jpg",
  },
  {
    id: 7,
    src: "./angry2.jpg",
  },
  {
    id: 8,
    src: "./sad2.jpg",
  },
  {
    id: 9,
    src: "./surprised2.jpg",
  },
  {
    id: 10,
    src: "./happy3.jpg",
  },
  {
    id: 11,
    src: "./angry3.jpg",
  },
  {
    id: 12,
    src: "./sad3.jpg",
  },
  {
    id: 13,
    src: "./surprised3.jpg",
  },
  {
    id: 14,
    src: "./happy4.jpg",
  },
  {
    id: 15,
    src: "./angry4.jpg",
  },
  {
    id: 16,
    src: "./sad4.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Moodpage;