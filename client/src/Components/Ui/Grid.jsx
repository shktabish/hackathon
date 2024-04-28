import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";

export const Grid = () => {
  return (
    <div className="min-h-screen bg-[#E0E9F5] px-6 py-16 pt-36 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, children, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      The Mental Health Epidemic: Unveiling the Silent Struggle
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      <FiArrowRight />
      Learn More
    </a>
  </Block>
);

const SocialsBlock = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState({
    youtube: false,
    github: false,
    tiktok: false,
  });

  const overlayVariants = {
    hidden: { y: "100%" },
    visible: { y: 0 },
  };

  const toggleOverlay = (social) => {
    setIsOverlayOpen((prevState) => {
      const newState = { ...prevState };

      // Close all other overlays
      Object.keys(newState).forEach((key) => {
        if (key !== social) {
          newState[key] = false;
        }
      });

      // Toggle the selected overlay
      newState[social] = !prevState[social];
      return newState;
    });
  };

  return (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        onClick={() => toggleOverlay("youtube")}
        className="col-span-6 bg-[#3d4856] md:col-span-3 cursor-pointer"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white text-center"
        >
          Mental Health Taboo
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        onClick={() => toggleOverlay("github")}
        className="col-span-6 bg-[#515460] md:col-span-6 cursor-pointer"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white text-center"
        >
          Suicide Prevention
          <br></br>(+91-9820466726)
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        onClick={() => toggleOverlay("tiktok")}
        className="col-span-6 bg-[#3d4856] md:col-span-3 cursor-pointer"
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white text-center"
        >
          Self-care Practices
        </a>
      </Block>
      {Object.keys(isOverlayOpen).map((social) => (
        <motion.div
          key={social}
          className={`fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 z-50 ${
            isOverlayOpen[social] ? "" : "hidden"
          }`}
          initial="hidden"
          animate={isOverlayOpen[social] ? "visible" : "hidden"}
          variants={overlayVariants}
          transition={{ duration: 0.3 }}
          onClick={() => toggleOverlay(social)}
        >
          {/* Content for each overlay */}
          {social === "youtube" && (
            <div className="p-4 h-[70vh] flex gap-4 justify-center">
              <div className="text-white w-[50%]">
                <h3 className="font-semibold text-4xl pt-4">Mental Health Taboo: Breaking the Silence</h3>
                <p className="font-small text-lg py-3">
                The taboo around mental health refers to the social stigma and reluctance to openly discuss mental health issues due to fear, shame, or misunderstanding. This taboo often leads to individuals feeling isolated and reluctant to seek help for their mental health concerns.
                </p>
                <p className="font-small text-lg py-3">
                Cultural beliefs, stereotypes, and lack of education about mental health contribute to the perpetuation of this stigma. Breaking the taboo requires collective efforts to promote open conversations, raise awareness, and challenge misconceptions about mental illness. 
                </p>
                <p className="font-small text-lg py-3">
                By fostering understanding, empathy, and acceptance, societies can create supportive environments where individuals feel empowered to seek help and access the resources they need for their mental well-being.
                </p>
              </div>
            </div>
          )}
          {social === "github" && (
            <div className="p-4 h-[70vh] flex gap-4 justify-center">
              <div className="text-white w-[50%]">
                <h3 className="font-semibold text-4xl pt-4">Suicide Prevention: Saving Lives Through Awareness and Support</h3>
                <p className="font-small text-lg py-3">
                Suicide prevention encompasses a multifaceted approach aimed at reducing the incidence of suicide and supporting individuals in times of crisis. Central to this effort is increasing awareness about the signs of suicidal behavior, mental health conditions, and available resources for support.
                </p>
                <div class="point">
                  <p className="font-small text-lg py-3">
                  Accessible and affordable mental health services, including crisis hotlines and interventions, play a pivotal role in providing timely assistance to those in need. Additionally, fostering supportive communities and challenging the stigma surrounding mental illness are crucial steps in creating environments where individuals feel safe seeking help without fear of judgment. 
                  </p>
                </div>
                <div class="point">
                  <p className="font-small text-lg py-3">
                  Through ongoing research, evaluation, and collaboration, suicide prevention efforts strive to address the complex factors that contribute to suicidal ideation and behavior, ultimately saving lives and promoting mental well-being for all.
                  </p>
                </div>
              </div>
            </div>
          )}
          {social === "tiktok" && (
            <div className="p-4 h-[70vh] flex gap-4 justify-center">
              <div className="text-white w-[50%]">
                <h3 className="font-semibold text-4xl pt-4">Self-care Practices</h3>

                <div class="point">
                  <p className="font-small text-lg py-3">
                  Self-care practices are vital components of maintaining mental well-being in our busy lives. By prioritizing self-care, individuals can nurture their emotional, physical, and psychological health.
                
                    
                  </p>
                </div>
                <div class="point">
                  <p className="font-small text-lg py-3">
                  Engaging in regular exercise, nourishing the body with healthy foods, and ensuring adequate sleep are foundational aspects of self-care. Mindfulness techniques such as meditation help cultivate a sense of inner peace and resilience to navigate life's stressors.
                   
                  </p>
                </div>

                <div class="point">
                  <p className="font-small text-lg py-3">
                 
                   Establishing healthy boundaries, fostering social connections, and seeking professional support when needed are also crucial aspects of self-care. By incorporating these practices into daily life, individuals can cultivate greater self-awareness, reduce stress, and enhance their overall quality of life. Remember, self-care is not a luxury but a necessity for sustaining mental well-being in today's fast-paced world.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </>
  );
};

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <img src="./Group 1 (1).svg"></img>
    <p className="text-center text-lg text-zinc-400"></p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Reach out to us</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Send
      </button>
    </form>
  </Block>
);

export default Grid;
