/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Timeline = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section
      id="biografimd"
      className="mx-auto  hidden md:flex max-w-5xl flex-col-reverse items-center gap-6 bg-white px-4 py-12 md:flex-row md:gap-12 md:px-8"
    >
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
    <div id="biografi" className="w-full shrink-0 overflow-scroll md:w-fit ">
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
    <div className="group relative w-full md:w-fit ">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full border-l-[6px] border-slate-200 p-4 transition-colors group-hover:border-slate-300 md:flex-col md:border-l-8 md:p-6"
      >
        <span
          className={`min-w-[150px] max-w-[200px] text-start text-xl font-bold transition-colors md:text-2xl ${
            selected
              ? "text-red-800"
              : "text-slate-400 group-hover:text-slate-500"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="vertical-slide-feature-slider"
          className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-red-800 md:w-2"
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
            <br />{" "}
            <span className="text-lg">
              {" "}
              Lahir di Surabaya dengan nama asli Sutomo. Masa Mudanya mulai
              menunjukkan minat pada dunia Pendidikan, aktivitas organisasi
              pemuda, dan tulis-menulis.
            </span>
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
            <br />
            <div className="text-lg">
              Mulai menulis artikel di berbagai media. Semasa muda menjadi
              jurnalis lepas untuk harian Soeara Oemoem, harian berbahasa Jawa
              Ekspres, mingguan Pembela Rakyat, dan majalah Poestaka Timoer.
              <br />
              <br />
              Beliau aktif dalam berbagai organisasi pemuda dan pergerakan
              nasional diantaranya :
              <br />
              <span className="text-lg">
                - Gerakan Rakyat Baru, sebagai anggota <br /> - Gerakan Pramuka
                Garuda, mendapat peringkat kedua di Hindia Belanda.
                <br /> - Pemuda Republik Indonesia, sebagai pengurus organisasi
                pemuda yang disponsori Jepang
              </span>
            </div>
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
            <br />{" "}
            <span className="text-lg">
              18 Agustus 1945 berita proklamasi tersebar hampir wilayah
              Surabaya. Dalam Menembus Kabut Gelap: Bung Tomo Menggugat
              diceritakan bahwa Bung Tomo bersama wartawan senior Romo Bintarti
              memberitakan Proklamasi Kemerdekaan 17 Agustus 1945 dalam tulisan
              berbahasa Jawa. Tujuannya agar mudah dimengerti warga lokal dan
              menghindari sensor balatentara Jepang. 12 Oktober 1945 membentuk
              pasukan laskar pejuang rakyat dan menjadi pemimpin Barisan
              Pemberontakan Rakyat Indonesia (BPRI) 10 November, menjadi tokoh
              sentral dalam pertempuran dengan pidato-pidatonya yang mengobar.
              Pidato-pidato yang membakar semangat juang rakyat Surabaya.
            </span>
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
            <br />{" "}
            <span className="text-lg">
              Pasca kemerdekaan, Bung Tomo terus terlibat dalam berbagai
              aktivitas politik. Ia tidak hanya berjuang di garis depan medan
              perang, tetapi juga berkontribusi dalam membangun negara melalui
              jabatan-jabatan strategis seperti Menteri Penerangan. Dedikasinya
              yang tinggi terhadap bangsa dan negara terlihat jelas dari
              berbagai upaya yang ia lakukan untuk memajukan Indonesia.
            </span>
          </>
        }
      />
    ),
  },
  {
    title: "1956",
    Feature: () => (
      <ExampleFeature
        text={
          <>
            <span className="font-bold">Pada tahun 1956: </span>
            <br />{" "}
            <div className="text-lg">
              <span>
                Beliau terpilih sebagai anggota Konstituante mewakili Partai
                Rakyat Indonesia. Namun, pada tahun 1959 Presiden Sukarno
                membubarkan Konstituante melalui Dekrit Presiden. Bung Tomo yang
                menentang keras kebijakan tersebut mulai menarik diri dari
                panggung politik aktif.
              </span>
              <br />
              <br />
              <span>
                Pada awal masa Orde Baru, Bung Tomo sempat mendukung
                pemerintahan Suharto. Namun, seiring berjalannya waktu, ia mulai
                kritis terhadap kebijakan-kebijakan yang diterapkan, salah
                satunya adalah proyek Taman Mini Indonesia Indah. Akibat sikap
                kritisnya ini, Bung Tomo ditangkap dan dipenjarakan pada tahun
                1978 atas tuduhan subversi.
              </span>
              <br />
              <br />
              <span>
                Setelah keluar dari penjara, Bung Tomo memilih untuk tidak lagi
                terlibat dalam politik aktif. Ia lebih fokus pada kehidupan
                pribadinya, terutama keluarga dan agama. Akhir hayatnya Bung
                Tomo meninggal dunia pada tahun 1981 saat menunaikan ibadah haji
                dan dimakamkan di Surabaya.
              </span>
            </div>
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
