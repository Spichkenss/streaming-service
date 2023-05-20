import { type FC } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import Hoverable from "~/components/containers/Hoverable";

interface PlayButtonProps {
  isPaused: boolean;
  onClick: () => void;
}

const PlayButton: FC<PlayButtonProps> = ({ isPaused, onClick }) => {
  const settings = {
    size: 16,
  };

  return (
    <Hoverable className={"p-2"} onClick={onClick}>
      {isPaused ? <FaPlay {...settings} /> : <FaPause {...settings} />}
    </Hoverable>
  );
};

export default PlayButton;
