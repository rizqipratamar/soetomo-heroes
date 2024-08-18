/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Timeline = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-6 bg-white px-4 py-12 md:flex-row md:gap-12 md:px-8">
      <AnimatePresence mode="wait">
        {FEATURES.map((tab, index) => {
          return selected === index ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              key={index}
              className="w-full"
            >
              <tab.Feature />
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
      <Tabs selected={selected} setSelected={setSelected} />
    </section>
  );
};

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="w-full shrink-0 overflow-scroll md:w-fit">
      {FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

const Tab = ({ selected, title, setSelected, tabNum }) => {
  return (
    <div className="group relative w-full md:w-fit">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full border-l-[6px] border-slate-200 p-4 transition-colors group-hover:border-slate-300 md:flex-col md:border-l-8 md:p-6"
      >
        <span
          className={`min-w-[150px] max-w-[200px] text-start text-xl font-bold transition-colors md:text-2xl ${
            selected
              ? "text-red-500"
              : "text-slate-400 group-hover:text-slate-500"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="vertical-slide-feature-slider"
          className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-red-500 md:w-2"
        />
      )}
    </div>
  );
};

export default Timeline;

const FEATURES = [
  {
    title: "1920",
    Feature: () => (
      <ExampleFeature
        text={
          <>
            <span className="font-bold">3 Oktober :</span>
            <br /> Lahir di Surabaya dengan nama asli Sutomo. Masa Mudanya mulai
            menunjukkan minat pada dunia Pendidikan, aktivitas organisasi
            pemuda, dan tulis-menulis
          </>
        }
      />
    ),
  },
  {
    title: "1930",
    Feature: () => (
      <ExampleFeature
        text={
          <>
            <span className="font-bold">Perang Dunia II :</span>
            <br /> Mulai menulis artikel di berbagai media. Aktif dalam berbagai
            organisasi pemuda dan pergerakan nasional. Pengaruh Jepang,
            bergabung dengan organisasi pemuda yang disponsori Jepang.
          </>
        }
      />
    ),
  },
  {
    title: "1945",
    Feature: () => (
      <ExampleFeature
        text={
          <>
            <span className="font-bold">Proklamasi Kemerdekaan : </span>
            <br /> Aktif menyebarkan semangat kemerdekaan di Surabaya. Menjadi
            tokoh sentral dalam pertempuran 10 November, dengan pidato-pidatonya
            yang mengobar. Pidato-pidato yang membakar semangat juang rakyat
            Surabaya.
          </>
        }
      />
    ),
  },
  {
    title: "Pasca 1945",
    Feature: () => (
      <ExampleFeature
        text={
          <>
            <span className="font-bold">Pasca Kemerdekaan : </span>
            <br /> Karier politik, jabatan menteri, dan pengabdian pada bangsa.
            Terlibat dalam berbagai aktivitas politik. Menjabat sebagai Menteri
            Penerangan. Terus berjuang untuk kepentingan bangsa dan negara.
          </>
        }
      />
    ),
  },
  {
    title: "1981",
    Feature: () => (
      <ExampleFeature
        text={
          <>
            <span className="font-bold">7 Oktober : </span>
            <br /> Meninggal dunia di Padang Arafah, Arab Saudi, saat menunaikan
            ibadah haji.
          </>
        }
      />
    ),
  },
];

const ExampleFeature = ({ text }) => (
  <div className="w-full text-left">
    <span className="text-left text-2xl text-slate-700">{text}</span>
  </div>
);
