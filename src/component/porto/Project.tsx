function Project() {
  return (
    <div className="my-10 bg-transparent text-center">
      <div className="text-center">
        <h1 className="inline-block text-3xl font-raleway font-medium text-ne02 sm:text-4xl">
          Proyek
        </h1>

        <div className="flex flex-col sm:flex-row gap-x-6 items-center mx-10 sm:ml-20 shadow-md my-10 sm:mx-20">
          <div className="">
            <img
              className="h-full w-full sm:w-80"
              src="./img/portofolio/mooring.jpg"
            />
          </div>
          <div className="sm:flex-1 px-4 sm:px-0 sm:mt-4 text-left mt-6 sm:mt-10">
            <p className="font-raleway text-lg font-semibold text-pr03">
              2022-sekarang
            </p>
            <h1 className="font-raleway text-lg font-semibold sm:text-xl text-ne02 pb-4 sm:pb-6">
              Mooring/Unmooring
            </h1>
            <p className="font-montserrat text-base sm:text-lg text-ne02 pb-4">
              Pelayanan Mooring/Unmooring (jasa kepil) sisi darat pelabuhan
              Tanjung Priok wilayah barat
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-6 items-center mx-10 sm:ml-20 shadow-md my-10 sm:mx-20">
          <div className="">
            <img
              className="h-full w-full sm:w-80 sm:h-[260px]"
              src="./img/portofolio/vessel_management.jpg"
            />
          </div>
          <div className="sm:flex-1 px-4 sm:px-0 sm:mt-4 text-left mt-6 sm:mt-10">
            <p className="font-raleway text-lg font-semibold text-pr03">
              2017-2021
            </p>
            <h1 className="font-raleway text-lg font-semibold sm:text-xl text-ne02 pb-4 sm:pb-6">
              Vessel Management CB Tunas Terafulk I
            </h1>
            <p className="font-montserrat text-base sm:text-lg text-ne02 pb-4">
              Undercharter PT. PGN LNG untuk crew change & medivac FSRU Lampung
            </p>
          </div>
        </div>
      </div>
      <div
        id="hs-show-hide-collapse-heading"
        className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-show-hide-collapse">
        <div className="flex flex-col sm:flex-row gap-x-6 items-center mx-10 sm:ml-20 shadow-md  sm:mx-20">
          <div className="">
            <img
              className="h-full w-full sm:w-80 sm:h-[260px]"
              src="./img/portofolio/timah_kundur.jpeg"
            />
          </div>
          <div className="sm:flex-1 px-4 sm:px-0 sm:mt-4 text-left mt-6 sm:mt-10">
            <p className="font-raleway text-lg font-semibold text-pr03">
              2017-2020
            </p>
            <h1 className="font-raleway text-lg font-semibold sm:text-xl text-ne02 pb-4 sm:pb-6">
              Keagenan Armada Pendukung PT. Timah Kundur
            </h1>
            <p className="font-montserrat text-base sm:text-lg text-ne02 pb-4">
              Menangani keagenan kapal armada pendukung PT. Timah Kundur wilayah
              Tanjung Batu, Tanjung Balai, Selat Belia, dan Kundur
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-6 items-center mx-10 sm:ml-20 shadow-md my-10 sm:mx-20">
          <div className="">
            <img
              className="h-full w-full sm:w-80 sm:h-[260px]"
              src="./img/portofolio/timah_bangka.jpeg"
            />
          </div>
          <div className="sm:flex-1 px-4 sm:px-0 sm:mt-4 text-left mt-6 sm:mt-10">
            <p className="font-raleway text-lg font-semibold text-pr03">
              2017-2019
            </p>
            <h1 className="font-raleway text-lg font-semibold sm:text-xl text-ne02 pb-4 sm:pb-6">
              Keagenan Armada Pendukung PT. Timah Bangka
            </h1>
            <p className="font-montserrat text-base sm:text-lg text-ne02 pb-4">
              Menangani keagenan kapal armada pendukung PT. Timah Bangka
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-6 items-center mx-10 sm:ml-20 shadow-md my-10 sm:mx-20">
          <div className="">
            <img
              className="h-full w-full sm:w-80 sm:h-[260px]"
              src="./img/portofolio/pgn.jpg"
            />
          </div>
          <div className="sm:flex-1 px-4 sm:px-0 sm:mt-4 text-left mt-6 sm:mt-10">
            <p className="font-raleway text-lg font-semibold text-pr03">
              2014-sekarang
            </p>
            <h1 className="font-raleway text-lg font-semibold sm:text-xl text-ne02 pb-4 sm:pb-6">
              Keagenan PGN LNG Lampung
            </h1>
            <p className="font-montserrat text-base sm:text-lg text-ne02 pb-4">
              Menangani keagenan kapal armada pendukung PGN LNG Lampung wilayah
              kerja Maringgai, Merak, dan Jakarta
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="hs-collapse-toggle inline-flex items-center gap-x-1 text-sm font-semibold px-6 py-3 text-sm my-2 inline-flex place-items-center bg-sc06 text-ne01 hover:bg-pr03"
        id="hs-show-hide-collapse"
        data-hs-collapse="#hs-show-hide-collapse-heading">
        <span className="hs-collapse-open:hidden font-montserrat uppercase">
          Selengkapnya
        </span>
        <span className="hs-collapse-open:block hidden font-montserrat uppercase">
          Ciutkan
        </span>
      </button>
    </div>
  );
}

export default Project;
