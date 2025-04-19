import ButtonTypeProps from "./type";

const Button = ({
  text,
  type,
  className,
  children,
  ...restProps
}: ButtonTypeProps) => {
  return (
    <div>
      <button type={type} className={className} {...restProps}>
        {text}
        {children}
      </button>
    </div>
  );
};

export default Button;
