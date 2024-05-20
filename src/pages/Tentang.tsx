import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Card from "../component/Card";
import Timeline from "../component/Timeline";
import "../App.css";

export default () => {
  const tabs = [
    {
      label: "2017",
      content: (
        <div className="font-montserrat text-base lg:text-lg">
          <ul className="pl-4 list-disc">
            <li>PT. OBM didirikan sebagai perusahaan keagenan kapal</li>
            <li>Agen pendukung armada PT. PGN LNG FSRU Lampung (Novasi)</li>
            <li>
              Agen pendukung armada PT. Timah Tbk Kepulauan Bangka (Novasi)
            </li>
            <li>
              Terdaftar sebagai agen di PT. Pelabuhan Indonesia 2 (Persero)
              Tanjung Priok
            </li>
            <li>
              Terdaftar sebagai mitra tetap PT. Bank Mandiri Persero pengguna
              layanan CMS (<i>cash management system</i>)
            </li>
          </ul>
        </div>
      ),
    },
    {
      label: "2018",
      content: (
        <div className="font-montserrat text-base lg:text-lg">
          <ul className="pl-4 list-disc">
            <li>
              Mendirikan cabang di Marunda, Kepulauan Seribu, dan Maringgai
            </li>
            <li>Agen armada pendukung PT. Timah. Tbk, Tanjung Balai, Riau</li>
            <li>
              Agen armada pendukung PT. FSRU PGN LNG Lampung selama periode
              2018-2019
            </li>
            <li>Terdaftar sebagai agen PT. MCT Marunda</li>
            <li>Terdaftar sebagai agen PT. Terminal Vopak Jakarta</li>
          </ul>
        </div>
      ),
    },
    {
      label: "2019",
      content: (
        <div className="font-montserrat text-base lg:text-lg">
          <ul className="pl-4 list-disc">
            <li>Mendirikan cabang di Samarinda dan Balikpapan</li>
            <li>
              Agen kapal milik PT. Lintas Borneo di wilayah Kalimantan Timur
            </li>
            <li>
              Perpanjangan kontrak agen armada pendukung PT. Timah Tbk & PT.
              FSRU PGN LNG Lampung periode 2019-2020
            </li>
            <li>Bermitra dengan Bank BNI</li>
            <li>
              Menjadi agen dengan layanan kapal ekspor terbanyak di Pelabuhan
              MCT Marunda
            </li>
            <li>Terdaftar sebagai agen terminal PT. Interport</li>
          </ul>
        </div>
      ),
    },
    {
      label: "2020",
      content: (
        <div className="font-montserrat text-base lg:text-lg">
          <ul className="pl-4 list-disc">
            <li>
              Launching sistem digitalisi operasional, keuangan internal, &
              eksternal selama pandemi Covid 19
            </li>
            <li>
              Perpanjangan kontrak agen armada pendukung PT. Timah Tbk & PT. PGN
              LNG FSRU Lampung pada periode 2020-2021
            </li>
            <li>
              Sebagai pengguna pertama Cash Management Sistem Pelindo IV
              Balikpapan dengan Bank BNI
            </li>
          </ul>
        </div>
      ),
    },
    {
      label: "2021",
      content: (
        <div className="font-montserrat text-base lg:text-lg">
          <ul className="pl-4 list-disc">
            <li>Mendirikan cabang di Tana Grogot</li>
            <li>
              Perpanjang kontrak armada pendukung PT. Timah Tbk & PT. PGN LNG
              FSRU Lampung periode 2021-2022
            </li>
            <li>
              OBM mendapat tambahan modal untuk pengembangan usaha oleh Bank BNI
              melalui Program Pembiayaan Pelabuhan
            </li>
          </ul>
        </div>
      ),
    },
    {
      label: "2022",
      content: (
        <div className="font-montserrat text-base lg:text-lg">
          <ul className="pl-4 list-disc">
            <li>Mendirikan cabang di Cirebon dan Patimban</li>
            <li>
              Memenangkan tender vendor Mooring/Unmooring Pelabuhan Tanjung
              Priok periode 2022-2023{" "}
            </li>
            <li>
              Ditunjuk sebagai agen, stevedore dan Trucking untuk penyedia
              perakitan Hitachi Machinery Construction
            </li>
            <li>
              Mendukung penanganan kargo dan pengiriman tenaga listrik untuk
              PetroVietnam Power Ha Tinh di bawah PT. Sulzer
            </li>
            <li>
              Sebagai agen pertama Operasi STS kapal Kargo Curah Cair di Muara
              Berau
            </li>
          </ul>
        </div>
      ),
    },
    {
      label: "2023",
      content: (
        <div className="font-montserrat text-base lg:text-lg">
          <ul className="pl-4 list-disc">
            <li>
              Memenangkan tender Mooring/Unmooring di pelabuhan Tanjung Priok
              periode 2023-2024
            </li>
            <li>
              Perpanjangan kontrak agen armada pendukung PT. PGN LNG FSRU
              Lampung selama periode 2023-2024
            </li>
            <li>Penambahan armada kapal crew boat 60 pack</li>
            <li>Terdaftar sebagai agen PT. MCT Marunda</li>
            <li>Terdaftar sebagai anggota INSA</li>
          </ul>
        </div>
      ),
    },
    {
      label: "2024",
      content: (
        <div className="font-montserrat text-base lg:text-lg">
          <ul className="pl-4 list-disc">
            <li>Ditunjuk sebagai agen PT. SPIL di Merak</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <Banner
        bgImage="./img/tentang_assets/tentang_banner.JPG"
        headCaption="Tentang OBM"
        captionSection="OBM didirikan dan melewati masa-masa sulit sejak tahun 2017, 
        namun mampu bertahan melalui krisis & pandemi COVID-19 di tahun 2019 dan terus 
        sampai saat ini."
      />
      <div className="relative">
        <section className="bg-pr09 overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div className="overflow-y-auto relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
              <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
                <h1 className="pb-8 text-3xl font-raleway text-medium text-ne01 sm:text-4xl">
                  Profil Perusahaan
                </h1>
                <p className="font-montserrat text-lg text-ne01 pb-6">
                  PT. Orela Bahari Mandiri (OBM) merupakan perusahaan Pelayaran
                  dan Jasa Keagenan Kapal yang didirikan tahun 2017.
                </p>
                <p className="font-montserrat text-lg text-ne01 pb-6">
                  Latar belakang yang sama di antara para pendiri telah
                  mendorong Dharma Kala’ Tiku sebagai inisiator bersama para
                  koleganya untuk mendirikan OBM, dimulai dari jasa keagenan
                  kapal, hingga kini bertumbuh sebagai satu perusahaan Pelayaran
                  yang profesional serta diperhitungkan dalam industri maritim
                  Indonesia dengan pengembangan di bidang terkait.
                </p>
                <p className="font-montserrat text-lg text-ne01 pb-6">
                  Sejak didirikan di 2017, PT. OBM melewati masa-masa sulit,
                  namun mampu bertahan, bahkan melalui pandemi COVID-19 di tahun
                  2019 dan terus berkembang sampai saat ini. Krisis selalu
                  membawa perubahan dan kami belajar dari masa lalu untuk
                  menghadirkan layanan yang beradaptasi dengan kebutuhan
                  pelanggan.
                </p>
                <p className="font-montserrat text-lg text-ne01 pb-6">
                  OBM berkomitmen untuk memberikan yang terbaik dalam mendukung
                  kesuksesan customer sebagai mitra usaha. Dengan semangat
                  kemitraan dan tujuan yang sederhana yaitu menjadi perusahaan
                  yang berkarakter, OBM telah mampu melayani kebutuhan hampir
                  semua jenis kapal di berbagai wilayah Negara Indonesia.
                </p>
              </div>
            </div>
            <div className="relative w-full overflow-hidden lg:order-2 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full scale-100 brightness-50"
                  src="./img/tentang_assets/caption.JPG"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="mx-6 py-10 px-4 lg:mx-32 lg:mb-24">
          <h1 className="font-raleway text-3xl sm:text-4xl text-ne02 py-4 sm:py-8">
            Milestone
          </h1>
          <div className="items-center justify-center">
            <Timeline tabs={tabs} />
          </div>
        </div>
      </section>

      <section>
        <div
          className="relative bg-cover bg-center bg-[url('/img/tentang_assets/bg_visi_misi.jpg')] lg:h-[550px] w-full
         flex  justify-center">
          <div className="px-10 py-20 lg:px-0 lg:pl-32 lg:pr-20 lg:py-20py-8 bg-ne02 w-screen items-center h-full bg-opacity-75">
            <div className="flex flex-col lg:flex-row gap-x-10">
              <div className="mb-10 mx-0">
                <h2 className="font-raleway text-3xl font-semibold text-ne01 mb-6">
                  Visi
                </h2>
                <p className="font-montserrat text-base lg:text-lg text-ne01">
                  Menjadi prioritas pelanggan, sebagai penyedia jasa terpilih
                  untuk keagenan kapal yang bermutu, berkualitas, terpercaya,
                  dan handal.
                </p>
              </div>
              <div className="">
                <h2 className="font-raleway text-3xl font-semibold text-ne01 mb-6">
                  Misi
                </h2>
                <p className="font-montserrat text-base lg:text-lg text-ne01">
                  <ul className="list-disc">
                    <li>
                      Bekerja dengan semangat excellent di dalam semua proses
                      dan fokus pada kepuasan pelanggan tanpa mengabaikan K3L
                      serta perbaikan berkelanjutan untuk membangun kepercayaan
                      pelanggan.
                    </li>
                    <li>
                      Berusaha kompetitif dengan mempersempit jarak antara
                      persyaratan pelanggan dengan kemampuan perusahaan
                      Membangun solusi inovatif, tepat mutu, tepat waktu, dan
                      tepat anggaran.
                    </li>
                    <li>
                      Mencegah terjadinya accident maupun incident yang
                      mengakibatkan kerugian fisik maupun materi dan hilangnya
                      waktu kerja.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <section className="bg-ne01 overflow-hidden">
          <div className="mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
            <div>
              <h1 className="pb-8 text-3xl font-raleway text-medium text-ne02 sm:text-4xl">
                Value
              </h1>
              <div className="mb-10">
                <p className="hidden lg:inline-block font-montserrat text-lg text-ne02 pb-6">
                  OBM tidak mengambil keuntungan semata dari customer, namun
                  mengundang mereka sebagai mitra atau partner untuk
                  keberhasilan bersama. Kinerja professional sebagai niat yang
                  baik akan menguntungkan semua pihak dan membawa perusahaan
                  berjalan pada jalur yang sesuai untuk pencapaian nilai sosial
                  tertinggi, yaitu budaya berbagi dimulai dari kesejahteraan
                  karyawan dan pertumbuhan mitra usaha.
                </p>
                <p className="lg:hidden lg:inline-block font-montserrat text-lg text-ne02 pb-6">
                  OBM tidak mengambil keuntungan semata dari customer, namun
                  mengundang mereka sebagai mitra atau partner untuk
                  keberhasilan bersama.
                </p>
                <p className="lg:hidden lg:inline-block font-montserrat text-lg text-ne02 pb-6">
                  Kinerja professional sebagai niat yang baik akan menguntungkan
                  semua pihak dan membawa perusahaan berjalan pada jalur yang
                  sesuai untuk pencapaian nilai sosial tertinggi, yaitu budaya
                  berbagi dimulai dari kesejahteraan karyawan dan pertumbuhan
                  mitra usaha.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
                <div className="size-full bg-white border border-pr00 rounded-lg p-5">
                  <div className="flex items-center gap-x-4 mb-3">
                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-ne01 bg-pr00">
                      <img
                        className="h-10"
                        src="./img/tentang_assets/icon/trust.png"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <h3 className="block font-raleway text-base lg:text-lg font-semibold text-pr08">
                        Trust
                      </h3>
                    </div>
                  </div>
                  <p className="font-montserrat text-sm lg:text-base text-ne02">
                    Kami menciptakan hubungan yang saling menguntungkan antar
                    pihak melalui layanan yang kami berikan.
                  </p>
                </div>
                <div className="size-full bg-white border border-pr00 rounded-lg p-5">
                  <div className="flex items-center gap-x-4 mb-3">
                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-ne01 bg-pr00">
                      <img
                        className="h-10"
                        src="./img/tentang_assets/icon/commitment.png"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <h3 className="block font-raleway text-base lg:text-lg font-semibold text-pr08">
                        Commitment
                      </h3>
                    </div>
                  </div>
                  <p className="font-montserrat text-sm lg:text-base text-ne02">
                    Kesetaraan dan konsistensi dalam hubungan bisnis akan
                    bertransformasi menjadi keharmonisan layaknya keluarga.
                  </p>
                </div>
                <div className="size-full bg-white border border-pr00 rounded-lg p-5">
                  <div className="flex items-center gap-x-4 mb-3">
                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-ne01 bg-pr00">
                      <img
                        className="h-10"
                        src="./img/tentang_assets/icon/competition.png"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <h3 className="block font-raleway text-base lg:text-lg font-semibold text-pr08">
                        Challenger
                      </h3>
                    </div>
                  </div>
                  <p className="font-montserrat text-sm lg:text-base text-ne02">
                    Kompetisi merupakan kontrol kualitas kami
                  </p>
                </div>
                <div className="size-full bg-white border border-pr00 rounded-lg rounded-lg p-5">
                  <div className="flex items-center gap-x-4 mb-3">
                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-ne01 bg-pr00">
                      <img
                        className="h-10"
                        src="./img/tentang_assets/icon/team_work.png"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <h3 className="block font-raleway text-base lg:text-lg font-semibold text-pr08">
                        Team Work
                      </h3>
                    </div>
                  </div>
                  <p className="font-montserrat text-sm lg:text-base text-ne02">
                    Semua anggota tim sama pentingnya, tidak ada bagian yang
                    tidak penting.
                  </p>
                </div>
                <div className="size-full bg-white border border-pr00 rounded-lg rounded-lg p-5">
                  <div className="flex items-center gap-x-4 mb-3">
                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-ne01 bg-pr00">
                      <img
                        className="h-10"
                        src="./img/tentang_assets/icon/sharing.png"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <h3 className="block font-raleway text-base lg:text-lg font-semibold text-pr08">
                        Sharing
                      </h3>
                    </div>
                  </div>
                  <p className="font-montserrat text-sm lg:text-base text-ne02">
                    Kami adalah Orela yang berarti “titipan dari Tuhan”, yaitu
                    anugerah untuk berbagi.
                  </p>
                </div>
                <div className="size-full bg-white border border-pr00 rounded-lg p-5">
                  <div className="flex items-center gap-x-4 mb-3">
                    <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-ne01 bg-pr00">
                      <img
                        className="h-10"
                        src="./img/tentang_assets/icon/technology.png"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <h3 className="block font-raleway text-base lg:text-lg font-semibold text-pr08">
                        Technology
                      </h3>
                    </div>
                  </div>
                  <p className="font-montserrat text-sm lg:text-base text-ne02">
                    Mampu beradaptasi dengan era baru dan transformasi
                    digitalisasi teknologi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Card
        imageContent="./img/service/quotation.jpg"
        contentTitle="Quotation"
        captionText="Beritahu kebutuhan Anda melalui email"
        btnAction="Email"
      />
      <Footer />
    </>
  );
};
