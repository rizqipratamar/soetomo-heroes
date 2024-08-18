/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "./components/nabvar";
import useSound from "use-sound";

import sound from "./sound/pidato.mp3";

import Biodata from "./components/biodata";
import Timeline from "./components/timeline";
import { Maps } from "./components/maps";
import { VanishText } from "./components/vanish-text";
import Footer from "./components/footer";
import { Disclaimer } from "./components/disclaimer";
import Books from "./components/books";
import Story from "./components/story";
import { useEffect } from "react";
const App = () => {
  const [play] = useSound(sound);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    play();
  }, [play]);
  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <div className="">
        <TextParallaxContent
          imgUrl="hero-1.png"
          subheading="Bung Tomo"
          heading="Api Revolusi Arek Arek Suroboyo!"
          id="biodata"
        >
          <Biodata />
        </TextParallaxContent>
        <Story />
        <Timeline />
        <TextParallaxContent
          imgUrl="https://www.suarasurabaya.net/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-03-at-21.39.28-scaled.jpeg.webp"
          subheading="Museum"
          heading="10 Nopember"
          id="tempat"
        >
          <Maps />
        </TextParallaxContent>
      </div>
      <VanishText />
      <Books />
      <Disclaimer open={open} setOpen={setOpen} />
      <Footer open={open} setOpen={setOpen} />
    </>
  );
};

const IMG_PADDING = 0;

const TextParallaxContent = ({ imgUrl, subheading, heading, children, id }) => {
  return (
    <div
      id={id}
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden "
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 font-bold text-center text-4xl md:mb-4 md:text-7xl">
        {subheading}
      </p>
      <p className="text-center text-2xl font-bold md:text-4xl">{heading}</p>
    </motion.div>
  );
};

export default App;
