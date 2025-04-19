import React from "react";
import { JSX } from "react";

interface TypographyTypeProps {
  text?: string;
  tag: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  role?: string;
}

export default TypographyTypeProps;
