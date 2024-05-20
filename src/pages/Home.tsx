import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Jumbotron from "../component/Jumbotron";
import Button from "../component/Button";
import Content from "../component/Content";
import Card from "../component/Card";

export default () => {
  return (
    <>
      <Navbar />
      <Jumbotron
        bgImage="./img/home_assets/banner_home.jpg"
        headCaption="Melayani berbagai kebutuhan kapal Anda"
        captionSection="Didukung keahlian serta pengalaman, PT. Orela Bahari Mandiri telah
            menangani berbagai jenis kebutuhan keagenan kapal dan pelayaran yang
            sesuai dengan kebutuhan bisnis pelanggan."
        btnAction="Company Profile"
      />
      {/* <Jumbotron /> */}

      {/*  */}
      <div className="max-w-[85rem] sm:ms-3 lg:ms-20 mt-20 px-8 sm:px-6 lg:px-10">
        <div className="grid justify-center lg:grid-cols-7 lg:gap-x-10 xl:gap-x-12 lg:content-center lg:items-center">
          <div className="text-pretty lg:col-span-4">
            <h1 className="inline-block text-3xl font-raleway font-medium text-ne02 lg:text-4xl">
              Sekilas Tentang OBM
            </h1>
            <p className="mt-8 font-montserrat text-lg text-ne02">
              PT. Orela Bahari Mandiri (OBM) sebagai perusahaan pelayaran dan
              penyedia jasa keagenan kapal yang profesional telah melayani
              berbagai permintaan kebutuhan dan jenis kapal dalam industri
              maritim di Indonesia.
            </p>
            <p className="my-6 font-montserrat text-lg text-ne02">
              Sejak berdiri tahun 2017, OBM terus berkembang hingga kini menjadi
              salah satu perusahaan agensi perkapalan yang diperhitungkan dan
              direkomendasikan di Indonesia. OBM berkomitmen untuk memberikan
              layanan profesional yang memenuhi standar, berkualitas, dan biaya
              yang terukur secara konsisten untuk kesuksesan bisnis customer
              sebagai mitra usaha.
            </p>
            <a href="/tentang">
              <Button variant="primary">Selengkapnya</Button>
            </a>
          </div>

          <div className="lg:col-span-3 mt-10 lg:mt-0">
            <img
              className="w-auto h-auto lg:hidden"
              src="./img/home_assets/intro_mobile.jpeg"
              alt="Image Description"
            />
            <img
              className="hidden lg:inline-block lg:w-auto lg:h-auto"
              src="./img/home_assets/intro_desktop.jpeg"
              alt="Image Description"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start items-center lg:my-12 lg:ml-28 cols-2">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="p-6 w-44 h-auto lg:w-60 lg:h-52 bg-pr08 text-ne01">
            <img
              className="w-12 h-auto"
              src="./img/home_assets/icons/employee.png"
            />
            <h1 className="text-raleway font-bold text-4xl">200+</h1>
            <p className="font-montserrat font-medium py-2">Employee</p>
          </div>
          <div className="p-6 w-44 h-auto lg:w-60 lg:h-52 bg-pr00 text-ne02">
            <img
              className="w-12 h-auto"
              src="./img/home_assets/icons/branch.png"
            />
            <h1 className="text-raleway font-bold text-4xl">30+</h1>
            <p className="font-montserrat font-medium py-2">
              Branch & site in Indonesia
            </p>
          </div>
          <div className="p-6 w-44 h-auto lg:w-60 lg:h-52 bg-pr03 text-ne02">
            <img
              className="w-12 h-auto"
              src="./img/home_assets/icons/cargo-ship.png"
            />
            <h1 className="text-raleway font-bold text-4xl">1000+</h1>
            <p className="font-montserrat font-medium py-2">
              Ship Handling Per Year
            </p>
          </div>
          <div className="p-6 w-44 h-auto lg:w-60 lg:h-52 bg-sc06 text-ne01">
            <img
              className="w-12 h-auto"
              src="./img/home_assets/icons/vendor.png"
            />
            <h1 className="text-raleway font-bold text-4xl">50+</h1>
            <p className="font-montserrat font-medium py-2">
              Vendors & Share Holder
            </p>
          </div>
        </div>
      </div>
      <Content />

      <section>
        <div className="relative mx-6 my-10 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:my-20">
          <div>
            <h1 className="my-2 text-3xl font-raleway font-medium text-ne02 sm:text-4xl">
              Layanan
            </h1>
            <p className="my-8 font-montserrat text-base lg:text-lg">
              Memanfaatkan sumber daya, pengalaman, dan keahlian group kami
              menyediakan layanan keagenan dan bisnis pelayaran yang
              terintegrasi.
            </p>
          </div>
          {/* <Cards /> */}
          <div className="cards flex items-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <a
                href="/layanan/shipping"
                className="w-352 h-480 text-ne01 text-left grid bg-cover lg:w-320 xl:w-352 bg-[url('/img/home_assets/shipping.jpeg')] hover:drop-shadow-md">
                <div className="w-352 h-480 col-start-1 row-start-1 bg-ne02 lg:w-320 xl:w-352 bg-opacity-50 hover:bg-opacity-75"></div>
                <div className="p-10 col-start-1 row-start-1 mx-auto my-auto">
                  <h1 className="font-raleway font-bold text-xl pb-4">
                    Shipping
                  </h1>
                  <p className="font-montserrat font-normal text-base">
                    Kami menyediakan kapal untuk berbagai kebutuhan, seperti :
                    <ol className="list-decimal px-4">
                      <li>Kapal Cargo </li>
                      <li>Kapal Tanker</li>
                      <li>Kapal Tugboat</li>
                      <li>Kapal Crew Boat</li>
                    </ol>
                  </p>
                </div>
              </a>
              <a
                href="/layanan/shipping"
                className="w-352 h-480 text-white text-left grid bg-cover lg:w-320 xl:w-352 bg-[url('/img/home_assets/agency.jpg')] hover:drop-shadow-md">
                <div className="w-352 h-480 col-start-1 row-start-1 bg-ne02 lg:w-320 xl:w-352 bg-opacity-50 hover:bg-opacity-75"></div>
                <div className="p-10 col-start-1 row-start-1 mx-auto my-auto">
                  <h1 className="font-raleway font-bold text-xl pb-4">
                    Agency
                  </h1>
                  <p className="font-montserrat font-normal text-base">
                    OBM berpengalaman menangani Jasa Keagenan hampir semua jenis
                    kapal, namun tidak terbatas pada kegiatan bongkar muat Ship
                    to Ship di sebagian besar wilayah perairan dan pelabuhan
                    Indonesia.
                  </p>
                </div>
              </a>
              <a
                href="/layanan/marine"
                className="w-352 h-480 text-white text-left grid bg-cover lg:w-320 xl:w-352 bg-[url('/img/home_assets/offshore.jpg')] hover:drop-shadow-md">
                <div className="w-352 h-480 col-start-1 row-start-1 bg-ne02 lg:w-320 xl:w-352 bg-opacity-50 hover:bg-opacity-75"></div>
                <div className="p-10 col-start-1 row-start-1 mx-auto my-auto">
                  <h1 className="font-raleway font-bold text-xl pb-4">
                    Offshore Service
                  </h1>
                  <p className="font-montserrat font-normal text-base">
                    OBM, tidak hanya fokus pada layanan keagenan kapal liner dan
                    tramper tetapi juga melayani keagenan kapal Offshore yang
                    mampu memberikan layanan satu paket.
                  </p>
                </div>
              </a>
              <a
                href="/layanan/shipping/launch-service"
                className="w-352 h-480 text-white text-left grid bg-cover lg:w-320 xl:w-352 bg-[url('/img/home_assets/launch_service.jpeg')] bg-center hover:drop-shadow-md">
                <div className="w-352 h-480 col-start-1 row-start-1 bg-ne02 lg:w-320 xl:w-352 bg-opacity-50 hover:bg-opacity-75"></div>
                <div className="p-10 col-start-1 row-start-1 mx-auto my-auto">
                  <h1 className="font-raleway font-bold text-xl pb-4">
                    Launch Service
                  </h1>
                  <p className="font-montserrat font-normal text-base">
                    Kapal anda bisa terus berlayar sambil kami mengirimkan
                    perbekalan, suku cadang, dan penggantian crew lewat laut
                    tanpa harus menghabiskan biaya tunggu di pelabuhan.
                  </p>
                </div>
              </a>
              <a
                href="/layanan/port-service"
                className="w-352 h-480 text-white text-left grid bg-cover lg:w-320 xl:w-352 bg-[url('/img/home_assets/mooring.jpg')] hover:drop-shadow-md">
                <div className="w-352 h-480 col-start-1 row-start-1 bg-ne02 lg:w-320 xl:w-352 bg-opacity-50 hover:bg-opacity-75"></div>
                <div className="p-10 col-start-1 row-start-1 mx-auto my-auto">
                  <h1 className="font-raleway font-bold text-xl pb-4">
                    Mooring Service
                  </h1>
                  <p className="font-montserrat font-normal text-base">
                    OBM memberikan dukungan yang lengkap terhadap kebutuhan
                    bisnis pelayaran termasuk layanan Kepil dan Mooring Master
                    baik di Pelabuhan, Offshore dan kegiatan Ship to Ship.
                  </p>
                </div>
              </a>
              <a
                href="/layanan/shipping/husbandry-service"
                className="w-352 h-480 text-white text-left grid bg-cover lg:w-320 xl:w-352 bg-[url('/img/home_assets/husbandry.jpg')] bg-right hover:drop-shadow-md">
                <div className="w-352 h-480 col-start-1 row-start-1 bg-ne02 lg:w-320 xl:w-352 bg-opacity-50 hover:bg-opacity-75"></div>
                <div className="p-10 col-start-1 row-start-1 mx-auto my-auto">
                  <h1 className="font-raleway font-bold text-xl pb-4">
                    Husbandry Service
                  </h1>
                  <p className="font-montserrat font-normal text-base">
                    Layanan ini bertujuan untuk meminimalkan biaya operasional
                    kapal, khususnya penanganan awak kapal, pengiriman
                    barang-barang kebutuhan kapal dan crew dengan aman.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center mb-20">
          <div className="relative mx-6 mt-10 mb-6 px-4 lg:px-0 lg:ml-32 lg:mr-20 lg:mt-20 lg:mb-4">
            <h2 className="place-self-start inline-block text-3xl font-raleway font-medium text-ne02 lg:text-4xl pb-10">
              Mitra & Klien Kami
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4">
              {/* Client logos here */}
              <div className="flex items-center justify-center">
                <img
                  src="./img/klien_logo/pertamina.png"
                  alt="pertamina"
                  className="h-12"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="./img/klien_logo/timah.png"
                  alt="timah"
                  className="h-12"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="./img/klien_logo/shell.png"
                  alt="shell"
                  className="h-20"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="./img/klien_logo/krakatau.png"
                  alt="krakatau"
                  className="h-12"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="./img/klien_logo/sinarmas.png"
                  alt="sinarmas"
                  className="h-auto"
                />
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="./img/klien_logo/interport.png"
                  alt="interport"
                  className="h-16"
                />
              </div>
            </div>
            <div
              id="hs-show-hide-collapse-heading"
              className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-show-hide-collapse">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4">
                {/* Client logos here */}
                <div className="flex items-center justify-center">
                  <img
                    src="./img/klien_logo/hitachi.png"
                    alt="hitachi"
                    className="h-16"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="./img/klien_logo/soechi.png"
                    alt="soechi"
                    className="h-12"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="./img/klien_logo/gac.png"
                    alt="gac"
                    className="sm:mt-4 h-16"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="./img/klien_logo/lintas_samudra.png"
                    alt="lintas"
                    className="h-12"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="./img/klien_logo/pelindo.png"
                    alt="pelindo"
                    className="h-auto"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src="./img/klien_logo/oceanindo.png"
                    alt="oceanindo"
                    className="h-12"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4 mb-4 sm:mb-0">
                {/* Client logos here */}
                <div className="flex items-center justify-center">
                  <img
                    src="./img/klien_logo/Marunda.png"
                    alt="marunda"
                    className="h-16"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="./img/klien_logo/bahtera.png"
                    alt="bahtera"
                    className="h-20"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="./img/klien_logo/MedcoEnergi.png"
                    alt="medco"
                    className="h-16"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="./img/klien_logo/indika.png"
                    alt="indika"
                    className="h-32"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="./img/klien_logo/apm.png"
                    alt="apm"
                    className="h-auto"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <img
                    src="./img/klien_logo/pertama_jaya.png"
                    alt="pertamajaya"
                    className="h-12"
                  />
                </div>
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
      </section>
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
