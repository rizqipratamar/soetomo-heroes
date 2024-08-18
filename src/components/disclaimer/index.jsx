/* eslint-disable react/prop-types */
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import { BsGithub } from "react-icons/bs";

export const Disclaimer = ({ open, setOpen }) => {
  return (
    <div className="grid  place-content-center">
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400 justify-center">
          <div className="text-4xl text-center font-bold text-neutral-200  mx-auto">
            Disclaimer
          </div>
          <p>
            Website ini dibuat semata-mata untuk keperluan edukasi sebagai
            bagian dari partisipasi saya dalam Web Dev Merdeka Challenge. Tujuan
            utama saya adalah untuk belajar dan berlatih automasi CI/CD
            menggunakan bucket di CloudRaya.
          </p>
          <p>
            Aset dan gambar yang ditampilkan di website ini diambil dari
            Gramedia, Kompas, dan Suara Surabaya. Apabila ada pihak yang
            keberatan dengan penggunaan materi tersebut, mohon untuk melaporkan
            masalah melalui repository GitHub saya.
          </p>
          <p>
            Repository ini terbuka untuk umum dan dapat diakses oleh siapa saja
            yang tertarik. Selain itu, saya juga menyediakan file README.md yang
            berisi panduan cara melakukan deploy website ini ke CloudRaya
            menggunakan GitHub Actions.
          </p>

          <a
            href="https://github.com/rizqipratamar/soetomo-heroes"
            className="mx-2 text-2xl mt-20 text-white flex gap-2 transition-colors hover:text-gray-500 "
            aria-label="Github"
          >
            <BsGithub className="my-auto" /> Source Code
          </a>
        </div>

        <div className="relative h-[1000px] w-[360px] md:w-[500px] lg:w-[800px] mx-auto mt-10 rounded-xl bg-slate-800 shadow-xl">
          <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="p-2">
            <p className="font-mono text-sm text-slate-200">
              <span className="text-green-300">~</span>Example Github Action
              Script Deployment 🚀
            </p>
          </div>

          <pre className="absolute text-left h-[800px] w-[350px] md:w-[480px] lg:w-[780px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-sm text-slate-200 p-1 bg-neutral-900 rounded-lg shadow-inner overflow-auto">
            <code>
              {`name: Deploy React Vite to StorageRaya

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm install

      - name: Build the project
        run: npm run build

      - name: Install rclone
        run: sudo apt-get install -y rclone

      - name: Configure rclone
        run: |
          rclone config create storageraya s3 \\
            provider AWS \\
            access_key_id "\${{ secrets.STORAGERAYA_ACCESS_KEY_ID }}" \\
            secret_access_key "\${{ secrets.STORAGERAYA_SECRET_ACCESS_KEY }}" \\
            endpoint "https://s3-jak01.storageraya.com" \\
            region "jak01" \\
            acl "public-read"

      - name: Deploy to StorageRaya
        run: rclone sync dist/ storageraya:teseheroes --progress`}
            </code>
          </pre>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
