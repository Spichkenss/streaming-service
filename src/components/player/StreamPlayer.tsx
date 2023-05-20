"use client";
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import CustomControls from "~/components/player/controls/CustomControls";
import useHover from "~/hooks/useHover";

interface VideoPlayerProps {
  src: string;
  autoPlay?: boolean;
  controls?: boolean;
}

const StreamPlayer: React.FC<VideoPlayerProps> = ({
  src,
  autoPlay = false,
  controls = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isControlsVisible, setIsControlsVisible] = useState(false);

  useHover(
    containerRef,
    () => setIsControlsVisible(true),
    () => setIsControlsVisible(false)
  );

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (Hls.isSupported()) {
      if (Hls.isSupported()) {
        const video = videoRef.current;
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
      }
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, [videoRef]);

  return (
    <div className={"relative bg-black"} ref={containerRef}>
      <video
        poster={"https://i.ytimg.com/vi/dXYHUGyOAfE/maxresdefault.jpg"}
        ref={videoRef}
        controls={false}
        autoPlay={autoPlay}
        className={"aspect-video w-full lg:aspect-[18/9]"}
      />
      {isControlsVisible ? <CustomControls videoRef={videoRef} /> : null}
    </div>
  );
};

export default StreamPlayer;
