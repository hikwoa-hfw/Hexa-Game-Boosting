import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="container text-white flex items-center bg-transparent justify-between mx-auto h-[120px] max-w-7xl text-xl">
        <div className="flex justify-evenly items-center">
          <div className="relative w-14 h-14 my-2">
            <Image src="/logo.avif" alt="logo" fill className="object-cover" />
          </div>
          <h1 className="font-semibold text-center text-2xl">Hexa Kumpeni</h1>
        </div>
        <ul className="flex gap-x-5">
          <li className="hover:text-[#8e4beb]">
            <Link href={"/"} className="hover:text-[#8e4beb]">Home</Link>
          </li>
          <li className="hover:text-[#8e4beb]">
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li className="hover:text-[#8e4beb]">
            <Link href={"/services"}>Service</Link>
          </li>
          <li className="hover:text-[#8e4beb]">
            <Link href={"/teams"}>Teams</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
