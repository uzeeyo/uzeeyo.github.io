import { ProjectData } from "../App";

interface ProjectProps {
  project: ProjectData;
  projectClicked: (project: ProjectData) => void;
}

export default function Project(props: ProjectProps) {
  const onProjectClicked = (event: React.MouseEvent<HTMLElement>) => {
    props.projectClicked(props.project);
  };

  return (
    <a
      id="Yog"
      className="lg:col-start-2 project cursor-pointer"
      onClick={onProjectClicked}
    >
      <div className="relative ">
        <div className="absolute hover:backdrop-blur-sm hover:bg-[rgba(0,0,0,0.6)] z-10 w-full h-full transition-all text-transparent hover:text-white flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold">Yog</h3>
          <p className="text-center  w-2/3">Multiplayer strategy card game.</p>
          <div className="project-description">
            <img className="h-8 w-8" src="/logos/c-sharp.svg" />
            <img className="h-8 w-8" src="/logos/unity.svg" />
            <img className="h-8 w-8" src="/logos/blender.svg" />
            <img className="h-8 w-8" src="/logos/postgres.svg" />
            <img className="h-8 w-8" src="/logos/substancePainter.svg" />
            <img className="h-8 w-8" src="/logos/substanceDesigner.svg" />
          </div>
        </div>
        <img src="/images/yog.png" />
      </div>
    </a>
  );
}
