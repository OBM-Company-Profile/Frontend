import React from "react";
import { NavLink } from "react-router-dom";

type NavsProps = {
  links: { path: string; label: string }[];
};

const Navs: React.FC<NavsProps> = ({ links }) => {
  const activeClassName =
    "text-sc06 lg:py-3 lg:px-1 lg:border-b lg:border-pr08";

  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-x-6 justify-center text-center items-stretch mx-10 lg:ml-20 mt-10 my-4 lg:my-14">
        {links.map((link) => (
          <div
            key={link.path}
            className="font-montserrat font-medium py-3 px-1 inline-flex border-b border-pr02 lg:border-none items-center gap-2 text-base whitespace-nowrap text-pr08 hover:text-sc06">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              end>
              {link.label}
            </NavLink>
          </div>
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default Navs;
