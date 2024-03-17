import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const onMenuClicked = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="text-2xl font-bold lg:p-3 lg:bg-[#101010] fixed z-10 w-full ">
      <div className="absolute bg-[#101010] lg:hidden  w-full h-full -z-10" />
      <input type="checkbox" id="menu" hidden={true}></input>
      <label htmlFor="menu" onClick={onMenuClicked}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 458.6"
          className={`m-3 fill-aqua h-8 lg:hidden  transition-transform duration-300 ease-in-out z-50 ${
            menuOpen || "-rotate-90"
          }`}
        >
          <path d="M504.45,28.25c-10.06-17.42-28.81-28.25-48.93-28.25H56.46C36.34,0,17.59,10.82,7.53,28.25c-9.76,16.9-10.02,37.76-.85,54.9h95.86l-.04-.07h306.98l-153.49,265.85-102.66-177.81H57.4l149.67,259.23h0c10.06,17.42,28.81,28.25,48.93,28.25s38.87-10.82,48.92-28.25L504.46,84.74c10.06-17.42,10.06-39.07,0-56.49Z" />
        </svg>
      </label>

      <div
        className={`gap-4 flex flex-col lg:flex-row items-center transition-all duration-300 ease-in-out absolute -z-20 lg:z-0 lg:relative bg-[#101010] w-full lg:translate-y-0 ${
          menuOpen ? "translate-y-0" : "-translate-y-40"
        }`}
      >
        <a href="#projects">PROJECTS</a>
        <a href="#tech">TECH</a>

        {/* Icons */}
        <div className="flex flex-row gap-4 lg:ml-auto my-4 lg:my-0">
          <img
            className="w-8 h-8 cursor-pointer"
            src="/icons/github-mark-white.svg"
            onClick={() => window.open("https://github.com/uzeeyo")}
          />
          <img
            className="w-8 h-8 cursor-pointer"
            src="/icons/linkedin-white.svg"
            onClick={() => window.open("https://www.linkedin.com/in/jminott/")}
          />
          <a href="mailto:jordan@minott.dev">
            <img className="w-8 h-8 cursor-pointer" src="/icons/email.svg" />
          </a>
        </div>
      </div>
    </nav>
  );
}
