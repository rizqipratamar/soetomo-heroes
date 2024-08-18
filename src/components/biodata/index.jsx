import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Biodata = () => {
  return (
    <div className="lg:flex w-full gap-2 place-content-center justify-start  lg:p-10 p-2 text-slate-900">
      <div className="w-full lg:w-2/5">
        <TiltCard />
      </div>

      <div className="w-full lg:w-3/5">
        <PeranPentingCard />
        <PekerjaanCard />
      </div>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[700px] justify-center w-full rounded-xl bg-gradient-to-br from-slate-100 to-gray-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-2 grid  rounded-xl bg-white shadow-lg pb-52"
      >
        <img
          src="sutomo-1.png"
          alt=""
          className="mx-auto rounded-md absolute top-[-12%] left-0 right-0"
        />

        <div className="text-left mt-52 grid grid-cols-[1fr_auto_2fr] gap-1 lg:px-4 px-2">
          <div className="col-span-3 font-extrabold text-xl">
            Biodata Sutomo
          </div>
          <hr className="col-span-3" />
          <div className="font-bold">Nama</div>
          <div>:</div>
          <div>Sutomo</div>
          <div className="font-bold">Julukan</div>
          <div>:</div>
          <div>Bung Tomo</div>
          <div className="font-bold">Lahir</div>
          <div>:</div>
          <div>3 Oktober 1920, Surabaya</div>
          <div className="font-bold">Meninggal</div>
          <div>:</div>
          <div>7 Oktober 1981, Padang Arafah Arab</div>
          <div className="font-bold">Asal</div>
          <div>:</div>
          <div>Surabaya, Jawa Timur</div>
          <div className="font-bold">Pekerjaan</div>
          <div>:</div>
          <div>Jurnalis, Politikus, Pahlawan Nasional</div>
          <div className="font-bold">Dikenal Sebagai</div>
          <div>:</div>
          <div>
            Pemimpin rakyat dalam Pertempuran <br /> 10 November 1945 di
            Surabaya.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PeranPentingCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[350px] justify-center w-full rounded-xl bg-gradient-to-br from-slate-100 to-gray-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-2 grid  rounded-xl bg-white shadow-lg"
      >
        <div className="text-left grid grid-cols-1 gap-1 lg:px-4 px-2  pb-10">
          <div className="font-extrabold mt-10 text-xl">Peran Penting</div>
          <hr />
          <div className="font-extrabold">
            Pidato Bersejarah
            <br />
            <span className="font-normal">
              Mengutip bagian-bagian penting dari pidato Bung Tomo yang paling
              terkenal, yang berhasil menggerakkan massa.
            </span>
          </div>

          <div className="font-extrabold">
            Strategi Propaganda
            <br />
            <span className="font-normal">
              Bagaimana Bung Tomo menggunakan radio sebagai alat propaganda yang
              efektif.
            </span>
          </div>

          <div className="font-extrabold">
            Simbol Perjuangan
            <br />
            <span className="font-normal">
              Menjelaskan mengapa Bung Tomo menjadi simbol perlawanan rakyat
              Indonesia.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PekerjaanCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[350px] justify-center w-full rounded-xl bg-gradient-to-br from-slate-100 to-gray-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-2 grid  rounded-xl bg-white shadow-lg"
      >
        <div className="text-left grid grid-cols-1 gap-1 lg:px-4 px-2  pb-10">
          <div className="font-extrabold mt-10 text-xl">Pekerjaan</div>
          <hr />
          <div className="font-extrabold">
            12 Agustus 1955 - 24 Maret 1956
            <br />
            <span className="font-normal">
              Menteri Negara Urusan Bekas Pejuang Indonesia
            </span>
          </div>

          <div className="font-extrabold">
            18 Januari 1956 - 24 Maret 195
            <br />
            <span className="font-normal">Menteri Sosial Indonesia</span>
          </div>

          <div className="font-extrabold">
            12 Agustus 1955 - 24 Maret 1956
            <br />
            <span className="font-normal">
              Menteri Negara Urusan Bekas Pejuang Indonesia
            </span>
          </div>

          <div className="font-extrabold">
            18 Januari 1956 - 24 Maret 1956
            <br />
            <span className="font-normal">Menteri Sosial Indonesia</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Biodata;
