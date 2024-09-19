import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface ImageData {
  id: number;
  imageSrc: string;
  altImage: string;
  category: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [images, setImages] = useState<ImageData[]>([]);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:3307/api/images", {
          params: { category: "home" },
        });
        setImages(response.data);
      } catch (err) {
        setError("Failed to fetch image");
      }
    };

    fetchImages();
  }, []);

  const firstImage = images[0] || { imageSrc: "", altImage: "" };

  let activeClassName = "text-sc06";
  return (
    <header className="sticky top-0 sm:relative flex flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-white border-b border-gray-200 text-sm sm:py-0">
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
                fillRule="evenodd"
                d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z"
                clipRule="evenodd"
              />
            </svg>
            Kontak
          </a>
        </div>
      </div>
      <nav className="lg:pr-6 lg:px-4 w-full relative bg-white shadow">
        <div className="flex items-center justify-between">
          <a href="/">
            <img
              className="w-16 mx-4 py-3"
              src={firstImage.imageSrc}
              alt={firstImage.altImage}
            />
          </a>
          <div className="hidden lg:flex space-x-6">
            <div className="py-4 text-sm uppercase hover:text-sc06 font-montserrat font-semibold text-pr08">
              <NavLink
                to="/tentang"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                end>
                Tentang
              </NavLink>
            </div>
            <div className="relative flex">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center w-full text-sm text-pr08 font-montserrat font-semibold uppercase">
                Layanan
                <svg
                  className="ms-1 flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute mt-16 border border-pr00 w-48 bg-white shadow-lg py-2 z-20">
                  <a
                    href="/layanan/shipping"
                    className="flex text-sm px-4 py-2 hover:text-sc06 font-montserrat font-semibold text-pr08">
                    Shipping
                  </a>
                  <a
                    href="/layanan/marine"
                    className="flex text-sm px-4 py-2 hover:text-sc06 font-montserrat font-semibold text-pr08">
                    Marine
                  </a>
                  <a
                    href="/layanan/port-service"
                    className="flex text-sm px-4 py-2 hover:text-sc06 font-montserrat font-semibold text-pr08">
                    Port Service
                  </a>
                  <a
                    href="/layanan/logistik"
                    className="flex text-sm px-4 py-2 hover:text-sc06 font-montserrat font-semibold text-pr08">
                    Logistics
                  </a>
                  <a
                    href="/layanan/konsultan"
                    className="flex text-sm px-4 py-2 pb-6 hover:text-sc06 font-montserrat font-semibold text-pr08">
                    Konsultan & Marine Correspondent
                  </a>
                </div>
              )}
            </div>
            <div className="py-4 text-sm uppercase hover:text-sc06 font-montserrat font-semibold text-pr08">
              <NavLink
                to="/quality"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                end>
                Quality
              </NavLink>
            </div>
            <div className="py-4 text-sm uppercase hover:text-sc06 font-montserrat font-semibold text-pr08">
              <NavLink
                to="/portofolio"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                end>
                Portofolio
              </NavLink>
            </div>
            <div className="py-4 text-sm uppercase hover:text-sc06 font-montserrat font-semibold text-pr08">
              <NavLink
                to="/fasilitas"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                end>
                Fasilitas
              </NavLink>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden w-8 mr-6 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer`}>
            <div
              className={`bg-pr08 block w-8 h-[3px] rounded transition-all origin-[1px] ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            />
            <div
              className={`bg-pr08 block w-8 h-[3px] rounded transition-all origin-[1px] ${
                isOpen ? "translate-x-full bg-transparent" : "translate-x-0"
              }`}
            />
            <div
              className={`bg-pr08 block w-8 h-[3px] rounded transition-all origin-[1px] ${
                isOpen ? "rotate-[-45deg]" : "rotate-0"
              }`}
            />
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden mt-2">
            <a
              href="/tentang"
              className="text-sm border-y border-pr00 p-4 block text-pr08 uppercase font-montserrat font-semibold">
              Tentang
            </a>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center justify-between border-b border-pr00 p-4 w-full text-sm font-montserrat font-semibold uppercase ${
                isDropdownOpen ? "bg-pr09 text-white border-none" : "text-pr08"
              }`}>
              Layanan
              <svg
                className={`ms-1 flex-shrink-0 w-4 h-4 transition-transform duration-300 ease-in-out transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="bg-pr07">
                <a
                  href="/layanan/shipping"
                  className="p-4 block text-sm text-white font-montserrat font-semibold">
                  Shipping
                </a>
                <a
                  href="/layanan/marine"
                  className="p-4 block text-sm text-white font-montserrat font-semibold">
                  Marine
                </a>
                <a
                  href="/layanan/port-service"
                  className="p-4 block text-sm text-white font-montserrat font-semibold">
                  Port Service
                </a>
                <a
                  href="/layanan/logistik"
                  className="p-4 block text-sm text-white font-montserrat font-semibold">
                  Logistics
                </a>
                <a
                  href="/layanan/konsultan"
                  className="p-4 block text-sm text-white font-montserrat font-semibold">
                  Konsultan & Marine Correspondent
                </a>
              </div>
            )}
            <a
              href="/quality"
              className="text-sm border-b border-pr00 p-4 block text-pr08 uppercase font-montserrat font-semibold">
              Quality
            </a>
            <a
              href="/portofolio"
              className="text-sm border-b border-pr00 p-4 block text-pr08 uppercase font-montserrat font-semibold">
              Portofolio
            </a>
            <a
              href="/fasilitas"
              className="text-sm border-b border-pr00 p-4 block text-pr08 uppercase font-montserrat font-semibold">
              Fasilitas
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
