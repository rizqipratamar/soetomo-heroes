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
              <i className="block mb-3 text-md font-medium">{t.title}</i>
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
      info: "Mengulas perjalanan hidupnya, mulai dari keterlibatannya dalam gerakan kemerdekaan hingga menjadi pemimpin militer yang menginspirasi rakyat melalui orasi di radio. Selain itu, buku ini juga membahas karier politiknya, termasuk posisinya sebagai Menteri Negara dan anggota Konstituante, serta sikap kritisnya terhadap kebijakan Soekarno dan Suharto.",
    },
    {
      id: 2,
      img: "https://cdn.gramedia.com/uploads/items/9786024243654_buku-saku-tempo_bung-tomo.jpg",
      name: "Tempo",
      title: "Buku Saku Tempo: Bung Tomo",
      info: "Menceritakan Bung Tomo sebagai wartawan Domei yang menjadi simbol perlawanan pada 10 November 1945 dan sering mengkritik Orde Baru. Ia membela hak buruh dan pedagang kecil, serta meninggal di Arafah setelah naik haji. Kisahnya adalah bagian dari seri 'Tokoh Militer' oleh Majalah Tempo yang mengungkap kehidupan perwira militer penting dalam sejarah Indonesia.",
    },
    {
      id: 3,
      img: "https://cdn.gramedia.com/uploads/items/pekik.jpg",
      name: "Fery Taufiq",
      title:
        "Pekik Takbir Bung Tomo : Perjalanan Hidup, Kisah Cinta & Perjuangan",
      info: "Buku ini mengisahkan Bung Tomo yang membangkitkan semangat rakyat melawan penjajah melalui pidatonya. Dibesarkan dalam keluarga kelas menengah yang menghargai pendidikan, Bung Tomo dikenal sebagai orator ulung. Merinci perjalanan hidup, termasuk perjuangannya, pernikahannya di tengah revolusi, dan kemampuan orasinya dalam memperjuangkan kemerdekaan Indonesia.",
    },
  ],
};

export default Books;
