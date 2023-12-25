import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <span className="max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600">
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white group transition duration-200"
      >
        {title}
      </Link>
    </span>
  );
};

export default NavLink;
