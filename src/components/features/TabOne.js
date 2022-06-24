import img1 from "./../../images/illustration-features-tab-1.svg";
import { Tab } from "./Elements";

export default function TabOne() {
  return (
    <Tab>
      <div>
        <img src={img1} alt="feature img" />
      </div>
      <div>
        <h2>Bookmark in One Click</h2>
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <a href="#">More Info</a>
      </div>
    </Tab>
  );
}
