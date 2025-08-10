import React from "react";

const FooterMain = () => {
  const Links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Project", section: "project" },
    { link: "Contact", section: "contact" },
  ];

  return (
    <div className="px-4 ">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-lightGrey">Dhaval Joshi</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {Links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FooterMain;
