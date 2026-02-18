export default function Button({
  as: Component = "button",
  variation = "btn-primary",
  children,
  disabled,
  ...props
}) {
  const isButton = Component === "button";

  return (
    <Component
      className={`btn ${variation}`}
      {...(isButton && { disabled })}
      {...props}
    >
      {children}
    </Component>
  );
}
