export default function getHost() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:5000";
  }
  return "http://fibrossist-connector.vercel.app";
}
