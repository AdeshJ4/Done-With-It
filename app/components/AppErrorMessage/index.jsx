import AppText from "../AppText";

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return <AppText style={{ color: "red" }}>{error}</AppText>;
};

export default ErrorMessage;
