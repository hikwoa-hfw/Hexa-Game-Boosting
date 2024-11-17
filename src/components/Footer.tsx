import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#28292a] ">
      <div className="container bg-[#28292a]  flex items-center justify-between mx-auto h-[120px] max-w-7xl text-xl">
        <div className="flex bg-[#28292a] justify-evenly items-center">
          <div className="relative bg-[#28292a]  w-14 h-14 my-2">
            <Image
              src="/logo.avif"
              alt="logo"
              fill
              className="bg-[#28292a] object-cover"
            />
          </div>
          <h1 className="font-semibold text-center bg-[#28292a] text-2xl">
            Hexa Kumpeni
          </h1>
        </div>
        <ul className="flex bg-[#28292a] gap-x-5">
          <li className="hover:text-[#8e4beb] bg-[#28292a] ">Home</li>
          <li className="hover:text-[#8e4beb] bg-[#28292a] ">About Us</li>
          <li className="hover:text-[#8e4beb] bg-[#28292a] ">Services</li>
          <li className="hover:text-[#8e4beb] bg-[#28292a] ">Teams</li>
        </ul>
      </div>
      <div className="container bg-[#28292a] border-t-gray-600 border-t-2 flex items-center justify-between mx-auto h-[120px] max-w-7xl text-xl">
        <div className="flex bg-[#28292a] justify-evenly items-center">
          <h1 className="font-thin text-center text-gray-500 bg-[#28292a] text-sm">
            Made by Hexa Kumpeni Ltd.
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
