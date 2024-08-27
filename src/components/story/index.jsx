/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";

const Story = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section
      id="biografism"
      className="bg-white  md:hidden flex w-full justify-center py-24 px-4 lg:px-8 items-center max-w-4xl mx-auto gap-8 lg:gap-4 overflow-hidden"
    >
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
            id="biografi-btn"
            aria-label="biografi-btn"
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-red-800"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5 }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-red-800"
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
    time: "1920",
    timeframe: (
      <div>
        <span className="font-bold">3 Oktober 1920 :</span>
        <br />
        <span className="text-sm">
          Lahir di Surabaya dengan nama asli Sutomo. Masa mudanya mulai
          menunjukkan minat pada dunia pendidikan, aktivitas organisasi pemuda,
          dan tulis-menulis.
        </span>
      </div>
    ),
  },
  {
    time: "1930",
    timeframe: (
      <div>
        <span className="font-bold">Perang Dunia II :</span>
        <br />
        <div className="text-sm">
          Mulai menulis artikel di berbagai media. Semasa muda menjadi jurnalis
          lepas untuk harian Soeara Oemoem, harian berbahasa Jawa Ekspres,
          mingguan Pembela Rakyat, dan majalah Poestaka Timoer.
          <br />
          Beliau aktif dalam berbagai organisasi pemuda dan pergerakan nasional
          diantaranya:
          <br />
          - Gerakan Rakyat Baru, sebagai anggota <br />
          - Gerakan Pramuka Garuda, mendapat peringkat kedua di Hindia Belanda.
          <br />- Pemuda Republik Indonesia, sebagai pengurus organisasi pemuda
          yang disponsori Jepang
        </div>
      </div>
    ),
  },
  {
    time: "1945",
    timeframe: (
      <div>
        <span className="font-bold">Proklamasi Kemerdekaan : </span>
        <br />
        <span className="text-sm">
          18 Agustus 1945 berita proklamasi tersebar hampir seluruh wilayah
          Surabaya. Dalam &quot;Menembus Kabut Gelap: Bung Tomo Menggugat&quot;
          diceritakan bahwa Bung Tomo bersama wartawan senior Romo Bintarti
          memberitakan Proklamasi Kemerdekaan 17 Agustus 1945 dalam tulisan
          berbahasa Jawa.
          <br />
          Tujuannya agar mudah dimengerti warga lokal dan menghindari sensor
          balatentara Jepang. 12 Oktober 1945 membentuk pasukan laskar pejuang
          rakyat dan menjadi pemimpin Barisan Pemberontakan Rakyat Indonesia
          (BPRI).
          <br />
          10 November, menjadi tokoh sentral dalam pertempuran dengan
          pidato-pidatonya yang mengobarkan semangat juang rakyat Surabaya.
        </span>
      </div>
    ),
  },
  {
    time: "Pasca 1945",
    timeframe: (
      <div>
        <span className="font-bold">Pasca Kemerdekaan :</span>
        <br />
        <span className="text-sm">
          Pasca kemerdekaan, Bung Tomo terus terlibat dalam berbagai aktivitas
          politik. Ia tidak hanya berjuang di garis depan medan perang, tetapi
          juga berkontribusi dalam membangun negara melalui jabatan-jabatan
          strategis seperti Menteri Penerangan.
          <br />
          Dedikasinya yang tinggi terhadap bangsa dan negara terlihat jelas dari
          berbagai upaya yang ia lakukan untuk memajukan Indonesia.
        </span>
      </div>
    ),
  },
  {
    time: "1956",
    timeframe: (
      <div>
        <span className="font-bold">Pada tahun 1956:</span>
        <br />
        <div className="text-sm">
          Bung Tomo terpilih sebagai anggota Konstituante mewakili Partai Rakyat
          Indonesia. Namun, pada tahun 1959 Presiden Sukarno membubarkan
          Konstituante melalui Dekrit Presiden. Bung Tomo yang menentang keras
          kebijakan tersebut mulai menarik diri dari panggung politik aktif.
          <br />
          Pada awal masa Orde Baru, Bung Tomo sempat mendukung pemerintahan
          Suharto. Namun, seiring berjalannya waktu, ia mulai kritis terhadap
          kebijakan-kebijakan yang diterapkan, salah satunya adalah proyek Taman
          Mini Indonesia Indah.
          <br />
          Akibat sikap kritisnya ini, Bung Tomo ditangkap dan dipenjarakan pada
          tahun 1978 atas tuduhan subversi.
          <br />
          Setelah keluar dari penjara, Bung Tomo memilih untuk tidak lagi
          terlibat dalam politik aktif dan lebih fokus pada kehidupan
          pribadinya, terutama keluarga dan agama.
          <br />
          Bung Tomo meninggal dunia pada tahun 1981 saat menunaikan ibadah haji
          dan dimakamkan di Surabaya.
        </div>
      </div>
    ),
  },
];
