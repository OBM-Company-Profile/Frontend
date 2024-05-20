// Navigation.tsx

import React from "react";

interface NavLink {
  label: string;
  url: string;
}

interface NavigationProps {
  links: NavLink[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav>
      <div className="">
        <div className="flex flex-col lg:flex-row gap-x-6 justify-center text-center items-stretch mx-10 lg:ml-20 mt-10 my-4 lg:my-14">
          <div className="flex">
            <div className="">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium active:border-b active:border-sc06">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
