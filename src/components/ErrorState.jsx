function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load this information.",
  action,
}) {
  return (
    <div
      className="error-state"
      role="alert"
    >
      <h2>{title}</h2>

      <p>{message}</p>

      {action}
    </div>
  );
}

export default ErrorState;