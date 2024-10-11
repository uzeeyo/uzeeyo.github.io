import ProjectIcon from "./ProjectIcon";

export interface ProjectData {
  name: string;
  simpleName: string;
  description: string;
  shortDescription: string;
  images: string[];
  locked: boolean;
  link?: string;
  tech: string[];
  video?: string;
}

interface ProjectProps {
  project: ProjectData;
  projectClicked: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Project(props: ProjectProps) {
  return (
    <a
      id={props.project.simpleName}
      className="project cursor-pointer"
      onClick={props.projectClicked}
    >
      <div className="relative ">
        <div className="absolute hover:backdrop-blur-sm hover:bg-[rgba(0,0,0,0.6)] z-10 w-full h-full transition-all text-transparent hover:text-white flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold">{props.project.name}</h3>
          <p className="text-center  w-2/3">{props.project.shortDescription}</p>
          <div className="project-description">
            {props.project.tech.map((name) => {
              return <ProjectIcon name={name} />;
            })}
          </div>
        </div>
        <img src={props.project.images[0]} />
      </div>
    </a>
  );
}
