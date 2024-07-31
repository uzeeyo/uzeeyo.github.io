import { ProjectData } from "./Project";

interface Tech {
  name: string;
}

export default function ProjectIcon(techName: Tech) {
  return <img className="h-8 w-8" src={`/logos/${techName.name}.svg`} />;
}
