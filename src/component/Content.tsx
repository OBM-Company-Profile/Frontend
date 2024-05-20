function Content() {
  return (
    <div className="mt-20">
      <div className="relative">
        <section className="bg-pr08 overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div className="overflow-y-auto relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
              <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
                <h1 className="pb-8 text-3xl font-raleway text-medium text-ne01 sm:text-4xl">
                  Sambutan Direksi
                </h1>
                <p className="font-montserrat font-semibold text-base lg:text-lg text-ne01 pb-6">
                  Terima kasih kepada semua Customer yang berbahagia.
                </p>
                <p className="font-montserrat text-base lg:text-lg text-ne01 pb-6">
                  Atas kepercayaan dan dukungan dari customer, OBM mendapatkan
                  pengalaman bahkan bertahan melalui krisis. Kami memberikan
                  pelayanan atas semua permintaan pelanggan secara profesional
                  dan bertanggung jawab, menjadikan tim OBM semakin
                  berpengalaman, solutif, dan inofatif untuk beradaptasi
                  memenuhi kebutuhan dan permintaan pelanggan.
                </p>
                <p className="font-montserrat text-base lg:text-lg text-ne01 pb-6">
                  “Ora et Labora” adalah prinsip hidup dan kerja kami untuk
                  mencapai visi dan misi perusahaan. Tujuan utama kami adalah
                  menjadikan pelanggan sebagai mitra kerja untuk pencapaian
                  tujuan yang sama yaitu keberhasilan.
                </p>
                <p className="font-montserrat text-lg text-ne01 pb-6">
                  Kekuatan hubungan sosial para Pendiri untuk mengelola dan
                  membimbing karyawan menjadi gaya dan identitas baru untuk
                  melayani Pelanggan sebagai Keluarga.
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden lg:order-0 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full scale-10 lg:object-center brightness-100"
                  src="./img/home_assets/sambutan.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Content;
