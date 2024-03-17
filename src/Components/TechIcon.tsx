interface TechIconProps {
  name: string;
  imageUri: string;
}

export default function TechIcon(props: TechIconProps) {
  return (
    <div className="flex flex-col items-center ">
      <img className="w-20 h-20 lg:w-28 lg:h-28 p-2" src={props.imageUri} />
      <p className="my-4 text-xl text-wrap">{props.name}</p>
    </div>
  );
}
