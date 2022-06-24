import { FeatureTab, TabWrapper, TabContent } from "./Elements";
import Container from "../Container";
import TabOne from "./TabOne";
import TabThree from "./TabThree";
import TabTwo from "./TabTwo";

export default function Features() {
  const handleClick = (e, tabName) => {
    const tabLinks = document.querySelectorAll(".nav-tab");
    const tabContents = document.querySelectorAll(".tab-content");
    tabLinks.forEach((tablink) => {
      tablink.classList.remove("active");
    });
    tabContents.forEach((tabcontent) => {
      tabcontent.style.display = "none";
    });
    e.target.classList.add("active");
    document.getElementById(tabName).style.display = "block";
  };

  return (
    <Container id="features">
      <div className="info">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <TabWrapper>
        <FeatureTab>
          <li
            className="nav-tab active"
            onClick={(e) => handleClick(e, "tabOne")}
          >
            Simple Bookmarking
          </li>
          <li className="nav-tab" onClick={(e) => handleClick(e, "tabTwo")}>
            Speedy Searching
          </li>
          <li className="nav-tab" onClick={(e) => handleClick(e, "tabThree")}>
            Easy Sharing
          </li>
        </FeatureTab>
      </TabWrapper>
      <TabContent>
        <div className="tab-content" id="tabOne">
          <TabOne className="tab-content" />
        </div>
        <div className="tab-content" style={{ display: "none" }} id="tabTwo">
          <TabTwo className="tab-content" />
        </div>
        <div className="tab-content" style={{ display: "none" }} id="tabThree">
          <TabThree className="tab-content" />
        </div>
      </TabContent>
    </Container>
  );
}
