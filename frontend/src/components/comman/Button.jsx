function Button({
  children,
  href,
  variant = "primary",
  ...props
}) {
  return (
    <a
      href={href}
      className={`button button--${variant}`}
      {...props}
    >
      {children}
    </a>
  );
}

export default Button;