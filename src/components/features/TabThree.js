import img1 from "./../../images/illustration-features-tab-3.svg";
import { Tab } from "./Elements";

export default function TabThree() {
  return (
    <Tab>
      <div>
        <img src={img1} alt="feature img" />
      </div>
      <div>
        <h2>Share your bookmarks</h2>
        <p>
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </p>
        <a href="#">More Info</a>
      </div>
    </Tab>
  );
}
