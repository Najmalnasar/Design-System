import React from "react";
import TypographyTypeProps from "./type";
const Typography = ({
  tag,
  text = "",
  children,
  className,
  style,
  role,
}: TypographyTypeProps) => {
  return React.createElement(tag, { className, style }, text, children, role);
};

export default Typography;
