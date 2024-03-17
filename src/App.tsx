import React, { MouseEventHandler, useState } from "react";
import "./App.css";
import Dialog from "./Components/Dialog";
import TechIcon from "./Components/TechIcon";
import Navbar from "./Components/Navbar";

export interface ProjectData {
  name: string;
  description: string;
  images: string[];
  locked: boolean;
  link?: string;
}

const projects: Map<string, ProjectData> = new Map([
  [
    "Yog",
    {
      name: "Yog",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      images: ["/images/yog.png", "/images/precision.png", "/images/yog.png"],
      locked: true,
    },
  ],
  [
    "Precision",
    {
      name: "Precision Desktop",
      description: "Order management system for repair oriented businesses.",
      images: ["/images/precision.png"],
      locked: false,
      link: "https://github.com/uzeeyo/Precision",
    },
  ],
  [
    "oof",
    {
      name: "oof!",
      description: "Anonymous social media platform.",
      images: ["/images/oof.png"],
      locked: false,
      link: "https://github.com/uzeeyo/oof",
    },
  ],
]);

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeProjectName, setActiveProjectName] = useState("");

  const onProjectClicked = (event: React.MouseEvent<HTMLElement>) => {
    setDialogOpen(true);
    setActiveProjectName(event.currentTarget.id);
  };

  return (
    <div className="flex flex-col max-w-full">
      <Dialog
        project={projects.get(activeProjectName)!}
        open={dialogOpen}
        setOpen={setDialogOpen}
      />
      <div className="relative min-h-screen flex flex-col text-white">
        <div className="absolute bg-zinc-900 h-full w-full -z-10" />

        <div className="rgb-scroll" />
        <div className="hex-container">
          <div className="hex-row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="hex-row hex-row-offset">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="hex-row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="hex-row hex-row-offset">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="hex-row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="hex-row hex-row-offset">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="hex-row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="hex-row hex-row-offset">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="hex-row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="hex-row hex-row-offset">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="hex-row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="hex-row hex-row-offset">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
        </div>

        <Navbar />

        <div className="flex flex-col-reverse justify-end lg:justify-normal lg:flex-row lg:flex-grow relative bg-[rgba(0,0,0,0.8)] backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none min-h-screen">
          {/* Text */}
          <div className="flex flex-col px-10 lg:px-20 lg:bg-[rgba(0,0,0,0.8)] justify-center lg:backdrop-blur-sm lg:pt-20 pb-10 lg:max-w-[35rem]">
            <h3 className="text-[1.5rem] lg:text-[1.5rem]">Hey! I'm</h3>
            <h1 className="text-[2rem] lg:text-[3rem] my-2 font-bold leading-none font-robotronika">
              JORDAN MINOTT
            </h1>
            <div className="text-[1.5rem] lg:text-[2rem] text-aqua font-bold leading-none">
              A FULL-STACK DEVELOPER
            </div>
            <p className="text-lg max-w-[45rem] mt-6">
              Software is my passion. I've been building a wide range of
              applications over the last 6 years.
            </p>
          </div>

          {/* Image */}
          <div className="hex lg:h-[40rem] m-8 mt-32 lg:m-auto p-2">
            <img
              className="no-select pointer-events-none"
              src="/images/portrait.png"
            />
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 text-white">
        <div className=" flex flex-col ">
          <div
            className="py-10 lg:py-16 flex flex-col items-center"
            id="projects"
          >
            <p className="text-3xl lg:text-5xl text-center ">Projects</p>
            <div className="divider my-10 lg:my-14" />
            <div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-5 gap-y-6 lg:gap-4 px-5">
              <a
                id="Yog"
                className="lg:col-start-2 project cursor-pointer"
                onClick={onProjectClicked}
              >
                <div className="relative ">
                  <div className="absolute hover:backdrop-blur-sm hover:bg-[rgba(0,0,0,0.6)] z-10 w-full h-full transition-all text-transparent hover:text-white flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold">Yog</h3>
                    <p className="text-center  w-2/3">
                      Multiplayer strategy card game.
                    </p>
                    <div className="project-description">
                      <img className="h-8 w-8" src="/logos/c-sharp.svg" />
                      <img className="h-8 w-8" src="/logos/unity.svg" />
                      <img className="h-8 w-8" src="/logos/blender.svg" />
                      <img className="h-8 w-8" src="/logos/postgres.svg" />
                      <img
                        className="h-8 w-8"
                        src="/logos/substancePainter.svg"
                      />
                      <img
                        className="h-8 w-8"
                        src="/logos/substanceDesigner.svg"
                      />
                    </div>
                  </div>
                  <img src="/images/yog.png" />
                </div>
              </a>
              <a
                id="Precision"
                className="project cursor-pointer"
                onClick={onProjectClicked}
              >
                <div className="relative ">
                  <div className="absolute hover:backdrop-blur-sm hover:bg-[rgba(0,0,0,0.6)] z-10 w-full h-full transition-all text-transparent hover:text-white flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold">Precision Desktop</h3>
                    <p className="text-center w-2/3">
                      Order management system for repair oriented businesses.
                    </p>
                    <div className="project-description">
                      <img className="h-8 w-8" src="/logos/c-sharp.svg" />
                      <img className="h-8 w-8" src="/logos/wpf.png" />
                      <img className="h-8 w-8" src="/logos/javascript.svg" />
                      <img className="h-8 w-8" src="/logos/typescript.svg" />
                      <img className="h-8 w-8" src="/logos/postgres.svg" />
                    </div>
                  </div>
                  <img src="/images/precision.png" />
                </div>
              </a>
              <a
                id="oof"
                className="project cursor-pointer"
                onClick={onProjectClicked}
              >
                <div className="relative project">
                  <div className="absolute hover:backdrop-blur-sm hover:bg-[rgba(0,0,0,0.6)] z-10 w-full h-full transition-all text-transparent hover:text-white flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold">oof!</h3>
                    <p className="text-center w-2/3">
                      Anonymous social media platform.
                    </p>
                    <div className="project-description">
                      <img className="h-8 w-8" src="/logos/javascript.svg" />
                      <img className="h-8 w-8" src="/logos/typescript.svg" />
                      <img className="h-8 w-8" src="/logos/nextjs.svg" />
                      <img className="h-8 w-8" src="/logos/postgres.svg" />
                    </div>
                  </div>
                  <img src="/images/oof.png" />
                </div>
              </a>
            </div>
          </div>

          <div
            className="bg-zinc-950 py-10 lg:py-16 flex flex-col items-center"
            id="tech"
          >
            <p className="text-3xl lg:text-5xl text-center">Technologies</p>
            <div className="divider my-10 lg:my-14" />

            <div className="flex flex-wrap gap-10 lg:max-w-[60rem] mb-10 px-6 justify-center">
              <TechIcon name="Unity" imageUri="/logos/unity.svg" />
              <TechIcon name="React" imageUri="/logos/react.svg" />
              <TechIcon name="Blender" imageUri="/logos/blender.svg" />
              <TechIcon
                name="Substance Designer"
                imageUri="/logos/substanceDesigner.svg"
              />
              <TechIcon
                name="Substance Painter"
                imageUri="/logos/substancePainter.svg"
              />
              <TechIcon name="Git" imageUri="/logos/git.svg" />
              <TechIcon name="WPF" imageUri="/logos/wpf.png" />
              <TechIcon name="Docker" imageUri="/logos/docker.svg" />
              <TechIcon name="Next.js" imageUri="/logos/nextjs.svg" />
              <TechIcon name="Tailwind" imageUri="/logos/tailwind.svg" />
              <TechIcon name="Node.js" imageUri="/logos/nodejs.svg" />
            </div>
          </div>

          <div className="py-10 lg:py-16 flex flex-col items-center">
            <p className="text-3xl lg:text-5xl text-center">Languages</p>
            <div className="divider my-10 lg:my-14" />
            <div className="flex flex-wrap gap-10 max-w-[60rem] justify-center">
              <TechIcon name="C#" imageUri="/logos/c-sharp.svg" />
              <TechIcon name="Postgres" imageUri="/logos/postgres.svg" />
              <TechIcon name="Javascript" imageUri="/logos/javascript.svg" />
              <TechIcon name="Typescript" imageUri="/logos/typescript.svg" />
              <TechIcon name="Go" imageUri="/logos/golang.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
