import Logo from "../../images/logo-firefox.svg";
import bgDots from "../../images/bg-dots.svg";
import Button from "../Button";

export default function CardTwo() {
  return (
    <div className="card">
      <img src={Logo} alt="chrome logo" />
      <h3>Add to Firefox</h3>
      <p>Minimum version 55</p>
      <img src={bgDots} alt="background" />
      <Button text="Add and Install Extension" />
    </div>
  );
}
