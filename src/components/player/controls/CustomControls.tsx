"use client";
import { type FC, type RefObject, useState } from "react";
import PlayButton from "~/components/player/controls/PlayButton";
import VolumeController from "~/components/player/controls/VolumeController";

interface CustomControlsProps {
  videoRef: RefObject<HTMLVideoElement>;
}

const CustomControls: FC<CustomControlsProps> = ({ videoRef }) => {
  const [isPaused, setIsPaused] = useState(true);

  const togglePause = () => {
    if (videoRef?.current) {
      if (isPaused) void videoRef.current.play();
      else videoRef.current.pause();
      setIsPaused((prev) => !prev);
    }
  };

  return (
    <div
      className={
        "absolute bottom-0 z-40 flex w-full flex-row items-center gap-4 px-4 py-2 "
      }
    >
      <PlayButton isPaused={isPaused} onClick={togglePause} />
      <VolumeController videoRef={videoRef} />
    </div>
  );
};

export default CustomControls;
