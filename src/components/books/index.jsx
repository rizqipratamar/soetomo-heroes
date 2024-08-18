/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Books = () => {
  return (
    <div className="bg-red-800 mt-16 py-12" id="buku">
      <div className="mb-8 px-4">
        <h3 className="text-slate-50 text-4xl font-semibold text-center">
          Refrensi Buku
        </h3>
        <p className="text-center text-slate-50 text-sm mt-2 max-w-lg mx-auto">
          Jasa tidak hanya dikenang, semangat juang tidak hanya dibayangkan.
          Untuk meneladani semangat juang Bung Tomo dalam kehidupan sehari-hari
          bisa dengan membaca buku yang membahas Bung Tomo.
        </p>
      </div>
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 " />

        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
        </div>

        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 " />
      </div>
    </div>
  );
};

const TestimonialList = ({ list, reverse = false, duration = 50 }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 w-[800px] shadow-sm shadow-white grid grid-cols-[16rem,_1fr] rounded-lg overflow-hidden relative"
          >
            <img src={t.img} className="w-full h-[360px] object-cover" />
            <div className="bg-white  p-4 text-left">
              <span className="block font-semibold text-lg mb-1">{t.name}</span>
              <span className="block mb-3 text-sm font-medium">{t.title}</span>
              <span className="block text-sm ">{t.info}</span>
            </div>
            <span className="text-7xl absolute top-2 right-2 text-slate-700"></span>
          </div>
        );
      })}
    </motion.div>
  );
};

const testimonials = {
  top: [
    {
      id: 1,
      img: "https://cdn.gramedia.com/uploads/items/9786024074920_Bung-Tomo.jpg",
      name: "Abdul Wahid",
      title: "Hidup dan Mati Pengobar Semangat Tempur 10 November",
      info: "Ringkasan buku ini menceritakan tentang Bung Tomo, seorang pahlawan nasional Indonesia yang terkenal karena perannya dalam Pertempuran Surabaya pada 10 November 1945. Buku ini mengulas perjalanan hidupnya, mulai dari keterlibatannya dalam gerakan kemerdekaan hingga menjadi pemimpin militer yang menginspirasi rakyat melalui orasi di radio. Selain itu, buku ini juga membahas karier politiknya, termasuk posisinya sebagai Menteri Negara dan anggota Konstituante, serta sikap kritisnya terhadap kebijakan Soekarno dan Suharto. Buku ini menggambarkan Bung Tomo sebagai tokoh yang berpengaruh dalam sejarah perjuangan Indonesia dan perannya dalam mempertahankan kemerdekaan.",
    },
    {
      id: 2,
      img: "https://cdn.gramedia.com/uploads/items/9786024243654_buku-saku-tempo_bung-tomo.jpg",
      name: "Tempo",
      title: "Buku Saku Tempo: Bung Tomo",
      info: "Sutomo atau Bung Tomo adalah tokoh “pemberontak” termasyhur. Kehadirannya jadi simbol perlawanan dalam pertempuran 10 November 1945. Ia lantas kerap mengkritik Orde Baru, terutama soal korupsi dan penyalahgunaan kekuasaan. Selepas masa perjuangan, Ia masih membela kepentingan buruh dan pedagang kecil yang terancam hak-haknya di pengadilan. Naik haji dengan menggadaikan lukisan, perjalanan hidup Bung Tomo berakhir di Arafah.",
    },
    {
      id: 3,
      img: "https://cdn.gramedia.com/uploads/items/pekik.jpg",
      name: "Fery Taufiq",
      title:
        "Pekik Takbir Bung Tomo : Perjalanan Hidup, Kisah Cinta & Perjuangan",
      info: "Pertempuran Surabaya pada 10 November 1945 tidak bisa terlupakan di ingatan masyarakat IndonesIa. Cucuran keringat dan darah bahkan nyawa bersatupadu dengan sumpah 'merdeka atau mati'.Hari itu diperingati sebagai Hari Pahlawan. Dan, Surabaya telah dicatat oleh dunia bahwa orang pribumi memiliki satu nyali 'wani'. Ada oknum yang menggerakkan pasukan wani wati berdiri di tengah-tengah letupan rudal. Salah satunya adalah Bung Tomo. kisah perjuangan Bung Tomo dalam menggerakkan perlawanan terhadap penjajah selalu terkenang di jiwa rakyat Indonesia.",
    },
  ],
};

export default Books;
