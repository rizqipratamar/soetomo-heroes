const IMG_1 =
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/PA_Web-Revamp-Asset-10.png";
const IMG_2 =
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/PA_Web-Revamp-Asset-11.png";
const IMG_3 =
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/PA_Web-Revamp-Asset-12.png";

const NEWS = [
  "https://kripto.ajaib.co.id/wp-content/uploads/2024/08/80ff2793973e1605e58fd8695c842be4.png",
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/fe2d60b68cbf6c0be8f1dedf020417b5.png",
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/image-74.png",
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/image-59.png",
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/image-58.png",
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/image-61.png",
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/image-62.png",
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/image-57.png",
  "https://storage.googleapis.com/storage-ajaib-prd-coin-wp-artifact/2024/08/cb4f3126b87b74fb93ef25f817d30cff.png",
];
const PointPlus = () => {
  return (
    <>
      <div className="w-full !px-6 md:!px-[120px]  grid grid-cols-1 !text-center !pt-10 lg:pt-20 !justify-center !align-middle">
        <h2 className="font-gabarito text-[40px] lg:text-[64px] font-bold mx-auto text-[#06090D] mb-10">
          <span className="text-[#7325F8]">Kemudahan</span> dan{" "}
          <span className="text-[#7325F8]">keamanan</span> <br />
          trading di Ajaib Kripto
        </h2>
        <div className="lg:p-10 grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-3 ">
          <div className="text-center justify-center">
            <img src={IMG_1} className="w-[150px] h-[150px] mx-auto" />
            <p className="!font-gabarito !text-4xl !font-bold !p-0 !m-0">
              Aman dan Resmi
            </p>
            <p className="!text-lg !font-light !leading-6 !text-tertiary !mt-2 !p-0 !m-0">
              Ajaib Kripto terdaftar dan diawasi oleh BAPPEBTI
            </p>
          </div>
          <div className="!text-center !justify-center">
            <img src={IMG_2} className="w-[150px] h-[150px] mx-auto" />
            <p className="!font-gabarito !text-4xl !font-bold !p-0 !m-0">
              Perlindungan Aset
            </p>
            <p className="!text-lg !font-light !leading-6 !text-tertiary !mt-2 !p-0 !m-0">
              Aset kripto kamu terlindungi asuransi dari risiko kejahatan siber
            </p>
          </div>
          <div className="!text-center !justify-center">
            <img src={IMG_3} className="w-[150px] h-[150px] mx-auto" />
            <p className="!font-gabarito !text-4xl !font-bold !p-0 !m-0">
              Transaksi 24/7
            </p>
            <p className="!text-lg !font-light !leading-6 !text-tertiary !mt-2 !p-0 !m-0">
              Transaksi nyaman kapan saja, Ajaib Kripto beroperasi 24 jam sehari
            </p>
          </div>
        </div>
        <hr className="text-[#E3E8EA] mt-20" />

        <div className="!text-left">
          <p className="!text-tertiary !font-bold !text-2xl  !mt-2 !leading-8">
            Diberitakan oleh:
          </p>
        </div>
      </div>
      <div className="flex !mb-20 !mt-8 !gap-[60px] overflow-x-auto !align-middle !justify-between !space-between !whitespace-nowrap w-full">
        {NEWS.map((news, index) => (
          <img src={news} key={index} className="!h-10 !my-auto" />
        ))}
      </div>
    </>
  );
};

export default PointPlus;
