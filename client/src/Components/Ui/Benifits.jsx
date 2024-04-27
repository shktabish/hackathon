import React from "react";
import { LayoutGrid } from "../ui/layout-grid";

function Benifits() {
  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Improved Overall Well-Being</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Taking care of your mental health can lead to a greater sense of overall well-being, allowing you to feel more content, fulfilled, and at peace with yourself and the world around you.
        </p>
      </div>
    );
  };

  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Enhanced Productivity</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Prioritizing your mental health can boost productivity levels, as a healthy mind is better equipped to focus, solve problems, and accomplish tasks efficiently and effectively.
        </p>
      </div>
    );
  };

  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Strengthened Relationships</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Investing in your mental health can lead to stronger and more meaningful connections with others, as you become more adept at communication, empathy, and understanding in your interactions.
        </p>
      </div>
    );
  };

  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Better Physical Health</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Caring for your mental health can have positive ripple effects on your physical well-being, as reducing stress, anxiety, and depression can lower the risk of various health issues and improve overall vitality and resilience.
        </p>
      </div>
    );
  };

  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
      "./img3.jpg"
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
      "./img2.jpg"
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
      "./img4.jpg"
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
      "./img5.jpg"
    },
  ];

  return (
    <div className="h-screen py-20 w-full">
       
      <LayoutGrid cards={cards} />
    </div>
  );
}

export default Benifits;
