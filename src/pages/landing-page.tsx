import { NavHeader } from "../components/nav-header";
import "../App.css";

export const LandingPage = () => {
  return (
    <div
      className="landing-page-container"
      style={{
        backgroundImage: "url(/images/dev-landing-image.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavHeader />
    </div>
  );
};
