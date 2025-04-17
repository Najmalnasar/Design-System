import React from "react";
import TypographyType from "./type";
const Typography = ({
  tag,
  text = "text not requried ",
  children,
  className,
  style,
  role,
}: TypographyType) => {
  return React.createElement(tag, { className, style }, text, children, role);
};

export default Typography;
