"use client";
import React, { type FC, type RefObject, useEffect, useState } from "react";
import Hoverable from "~/components/containers/Hoverable";
import { HiSpeakerWave } from "react-icons/hi2";

interface VolumeControllerProps {
  videoRef: RefObject<HTMLVideoElement>;
}

const VolumeController: FC<VolumeControllerProps> = ({ videoRef }) => {
  const [volume, setVolume] = useState<number>();
  const [isTrackVisible, setIsTrackVisible] = useState(false);

  useEffect(() => {
    const preferredVolume = localStorage.getItem("preferred-volume");
    if (preferredVolume) setVolume(parseFloat(preferredVolume));
    else setVolume(1);
  }, []);

  const setVideoVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current && event.target) {
      const value = parseFloat(event.target.value);
      videoRef.current.volume = value;
      setVolume(value);
      localStorage.setItem("preferred-volume", value.toString());
    }
  };

  return (
    <div className={"flex flex-row items-center gap-2"}>
      <Hoverable className={"p-2"} onMouseEnter={() => setIsTrackVisible(true)}>
        <HiSpeakerWave size={20} />
      </Hoverable>
      {isTrackVisible ? (
        <input
          className={`volume-slider`}
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={setVideoVolume}
          onMouseLeave={() => setIsTrackVisible(false)}
        />
      ) : null}
    </div>
  );
};

export default VolumeController;
