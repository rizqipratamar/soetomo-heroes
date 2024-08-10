const EARN_IMG =
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/Artboard-35@4x.png";

const PROLITE_IMG =
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/PA_Web-Revamp-Asset_for-Ronny-13.png";

const WATCHLIST_IMG =
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/watchlist.png";

const PRICE_ALERT =
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/Artboard-43@4x.png";

const SEND_RECIVE =
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/Artboard-37@4x.png";

const TRADING_DATA =
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/PA_Web-Revamp-Asset_for-Ronny-14.png";

const SCREENER =
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/Artboard-38-copy@4x.png";

const Feature = () => {
  return (
    <>
      <div className="!w-full !px-6 lg:!px-[120px] !text-white !mt-10 !bg-gradient-to-b !from-white !to-purple-200 !pb-10 lg:!pb-20">
        <div className="!px-6 !py-10 lg:!py-10 lg:!px-10 !rounded-3xl !grid !grid-cols-1 !gap-8 lg:!grid-cols-2 !bg-purple-primary">
          <div className="!my-auto">
            <h2 className="!font-gabarito !text-white !text-[36px] lg:!text-[40px] !leading-[47px] md:!leading-[52px] !font-bold">
              Earn
            </h2>
            <p className="!text-[16px] !font-normal  lg:!text-lg !mt-4 !mb-10 !leading-[22px] lg:!leading-6">
              Nikmati pendapatan harian dengan APY rate kompetitif hingga 16%
            </p>

            <button
              className="!px-[24px] !w-full cursor-pointer !text-center lg:!w-1/2 !font-normal !py-[8px] !bg-purple-primary !text-white !border !border-1 !border-white !rounded-full hover:!opacity-80"
              onClick={() => window.open("https://kripto.ajaib.co.id/earn/")}
            >
              Pelajari lebih lanjut
            </button>
          </div>
          <div className="!flex !mx-auto !my-auto !mt-12 lg:!mt-auto">
            <img src={EARN_IMG} className="!w-[384px] !h-[300px]" />
          </div>
        </div>

        <div className="!mt-8 !grid !grid-cols-1 lg:!flex !gap-8">
          <div className="!px-6 !py-10 lg:!py-10 lg:!px-10 !rounded-3xl !grid !grid-cols-1 !gap-8 !bg-purple-tertiary !w-full lg:!w-3/5">
            <div className="!my-auto">
              <h2 className="!font-gabarito !text-[36px] lg:!text-[40px] !text-white !leading-[47px] md:!leading-[52px] !font-bold">
                Pro and Lite
              </h2>
              <p className="!mt-4 !mb-12 !font-normal !text-[16px] lg:!text-lg !leading-[22px] lg:!leading-6">
                Baik trader pemula atau professional, ada berbagai fitur
                unggulan agar trading aset kripto tetap aman dan nyaman
              </p>
              <div className="!flex !m-auto !mt-28 lg:!mt-auto">
                <img
                  src={PROLITE_IMG}
                  className="lg:!h-[300px] !h-[206px] !mx-auto !flex-shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="!p-10 !rounded-3xl !grid !grid-cols-1 !gap-8 !bg-[#FABB39] !w-full lg:!w-2/5">
            <div className="!my-auto">
              <h2 className="!font-gabarito  !text-[36px] lg:!text-[40px] !leading-[47px] md:!leading-[52px] !font-bold !text-purple-primary">
                Multiple Watchlist
              </h2>
              <p className="!text-tertiary  !font-normal !mb-12 !mt-4 !text-[16px] lg:!text-lg !leading-[22px] lg:!leading-6">
                Buat berbagai watchlist sesuai kebutuhanmu untuk memantau
                kelompok aset kripto yang berbeda
              </p>
              <div className="!flex !m-auto !mt-28 lg:!mt-auto">
                <img
                  src={WATCHLIST_IMG}
                  className="lg:!h-[300px] !h-[206px] !mx-auto !flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="!mt-8 !grid !grid-cols-1 lg:!flex !gap-8">
          <div className="!px-6 !py-10 lg:!py-10 lg:!px-10 !rounded-3xl !grid !grid-cols-1 !gap-8 !bg-[#165BCC] !w-full lg:!w-2/5">
            <div className="!my-auto">
              <h2 className="!font-gabarito !text-white !text-[36px] lg:!text-[40px] !leading-[47px] md:!leading-[52px] !font-bold">
                Customized <br />
                Price Alert
              </h2>
              <p className="!mt-4 !mb-12 !font-normal !text-[16px] lg:!text-lg !leading-[22px] lg:!leading-6">
                Tidak pernah lagi ketinggalan kesempatan trading di harga yang
                kamu inginkan
              </p>
              <div className="!flex !m-auto !mt-28 lg:!mt-auto">
                <img
                  src={PRICE_ALERT}
                  className="lg:!h-[300px] !h-[206px] !mx-auto !flex-shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="!p-10 !rounded-3xl !grid !grid-cols-1 !gap-8 !bg-[#4805A2] !w-full lg:!w-3/5">
            <div className="!my-auto">
              <h2 className="!font-gabarito !text-white !text-[36px] lg:!text-[40px] !leading-[47px] md:!leading-[52px] !font-bold">
                Transfer Aset Kripto <br />
                Aman dan Praktis
              </h2>
              <p className="!mb-12 !mt-4  !font-normal !text-[16px] lg:!text-lg !leading-[22px] lg:!leading-6">
                Nikmati mudahnya transfer aset kripto dengan keamanan kelas
                dunia
              </p>
              <div className="!flex !mt-28 !m-auto lg:!mt-auto">
                <img
                  src={SEND_RECIVE}
                  className="lg:!h-[300px] !h-[206px] !mx-auto !flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="!mt-8 !grid !grid-cols-1 lg:!flex !gap-8">
          <div className="!px-6 !py-10 lg:!py-10 lg:!px-10 !rounded-3xl !grid !grid-cols-1 !gap-8 !bg-[#FABB39] !w-full lg:!w-3/5">
            <div className="!my-auto">
              <h2 className="!font-gabarito !text-[36px] lg:!text-[40px] !leading-[47px] md:!leading-[52px] !font-bold !text-[#7325F8]">
                Trading Data
              </h2>
              <p className="!mt-4 !mb-12 !font-normal !text-[16px] lg:!text-lg !leading-[22px] lg:!leading-6 !text-tertiary">
                Informasi trading terstruktur untuk pengambilan keputusan yang
                lebih baik
              </p>
              <div className="!flex !m-auto !mt-28 lg:!mt-auto">
                <img
                  src={TRADING_DATA}
                  className="lg:!h-[300px] !h-[206px] !mx-auto !flex-shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="!p-10 !rounded-3xl !grid !grid-cols-1 !gap-8 !bg-[#5C10D1] !w-full lg:!w-2/5">
            <div className="!my-auto">
              <h2 className="!font-gabarito !text-white !text-[36px] lg:!text-[40px] !leading-[47px] md:!leading-[52px] !font-bold">
                Coin Screener
              </h2>
              <p className="!mb-12 !mt-4  !font-normal !text-[16px] lg:!text-lg !leading-[22px] lg:!leading-6">
                Ikuti tren pasar aset kripto yang sudah dikelompokkan sesuai
                kategorinya
              </p>
              <div className="!flex !m-auto !mt-28 lg:!mt-auto">
                <img
                  src={SCREENER}
                  className="lg:!h-[300px] !h-[206px] !mx-auto !flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
