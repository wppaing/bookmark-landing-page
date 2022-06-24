import img1 from "./../../images/illustration-features-tab-2.svg";
import { Tab } from "./Elements";

export default function TabTwo() {
  return (
    <Tab>
      <div>
        <img src={img1} alt="feature img" />
      </div>
      <div>
        <h2>Intelligent search</h2>
        <p>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <a href="#">More Info</a>
      </div>
    </Tab>
  );
}
