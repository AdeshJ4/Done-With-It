import AppText from "../../AppText";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <AppText style={{ color: "red" }}>{error}</AppText>;
};

export default ErrorMessage;
