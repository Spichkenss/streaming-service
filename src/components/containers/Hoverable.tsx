import { type FC, type HTMLAttributes } from "react";
import clsx from "clsx";

type HoverableProps = HTMLAttributes<HTMLDivElement>;

const Hoverable: FC<HoverableProps> = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={clsx("cursor-pointer rounded hover:bg-white/10", className)}
    >
      {children}
    </div>
  );
};

export default Hoverable;
