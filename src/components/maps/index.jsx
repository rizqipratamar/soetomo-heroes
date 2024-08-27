/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const Maps = () => {
  return (
    <>
      <div className="relative h-fit bg-slate-100">
        <Features />
      </div>

      <div className="h-[50vh]bg-slate-100 " />
    </>
  );
};

const Features = () => {
  return (
    <div className="relative mx-auto grid bg-slate-100 h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className="flex h-fit w-full flex-col text-left py-12 md:sticky md:top-0 md:h-screen">
      <span className="w-fit rounded-full mt-12 px-4 bg-red-800 font-bold py-2 text-sm uppercase text-white">
        Museum 10 November
      </span>
      <h2 className="mb-4 mt-2 text-2xl font-medium leading-tight">
        Jendela Perjuangan Arek-Arek Suroboyo
      </h2>
      <div className="text-sm text-indigo-950">
        <div>
          Didirikan untuk mengenang dan menghormati para pahlawan yang gugur
          dalam Pertempuran 10 November 1945, museum ini menjadi saksi bisu
          perjuangan rakyat Surabaya dalam merebut kemerdekaan Indonesia.
        </div>
        <div className="mt-4">
          Mengunjungi Museum 10 November akan merasakan semangat juang para
          pahlawan dan lebih menghargai perjuangan mereka dalam merebut
          kemerdekaan.
        </div>
        <div className="mt-4">
          Selain itu, museum ini juga dilengkapi dengan fasilitas modern seperti
          audio visual untuk memberikan pengalaman yang lebih interaktif.
          Beberapa koleksi bersejarah saat mengunjungi Museum 10 November
          diantaranya: <br /> <br /> - <b>Senjata-senjata</b>: Senjata api,
          pedang, dan peralatan perang lainnya yang digunakan dalam pertempuran.{" "}
          <br />- <b>Foto-foto</b>: Dokumentasi berharga tentang peristiwa 10
          November dan kehidupan para pahlawan. <br />- <b>Diorama</b>: Replika
          adegan-adegan pertempuran yang menggambarkan situasi saat itu. <br />-{" "}
          <b>Seragam dan perlengkapan</b>: Pakaian dan perlengkapan yang
          digunakan oleh para pejuang. <br />- <b>Surat-surat dan dokumen</b>:
          Koleksi dokumen penting terkait dengan peristiwa 10 November. <br />
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">
      <Gradient />

      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={5}
          content={
            <img
              alt="museum-10-november"
              className="w-full h-full rounded-xl"
              src="https://asset.kompas.com/crops/xvrNh5VPIWgmEOr2rybwci3kwtU=/0x0:986x657/750x500/data/photo/2020/01/13/5e1bed0edcc32.jpg"
            />
          }
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={5}
          content={
            <img
              alt="museum-10-november"
              className="w-full h-full rounded-xl"
              src="https://asset.kompas.com/crops/RX4Q_OUvHYZzXLnZBGOY5P-dZLo=/0x1028:3980x3681/750x500/data/photo/2022/11/08/6369c67e5d7f4.jpg"
            />
          }
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={5}
          content={
            <img
              alt="museum-10-november"
              className="w-full h-full rounded-xl"
              src="https://sewabussurabaya.com/wp-content/uploads/2020/02/Belajar-Sejarah-dari-Para-Pahlawan-di-Museum-Sepuluh-November.jpg"
            />
          }
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={5}
          content={
            <img
              alt="museum-10-november"
              className="w-full h-full rounded-xl"
              src="https://direktori.vokasi.unair.ac.id/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-15-at-16.58.04-1024x576.jpeg"
            />
          }
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={5}
          numItems={5}
          content={
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                title="museum-10-november"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.958572578533!2d112.73528777499958!3d-7.245554992760872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f93fc001bc5d%3A0x110e38d8a6c23fbe!2sMonumen%20Tugu%20Pahlawan%20dan%20Museum%20Sepuluh%20Nopember%20Surabaya!5e0!3m2!1sen!2sid!4v1723482800951!5m2!1sen!2sid"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
              />
            </div>
          }
        />
      </div>

      <Buffer />
    </div>
  );
};

const CarouselItem = ({ scrollYProgress, position, numItems, content }) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="grid aspect-video w-full  rounded-2xl bg-neutral-900"
    >
      {content}
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-indigo-50 to-indigo-50/0 md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;
