import Logo from "../../images/logo-opera.svg";
import bgDots from "../../images/bg-dots.svg";
import Button from "../Button";

export default function CardThree() {
  return (
    <div className="card">
      <img src={Logo} alt="chrome logo" />
      <h3>Add to Opera</h3>
      <p>Minimum version 46</p>
      <img src={bgDots} alt="background" />
      <Button text="Add and Install Extension" />
    </div>
  );
}
