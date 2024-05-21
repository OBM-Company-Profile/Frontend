function Footer() {
  return (
    <footer className="bg-pr00">
      {/*  */}
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="/">
              <img className="size-16" src="/logo_obm.png" alt="" />
              <span className="mt-6 text-sm lg:text-base uppercase font-raleway font-bold">
                PT. Orela Bahari Mandiri
              </span>
            </a>{" "}
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm  font-montserrat text-ne02">
                Jl. Tenggiri No 103 D, Tanjung Priok,
              </p>
              <p className="text-sm  font-montserrat text-ne02">
                Jakarta Utara, 14320 Indonesia
              </p>
            </div>
          </div>
          <div>
            <p className="text-base font-raleway uppercase font-bold tracking-wide text-ne02">
              Layanan
            </p>
            <div className="items-center mt-1">
              <div className="flex my-2">
                <a
                  href="/layanan/shipping"
                  aria-label="Shipping"
                  title="Layanan Shipping"
                  className="font-montserrat uppercase font-medium text-sm text-ne02 hover:text-sc06">
                  Shipping
                </a>
              </div>
              <div className="flex mb-2">
                <a
                  href="/layanan/marine"
                  aria-label="Marine"
                  title="Layanan Kelautan"
                  className="font-montserrat uppercase font-medium text-sm text-ne02 hover:text-sc06">
                  Marine
                </a>
              </div>
              <div className="flex mb-2">
                <a
                  href="/layanan/port-service"
                  aria-label="Port Service"
                  title="Layanan Pelabuhan"
                  className="font-montserrat uppercase font-medium text-sm text-ne02 hover:text-sc06">
                  Port Service
                </a>
              </div>
              <div className="flex mb-2">
                <a
                  href="/layanan/logistik"
                  aria-label="Logistic"
                  title="Layanan Logistik"
                  className="font-montserrat uppercase font-medium text-sm text-ne02 hover:text-sc06">
                  Logistic
                </a>
              </div>
              <div className="flex">
                <a
                  href="/layanan/konsultan"
                  aria-label="Consultant"
                  title="Layanan Konsultan Kelautan"
                  className="font-montserrat uppercase font-medium text-sm text-ne02 hover:text-sc06">
                  Konsultan & Marine Correspondent
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-raleway uppercase font-bold tracking-wide text-ne02">
              Kontak
            </p>
            <div className="flex">
              <p className="mr-1 font-montserrat text-sm text-ne02">Telp:</p>
              <a
                href="tel:"
                aria-label="Our phone"
                title="Nomor Telepon"
                className="font-montserrat text-sm text-ne02 hover:text-sc06">
                850-123-5021
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 font-montserrat text-sm text-ne02">HP:</p>
              <a
                href="https://wa.me/628121919822"
                target="_blank"
                aria-label="Our phone"
                title="Direktur"
                className="font-montserrat text-sm text-ne02 hover:text-sc06">
                +6281-2191-9822
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 font-montserrat text-sm text-ne02">Email:</p>
              <a
                href="mailto:enquiries@orelabahari.co.id"
                aria-label="Our email"
                title="Email Perusahaan"
                className="font-montserrat text-sm text-ne02 hover:text-sc06">
                enquiries@orelabahari.co.id
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-ne02 lg:flex-row">
          <p className="text-sm font-montserrat text-ne02">
            Orela Bahari Mandiri © 2024, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
