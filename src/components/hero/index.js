import { Container, Cta } from "./Elements";
import HeroImg from "../../images/illustration-hero.svg";

export default function Hero() {
  return (
    <Container>
      <div className="intro">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <Cta>
          <a href="#" className="btn">
            Get It on Chrome
          </a>
          <a href="#" className="btn">
            Get It on Firefox
          </a>
        </Cta>
      </div>
      <div className="image">
        <img src={HeroImg} alt="" />
      </div>
    </Container>
  );
}
