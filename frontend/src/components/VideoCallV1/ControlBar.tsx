import React, { useState } from "react";
import micOn from "@/../public/icons/mic_on.svg";
import cameraOn from "@/../public/icons/camera_on.svg";
import micOff from "@/../public/icons/mic_off.svg";
import cameraOff from "@/../public/icons/camera_off.svg";
import Image from "next/image";
import endCall from "@/../public/icons/end_call.svg";
import { LocalVideoTrack } from "agora-rtc-react";
import { ILocalVideoTrack } from "agora-rtc-react";
import { animate, motion, useDragControls } from "framer-motion";
import { useRef } from "react";
import arrowImg from "@/../public/icons/arrow.svg";
import PersonIcon from "@mui/icons-material/Person";
import { ReactElement } from "react";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

const ControlBar = ({
  video,
  audio,
  screenShare,
  toggleScreenShare,
  toggleVideo,
  toggleAudio,
  localCameraTrack,
  otherUsers,
  makeFullscreen,
  emotion,
}: {
  video: boolean;
  audio: boolean;
  screenShare: boolean;
  toggleScreenShare: () => void;
  toggleVideo: () => void;
  toggleAudio: () => void;
  localCameraTrack: ILocalVideoTrack | null;
  otherUsers: boolean;
  makeFullscreen: (e: ReactElement) => void;
  emotion?: string;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const controler = useRef<HTMLDivElement>(null);
  const width = window.innerWidth;
  const [showSelf, setShowself] = useState(true);

  const [isOpen, setIsOpen] = useState(true);
  const variants = {
    closed: {
      height: "2rem",
    },
    open: {
      height: 140,
    },
  };

  return (
    <div className="fixed z-50 bottom-0 left-0 right-0">
      {otherUsers && (
        <div className="w-full" ref={container}>
          <motion.div
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: width - 200 }}
            dragMomentum={false}
            dragElastic={0.9}
          >
            <div
              className="relative left-8 h-40 mb-2 rounded-lg overflow-hidden bg-black md:aspect-[4/3] aspect-[3/4] border-2 border-solid border-[#1E2640]"
              id="selfVideo"
            >
              {/* <div className="absolute w-full h-full flex justify-center items-center z-10">
                <PersonIcon sx={{ color: "white", fontSize: 150 }} />
              </div> */}
              <div className="absolute bottom-0 w-full text-center text-white text-lg">
                {emotion}
              </div>
            
              <div className="z-50 w-full h-full">
                <LocalVideoTrack
                  className="aspect-[3/4] md:aspect-[4/3]"
                  track={localCameraTrack}
                  play={true}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <motion.div
        id="controls"
        initial={{
          height: 0,
        }}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{
          duration: 0.5,
        }}
        className="relative pt-[10px]"
      >
        <div
          className="h-6 w-8 bg-[#DC9750] bg-opacity-30"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img
            src={arrowImg.src}
            width="200px"
            className={isOpen ? `rotate-90` : `-rotate-90`}
            alt=""
          />
        </div>
        <div
          className="flex justify-center gap-8 pt-4 pb-4 bg-[#DC9750] bg-opacity-20"
          ref={controler}
        >
          <a
            className=" bg-red-400 rounded-full hover:bg-red-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-[75px] outline-4 outline outline-white"
            href="/"
          >
            <Image
              src={endCall.src}
              height={55}
              width={55}
              style={{ margin: "10px" }}
              alt="icon"
            />
          </a>
          <div
            className={`relative rounded-full aspect-square w-[75px] outline-4 outline outline-white ${
              !audio ? "bg-red-400" : "bg-transparent"
            }`}
            onClick={toggleAudio}
          >
            {!audio ? (
              <Image
                src={micOff.src}
                height={55}
                width={55}
                style={{ margin: "10px" }}
                alt="icon"
              />
            ) : (
              <Image
                src={micOn.src}
                height={55}
                width={55}
                style={{ margin: "10px" }}
                alt="icon"
              />
            )}
          </div>
          <div
            className={`relative rounded-full aspect-square w-[75px] outline-4 outline outline-white ${
              !video ? "bg-red-400" : "bg-transparent"
            }`}
            onClick={toggleVideo}
          >
            {!video ? (
              <Image
                src={cameraOff.src}
                height={55}
                width={55}
                style={{ margin: "10px" }}
                alt="icon"
              />
            ) : (
              <Image
                src={cameraOn.src}
                height={55}
                width={55}
                style={{ margin: "10px" }}
                alt="icon"
              />
            )}
          </div>
          <div
            className={`relative rounded-full aspect-square w-[75px] outline-4 outline outline-white ${
              !screenShare ? "bg-red-400" : "bg-transparent"
            }`}
            onClick={toggleScreenShare}
          >
            {!screenShare ? (
              <ScreenShareIcon style={{ width: 55, height: 55, margin: 10 }} />
            ) : (
              <StopScreenShareIcon
                style={{ width: 55, height: 55, margin: 10 }}
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ControlBar;
