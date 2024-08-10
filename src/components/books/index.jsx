/* eslint-disable react/prop-types */
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Books = () => {
  return (
    <>
      <div className="flex h-48 flex-col items-center justify-center bg-slate-900">
        <span className="font-semibold uppercase text-white">
          Refrensi Buku
        </span>
        <span className="mt-2 block rounded-full bg-indigo-600 px-4 py-1 text-center font-medium text-white md:hidden">
          Note: This is much cooler on desktop 😊
        </span>
      </div>
      <SwapColumnFeatures />
      <div className="flex h-48 items-center justify-center bg-indigo-600">
        <span className="font-semibold uppercase text-white">Scroll up</span>
      </div>
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({ featureInView }) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({ setFeatureInView, featureInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-7/12 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-orange-600 px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-2xl font-bold">{featureInView.title}</p>
          <p className="text-slate-600 ">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }) => {
  return (
    <div className="relative h-96 w-full bg-transparent justify-center flex">
      <div className="bg-white rounded-lg shadow-2xl w-72 h-96 shadow-2xl">
        <img
          src={featureInView?.img}
          alt=""
          className="rounded rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

const features = [
  {
    id: 1,
    callout: "Abdul Wahid",
    title: "Hidup dan Mati Pengobar Semangat Tempur 10 November",
    description:
      "Ringkasan buku ini menceritakan tentang Bung Tomo, seorang pahlawan nasional Indonesia yang terkenal karena perannya dalam Pertempuran Surabaya pada 10 November 1945. Buku ini mengulas perjalanan hidupnya, mulai dari keterlibatannya dalam gerakan kemerdekaan hingga menjadi pemimpin militer yang menginspirasi rakyat melalui orasi di radio. Selain itu, buku ini juga membahas karier politiknya, termasuk posisinya sebagai Menteri Negara dan anggota Konstituante, serta sikap kritisnya terhadap kebijakan Soekarno dan Suharto. Buku ini menggambarkan Bung Tomo sebagai tokoh yang berpengaruh dalam sejarah perjuangan Indonesia dan perannya dalam mempertahankan kemerdekaan.",
    contentPosition: "r",
    img: "https://cdn.gramedia.com/uploads/items/9786024074920_Bung-Tomo.jpg",
  },
  {
    id: 2,
    callout: "Tempo",
    title: "Buku Saku Tempo: Bung Tomo",
    description:
      "Sutomo atau Bung Tomo adalah tokoh “pemberontak” termasyhur. Kehadirannya jadi simbol perlawanan dalam pertempuran 10 November 1945. Ia lantas kerap mengkritik Orde Baru, terutama soal korupsi dan penyalahgunaan kekuasaan. Selepas masa perjuangan, Ia masih membela kepentingan buruh dan pedagang kecil yang terancam hak-haknya di pengadilan. Naik haji dengan menggadaikan lukisan, perjalanan hidup Bung Tomo berakhir di Arafah.",
    contentPosition: "l",
    img: "https://cdn.gramedia.com/uploads/items/9786024243654_buku-saku-tempo_bung-tomo.jpg",
  },
  {
    id: 3,
    callout: "Fery Taufiq",
    title:
      "Pekik Takbir Bung Tomo : Perjalanan Hidup, Kisah Cinta & Perjuangan",
    description:
      "Pertempuran Surabaya pada 10 November 1945 tidak bisa terlupakan di ingatan masyarakat IndonesIa. Cucuran keringat dan darah bahkan nyawa bersatupadu dengan sumpah 'merdeka atau mati'.Hari itu diperingati sebagai Hari Pahlawan. Dan, Surabaya telah dicatat oleh dunia bahwa orang pribumi memiliki satu nyali 'wani'. Ada oknum yang menggerakkan pasukan wani wati berdiri di tengah-tengah letupan rudal. Salah satunya adalah Bung Tomo. kisah perjuangan Bung Tomo dalam menggerakkan perlawanan terhadap penjajah selalu terkenang di jiwa rakyat Indonesia.",
    contentPosition: "r",
    img: "https://cdn.gramedia.com/uploads/items/pekik.jpg",
  },
];

export default Books;
