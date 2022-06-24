import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import Container from "../Container";
import { Cards } from "./Elements";

export default function ActionDownload() {
  return (
    <Container>
      <div className="info">
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <Cards>
        <CardOne />
        <CardTwo />
        <CardThree />
      </Cards>
    </Container>
  );
}
