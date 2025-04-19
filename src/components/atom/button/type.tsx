type buttonType = "submit" | "reset" | "button";

interface ButtonTypeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  type: buttonType;
  className?: string;
}

export default ButtonTypeProps;
