/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export const Navbar = ({ open, setOpen }) => {
  return <SimpleFloatingNav open={open} setOpen={setOpen} />;
};

const SimpleFloatingNav = ({ open, setOpen }) => {
  return (
    <nav className=" z-50 top-0 flex w-full justify-between md:px-10 fixed items-center gap-6   opacity-80  border-neutral-100 bg-red-800 p-2 text-sm text-white">
      <div className="text-xl hidden md:flex">
        Mengenal Lebih Dekat{" "}
        <span className="font-extrabold ml-1"> Bung Tomo</span>
      </div>

      <div className="flex items-center md:gap-6 gap-2 text-white mx-auto md:mx-0">
        <NavLink href="#biodata">Biodata</NavLink>
        <NavLink href="#biografimd" className="hidden md:block">
          Biografi
        </NavLink>
        <NavLink href="#biografism" className="md:hidden">
          Biografi
        </NavLink>
        <NavLink href="#tempat">Museum</NavLink>
        <NavLink href="#buku">Refrensi</NavLink>
        <JoinButton open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

const NavLink = ({ children, href, className }) => {
  return (
    <a href={href} rel="nofollow" className={`${className} overflow-hidden`}>
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-white">
          {children}
        </span>
      </motion.div>
    </a>
  );
};

const JoinButton = ({ setOpen }) => {
  return (
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-neutral-200 px-4 py-1.5 font-medium
         text-white transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:border-neutral-50 hover:text-red-800
          hover:before:translate-y-[0%]
          active:scale-100`}
      onClick={() => setOpen(true)}
    >
      Disclaimer
    </button>
  );
};
