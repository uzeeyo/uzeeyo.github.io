import React, { MouseEventHandler, useState } from "react";
import "./App.css";
import Dialog from "./Components/Dialog";
import TechIcon from "./Components/TechIcon";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import { ProjectData } from "./Components/Project";

const projects: ProjectData[] = [
  {
    name: "XeroByte",
    simpleName: "xerobyte",
    shortDescription: "Multiplayer strategy card game.",
    description: `XeroByte is a strategy card game. Players take turns making choices to outplay their opponent and ultimately destroy their core. The game is built in Unity with a server-authoritative architecture. \n\nAll in-game assets are custom made by myself. 
      The game is currently in development.`,
    images: ["/images/yog-capsule.png", "/images/yog-ss1.png"],
    locked: true,
    tech: [
      "c-sharp",
      "unity",
      "golang",
      "postgres",
      "docker",
      "substanceDesigner",
      "substancePainter",
    ],
    videos: ["/videos/yog-p.mp4"],
  },

  {
    name: "Precision Desktop",
    simpleName: "precision",
    shortDescription: "Order management system.",
    description:
      "An order management system for repair oriented businesses allowing users to manage orders, customers, and inventory. It was coded in C#, designed with WPF, and runs on a javascript backend using a Postgres database.",
    images: ["/images/precision.png"],
    locked: false,
    link: "https://github.com/uzeeyo/Precision",
    tech: ["c-sharp", "javascript", "typescript", "postgres"],
  },
  {
    name: "oof!",
    simpleName: "oof",
    shortDescription: "Anonymous social media platform.",
    description:
      "oof! allows users to post anonymously and interact with other users' posts. The platform is built with Next.js and uses a Postgres database. The frontend is styled with Tailwind CSS.",
    images: ["/images/oof.png"],
    locked: false,
    link: "https://github.com/uzeeyo/oof",
    tech: ["javascript", "typescript", "nextjs", "postgres", "tailwind"],
  },
];

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
        project={projects.find((x) => x.simpleName == activeProjectName)!}
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
            <div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-y-6 lg:gap-4 px-5">
              {Array.from(projects.values()).map((project) => {
                return (
                  <Project
                    project={project}
                    projectClicked={onProjectClicked}
                  />
                );
              })}
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
              <TechIcon name="SQL" imageUri="/logos/postgres.svg" />
              <TechIcon name="Go" imageUri="/logos/golang.svg" />
              <TechIcon name="Javascript" imageUri="/logos/javascript.svg" />
              <TechIcon name="Typescript" imageUri="/logos/typescript.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
