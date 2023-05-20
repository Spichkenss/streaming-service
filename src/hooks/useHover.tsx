"use client";
import { type RefObject, useEffect, useState } from "react";

function useHover<T extends HTMLElement>(
  ref: RefObject<T>,
  onHoverIn: () => void,
  onHoverOut: () => void
): boolean {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      if (node) {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, [ref]);

  useEffect(() => {
    if (isHovering) {
      onHoverIn();
    } else {
      onHoverOut();
    }
  }, [isHovering]);

  return isHovering;
}

export default useHover;
