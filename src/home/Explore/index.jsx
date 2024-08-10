const EXPLORE_IMG =
  "https://kripto.ajaib.co.id/wp-content/uploads/2024/08/image-69.png";

const EXPLORE_MOBILE =
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/image-71.png";

const Explore = () => {
  return (
    <>
      <div className="w-full px-6 md:px-[120px]  grid grid-cols-1 text-center py-10 lg:py-20 justify-center align-middle">
        <h2 className="font-gabarito text-[40px] lg:text-[64px] leading-[52px] font-extrabold mx-auto text-[#06090D] mb-10">
          Jelajahi aset <br className="lg:hidden" />
          kripto populer
        </h2>
        <div className="lg:p-10  rounded-3xl grid grid-cols-1 gap-8 lg:border lg:border-[#7325F8] ">
          <img src={EXPLORE_IMG} className="hidden lg:flex" />

          <img src={EXPLORE_MOBILE} className="flex mx-auto lg:hidden " />

          <div className="!text-left !text-tertiary !text-xs lg:!text-[18px] !leading-6 !font-light lg:!flex justify-between">
            <div>
              <p className="!font-normal !m-0 !p-0">
                * Perfoma Aset Kripto Aug 2023 - Jul 2024.
              </p>
              <p className="!font-normal !m-0 !p-0">
                ** Investasi aset kripto mengandung risiko. Hasil aset di masa
                lalu tidak mencerminkan masa depan.
              </p>
            </div>
            <a href="https://kripto.ajaib.co.id/market-price/">
              <button className="!px-6 !py-2 !w-full !mt-6 lg:!mt-0 lg:!max-w-[300px] text-[#3A83F9] !border !border-1 border-[#3A83F9] !font-bold !rounded-full hover:!opacity-80">
                Lihat 200+ Aset Kripto Lainnya
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
