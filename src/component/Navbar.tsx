import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeClassName = "text-sc06";
  return (
    <header className="sticky top-0 sm:relative flex flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-ne01 border-b border-gray-200 text-sm sm:py-0">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 bg-pr08">
        <div className="flex items-center justify-end gap-x-5 w-full py-2">
          <a
            className="uppercase inline-flex justify-center items-center gap-2 font-medium text-ne01 hover:text-sc06 text-xs"
            href="/kontak">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z"
                clip-rule="evenodd"
              />
            </svg>
            Kontak
          </a>
        </div>
      </div>
      <nav
        className="relative max-w-7xl w-full px-4 lg:flex lg:items-center lg:justify-between"
        aria-label="Global">
        <div className="flex items-center justify-between">
          <a href="/">
            <img className="w-16 lg:mx-4 py-3" src="../img/logo_obm.png" />
          </a>
          <div className="lg:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold text-pr08 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation">
              <svg
                className="hs-collapse-open:hidden size-8"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block flex-shrink-0 hidden size-8"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block">
          <div className="flex flex-col mb-14 lg:mb-0 gap-x-0 lg:flex-row lg:items-center lg:justify-end lg:gap-y-0 sm:gap-x-7 sm:mt-0 lg:ps-7">
            <div className="border-y border-pr00 py-4 lg:border-none font-montserrat font-semibold text-pr08 lg:py-6 hover:text-sc06 uppercase">
              <NavLink
                to="/tentang"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                end>
                Tentang
              </NavLink>
            </div>
            <div className="border-b border-pr00 py-5 hs-dropdown lg:border-none [--strategy:static] lg:[--strategy:fixed] [--adaptive:none]">
              <button
                type="button"
                className="flex items-center w-full text-pr08 font-montserrat font-semibold uppercase hs-dropdown-open:border-b hs-dropdown-open:border-pr00 hs-dropdown-open:pb-4 lg:hs-dropdown-open:border-none hs-dropdown-open:border-pr00 lg:hs-dropdown-open:bg-ne01 lg:hs-dropdown-open:py-0 lg:hs-dropdown-open:text-pr08">
                Layanan
                <svg
                  className="ms-1 flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] lg:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 lg:w-48 hidden z-10 lg:border-t lg:border-pr00 bg-ne01 text-pr08 lg:shadow-md rounded-none p-2 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                <a
                  className="flex items-center gap-x-3.5 p-2 lg:px-2 lg:pt-4 lg:pb-0 text-pr03 lg:text-pr08 font-montserrat font-semibold hover:text-sc06"
                  href="/layanan/shipping">
                  Shipping
                </a>
                <a
                  className="flex items-center gap-x-3.5 p-2 lg:px-2 lg:py-3 text-pr03 lg:text-pr08 font-montserrat font-semibold hover:text-sc06"
                  href="/layanan/marine">
                  Marine
                </a>
                <a
                  className="flex items-center gap-x-3.5 p-2 lg:px-2 lg:pb-3 lg:pt-0 text-pr03 lg:text-pr08 font-montserrat font-semibold hover:text-sc06"
                  href="/layanan/port-service">
                  Port Service
                </a>
                <a
                  className="flex items-center gap-x-3.5 p-2 lg:px-2 lg:pt-0 lg:pb-3 text-pr03 lg:text-pr08 font-montserrat font-semibold hover:text-sc06"
                  href="/layanan/logistik">
                  Logistics & Transportation
                </a>
                <a
                  className="flex items-center gap-x-3.5 p-2 lg:px-2 lg:pt-0 lg:pb-6 text-pr03 lg:text-pr08 font-montserrat font-semibold hover:text-sc06"
                  href="/layanan/konsultan">
                  Konsultan & Marine Correspondent
                </a>
              </div>
            </div>
            <div className="border-b border-pr00 py-4 lg:border-none font-montserrat font-semibold text-pr08 lg:py-6 hover:text-sc06 uppercase">
              <NavLink
                to="/quality"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                end>
                Quality
              </NavLink>
            </div>
            <div className="border-b border-pr00 py-4 lg:border-none font-montserrat font-semibold text-pr08 lg:py-6 hover:text-sc06 uppercase">
              <NavLink
                to="/portofolio"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                end>
                Portofolio
              </NavLink>
            </div>
            <div className="border-b border-pr00 py-4 lg:border-none font-montserrat font-semibold text-pr08 lg:py-6 hover:text-sc06 uppercase">
              <NavLink
                to="/fasilitas"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }>
                Fasilitas
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
