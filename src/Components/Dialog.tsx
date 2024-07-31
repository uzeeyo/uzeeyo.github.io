import { useState } from "react";
import { ProjectData } from "./Project";
import Project from "./Project";

interface Props {
  project: ProjectData;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Dialog = (props: Props) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const close = () => {
    setActiveImageIndex(null);
    props.setOpen(false);
  };

  const onGithubLinkClicked = () => {
    window.open(props.project.link, "_blank");
  };

  const onImageClicked = (event: React.MouseEvent<HTMLImageElement>) => {
    setActiveImageIndex(parseInt(event.currentTarget.id));
  };

  return (
    <>
      {props.open && (
        <div className="fixed z-50 w-full h-full text-white flex items-center justify-center">
          <div
            className="fixed w-full h-full backdrop-blur-md bg-zinc-950 bg-opacity-70 -z-10"
            onClick={close}
          ></div>
          <div className=" bg-zinc-700 rounded-lg p-6 lg:p-8 flex flex-col items-center max-w-[90%] max-h-[80%] lg:max-w-[50%]">
            <h1 className="text-4xl">{props.project.name}</h1>
            <div className="divider my-5 min-h-1 min-w-full"></div>
            <div className="flex flex-col lg:flex-row overflow-auto">
              <div className="flex flex-col">
                {props.project.videos != null && activeImageIndex == null ? (
                  <video
                    src={props.project.videos[0]}
                    className="w-[35rem]"
                    autoPlay={true}
                  ></video>
                ) : (
                  <img
                    src={props.project.images[activeImageIndex || 0]}
                    className="w-[35rem]"
                  ></img>
                )}

                <div className="flex flex-row flex-wrap my-5 gap-4 justify-center">
                  {props.project.videos && (
                    <img
                      id="99"
                      className="h-12 lg:h-20"
                      src="/images/playvideo.png"
                      onClick={onImageClicked}
                    ></img>
                  )}
                  {props.project.images.map((uri, index) => {
                    return (
                      <img
                        id={index.toString()}
                        className="h-12 lg:h-20"
                        src={uri}
                        onClick={onImageClicked}
                      ></img>
                    );
                  })}
                </div>
              </div>
              <div className="lg:mx-10 lg:mt-4 overflow-auto">
                <p className=" lg:max-w-[20rem]">{props.project.description}</p>
              </div>
            </div>
            <button
              className={
                `rounded-lg py-1 px-3 mx-auto flex items-center mt-4 border-2 ` +
                (props.project.locked
                  ? "text-disabled cursor-not-allowed border-disabled"
                  : "text-aqua border-aqua hover:bg-aqua hover:text-white")
              }
              disabled={props.project.locked}
              onClick={onGithubLinkClicked}
            >
              {props.project.locked && (
                <img className="h-6 mr-2" src="/icons/lock.svg" />
              )}
              <span className="text-lg">View on Github</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
