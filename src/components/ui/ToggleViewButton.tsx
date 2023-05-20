import { type FC } from "react";
import { type IconBaseProps } from "react-icons";
import { TbLayoutAlignLeft, TbLayoutAlignRight } from "react-icons/tb";
import clsx from "clsx";

interface ToggleViewButtonProps extends IconBaseProps {
  isFull: boolean;
  onClick: () => void;
}

const ToggleViewButton: FC<ToggleViewButtonProps> = ({
  isFull,
  onClick,
  ...props
}) => {
  const Icon = ({ ...props }) =>
    isFull ? (
      <TbLayoutAlignRight {...props} />
    ) : (
      <TbLayoutAlignLeft {...props} />
    );
  return (
    <Icon
      onClick={onClick}
      size={24}
      className={clsx("cursor-pointer text-text", {
        "mr-2 self-end": isFull,
      })}
    />
  );
};

export default ToggleViewButton;
