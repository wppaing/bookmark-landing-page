import Logo from "../../images/logo-chrome.svg";
import bgDots from "../../images/bg-dots.svg";
import Button from "../Button";

export default function ActionCard() {
  return (
    <div className="card">
      <img src={Logo} alt="chrome logo" />
      <h3>Add to Chrome</h3>
      <p>Minimum version 62</p>
      <img src={bgDots} alt="background" />
      <Button text="Add and Install Extension" />
    </div>
  );
}
