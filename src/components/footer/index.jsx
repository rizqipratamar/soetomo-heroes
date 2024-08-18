/* eslint-disable react/prop-types */
import { BsGithub, BsMap } from "react-icons/bs";

const Footer = ({ setOpen }) => {
  return (
    <div className="w-full p-10">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-500">
          © Copyright 2024. Non Commercial Purpose, Educational Purpose.
        </p>

        <div className="flex mt-3 -mx-2 sm:mt-0">
          <a
            onClick={() => setOpen(true)}
            href="#"
            className="mx-2 flex gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="diclaimer"
          >
            <BsMap className="my-auto" /> Refrensi & Disclaimer
          </a>
          <a
            href="https://github.com/rizqipratamar/soetomo-heroes"
            className="mx-2 flex gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="github"
          >
            <BsGithub className="my-auto" /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
