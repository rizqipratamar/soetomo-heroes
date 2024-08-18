/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const VanishText = () => {
  return (
    <div className="px-4 py-10 text-center md:py-16">
      <h3 className="font-bold text-red-800 text-4xl  ">
        <AnimatedText
          phrases={[
            "Jangan takut kepada siapapun juga, hanya tunduk dan takutlah kepada Tuhan Yang Maha Esa.",
            "Perjuangan kita adalah perjuangan suci. Di dalamnya tidak ada tempat bagi penakut dan pengkhianat bangsa.",
            "Kita bukan bangsa tempe, kita bukan bangsa yang lemah, kita tidak akan pernah menyerah.",
            "Jangan pernah ragu bahwa kebenaran dan keadilan pasti menang, walaupun mungkin harus melewati jalan panjang dan penuh rintangan.",
            `Selama Banteng banteng Indonesia masih mempunyai darah merah, yang bisa membikin secarik kain putih menjadi merah putih.
Maka selama itu Kita tidak akan menyerah kepada siapapun juga`,
          ]}
        />
      </h3>
    </div>
  );
};

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 3;

const AnimatedText = ({ phrases }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length);
    }, WAIT_TIME);

    return () => clearInterval(intervalRef);
  }, [phrases]);

  return (
    <div className="relative w-full">
      {phrases.map((phrase) => {
        const isActive = phrases[active] === phrase;
        return (
          <motion.div
            key={phrase}
            initial={false}
            animate={isActive ? "active" : "inactive"}
            style={{
              x: "-50%",
            }}
            variants={{
              active: {
                opacity: 1,
                scale: 1,
              },
              inactive: {
                opacity: 0,
                scale: 0,
              },
            }}
            className="absolute left-1/2 top-0 w-full font-semibold lg:text-2xl text-sm"
          >
            {phrase}
          </motion.div>
        );
      })}
    </div>
  );
};
