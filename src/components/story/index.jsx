/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";

const Story = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white flex w-full justify-center h-screen py-24 px-4 lg:px-8  items-center max-w-4xl mx-auto gap-8 lg:gap-4 overflow-hidden">
      <div className="p-4 mx-auto w-full">
        <h3 className="text-3xl font-semibold">
          {testimonials[selected]?.time}
        </h3>
        <div className="text-slate-500 my-4">
          {testimonials[selected]?.timeframe}
        </div>

        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
    </section>
  );
};

const SelectBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Story;

const testimonials = [
  {
    time: "1920 | Lahir",
    timeframe:
      "3 Oktober 1920: Bung Tomo lahir di Surabaya. Ia tumbuh dalam lingkungan keluarga yang memiliki semangat nasionalisme tinggi, yang kemudian membentuknya menjadi seorang pejuang kemerdekaan.",
  },
  {
    time: "1930-an | Pendidikan dan Awal Aktivitas",
    timeframe: (
      <span>
        1937: Bung Tomo mulai bekerja di bidang jurnalistik, sebuah langkah awal
        yang memperkuat keahliannya dalam berkomunikasi dan mempengaruhi publik.{" "}
        <br />
        1938: Bergabung dengan Kepanduan Bangsa Indonesia (KBI), di mana ia
        mulai terlibat dalam gerakan pemuda nasionalis, memperjuangkan
        kemerdekaan Indonesia.
      </span>
    ),
  },
  {
    time: "1942 - 1945 |  Masa Pendudukan Jepang",
    timeframe: `Selama pendudukan Jepang, Bung Tomo aktif dalam organisasi perlawanan dan memainkan peran penting dalam membangkitkan semangat rakyat melalui pidato-pidato yang menggugah.
Sebagai anggota Barisan Pemberontakan Rakyat Indonesia (BPRI), ia menjadi salah satu figur utama yang menentang penjajahan Jepang dan memperjuangkan kemerdekaan.
`,
  },
  {
    time: "1945 | Proklamasi Kemerdekaan dan Pertempuran Surabaya",
    timeframe: `17 Agustus 1945: Bung Tomo dengan penuh semangat menyambut proklamasi kemerdekaan Indonesia, melihatnya sebagai hasil perjuangan yang panjang.
Oktober - November 1945: Dalam Pertempuran Surabaya, ia menjadi simbol perlawanan rakyat melalui pidatonya di Radio Pemberontakan, yang memotivasi rakyat untuk berjuang mati-matian melawan tentara Sekutu.
`,
  },
  {
    time: "1950-an | Aktivitas Politik",
    timeframe: `Setelah kemerdekaan, Bung Tomo terjun ke dunia politik dan menjadi anggota DPR, di mana ia terus memperjuangkan hak-hak rakyat dan menjaga semangat revolusi.
Ia juga bergabung dengan Partai Rakyat Indonesia, membawa idealismenya untuk menciptakan pemerintahan yang adil dan demokratis.`,
  },
  {
    time: "1970-an | Kritik terhadap Pemerintah",
    timeframe: `Bung Tomo menjadi kritikus tajam terhadap pemerintahan Orde Baru, tidak ragu untuk menyuarakan pandangannya tentang kebijakan yang dianggapnya menyimpang dari semangat kemerdekaan.
Sikapnya yang tegas dan kritis membuatnya dihormati sekaligus kontroversial di mata banyak orang.`,
  },
  {
    time: "1981 | Wafat",
    timeframe: `7 Oktober 1981: Bung Tomo meninggal dunia saat menunaikan ibadah haji, sebuah akhir yang khidmat bagi seorang pejuang yang dikenal religius. 10 November 1981: Ia dimakamkan di Taman Makam Pahlawan, Surabaya, tepat pada peringatan Hari Pahlawan, sebuah penghormatan terakhir untuk kontribusinya yang besar bagi bangsa.`,
  },
  {
    time: "2008 | Gelar Pahlawan Nasional",
    timeframe: `2008: Bung Tomo dianugerahi gelar Pahlawan Nasional oleh pemerintah Indonesia, sebuah pengakuan atas peran vitalnya dalam mempertahankan kemerdekaan dan melawan penjajahan.`,
  },
];
