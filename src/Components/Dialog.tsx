import { useState } from "react";
import { ProjectData } from "./Project";
import Project from "./Project";

interface Props {
  project: ProjectData;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Dialog = (props: Props) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const close = () => {
    setActiveImageIndex(0);
    props.setOpen(false);
  };

  const onGithubLinkClicked = () => {
    window.open(props.project.gitLink, "_blank");
  };

  const onSteamLinkClicked = () => {
    window.open(props.project.steamLink, "_blank");
  };

  const onLinkClicked = () => {
    window.open(props.project.link, "_blank");
  };

  const onImageClicked = (event: React.MouseEvent<HTMLImageElement>) => {
    setActiveImageIndex(parseInt(event.currentTarget.id));
  };

  const getYoutubeEmbed = (url: string): JSX.Element => {
    return (
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  return (
    <>
      {props.open && (
        <div className="fixed z-50 w-full h-full text-white flex items-center justify-center">
          <div
            className="fixed w-full h-full backdrop-blur-md bg-zinc-950 bg-opacity-70 -z-10"
            onClick={close}
          ></div>

          <div className="bg-zinc-700 rounded-lg p-6 lg:p-8 flex flex-col items-center max-w-[90%] max-h-[80%] lg:max-w-[50%]">
            <h1 className="text-4xl">{props.project.name}</h1>
            <div className="divider my-5 min-h-1 min-w-full"></div>
            <div className="flex flex-col lg:flex-row overflow-auto custom-scrollbar">
              <div className="flex flex-col min-w-0">
                {props.project.video != null && activeImageIndex == 0 ? (
                  getYoutubeEmbed(props.project.video)
                ) : (
                  <img
                    src={
                      props.project.video != null && activeImageIndex > 0
                        ? props.project.images[activeImageIndex - 1]
                        : props.project.images[activeImageIndex]
                    }
                    className="max-w-full w-[35rem] h-auto object-contain"
                    alt="Project image"
                  />
                )}

                <div className="flex flex-row flex-wrap my-5 gap-4 justify-center">
                  {props.project.video && (
                    <img
                      id="0"
                      className="h-12 lg:h-[4rem] cursor-pointer hover:opacity-80 transition-opacity"
                      src="/images/playvideo.png"
                      onClick={onImageClicked}
                      alt="Play video"
                    />
                  )}
                  {props.project.images.map((uri, index) => (
                    <img
                      key={index}
                      id={
                        props.project.video != null
                          ? (index + 1).toString()
                          : index.toString()
                      }
                      className="h-12 lg:h-16 cursor-pointer hover:opacity-80 transition-opacity"
                      src={uri}
                      onClick={onImageClicked}
                      alt={`Preview ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="lg:ml-8 overflow-y-auto custom-scrollbar">
                <p className="max-w-[20rem]">{props.project.description}</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 mt-4">
              {props.project.steamLink && (
                <button
                  className="rounded-lg py-1 px-3 mx-auto flex items-center border-2"
                  onClick={onSteamLinkClicked}
                >
                  <span className="text-lg">View on Steam</span>
                </button>
              )}
              {props.project.link && (
                <button
                  className="rounded-lg py-1 px-3 mx-auto flex items-center border-2"
                  onClick={onLinkClicked}
                >
                  View
                </button>
              )}
              <button
                className={`rounded-lg py-1 px-3 mx-auto flex items-center border-2 ${
                  props.project.locked
                    ? "text-disabled cursor-not-allowed border-disabled"
                    : "text-aqua border-aqua hover:bg-aqua hover:text-white"
                }`}
                disabled={props.project.locked}
                onClick={onGithubLinkClicked}
              >
                {props.project.locked && (
                  <img
                    className="h-6 mr-2"
                    src="/icons/lock.svg"
                    alt="Locked"
                  />
                )}
                <span className="text-lg">View on Github</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
