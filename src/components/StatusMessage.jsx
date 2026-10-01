function StatusMessage({
  type = "info",
  children,
}) {
  return (
    <div
      className={`status-message status-${type}`}
      role={
        type === "error"
          ? "alert"
          : "status"
      }
    >
      {children}
    </div>
  );
}

export default StatusMessage;