import { BsFileEarmarkText } from "react-icons/bs";

import ButtonLanguage from "../button-language";

const Navbar = () => {
  return (
    <nav className="navbar max-w-[99rem] bg-base-100 px-2 2xl:rounded-lg shadow-lg border-b border-gray-200">
      <div className="navbar-start lg:pl-2">
        <BsFileEarmarkText className="text-3xl text-base-content" />
        <p className="text-2xl text-base-content font-bold ml-2">Billing</p>
      </div>
      
      <div className="navbar-end">
        <ButtonLanguage className="mr-2"/>
      </div>
    </nav>
  );
};

export default Navbar;
