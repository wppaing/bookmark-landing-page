import Container from "../Container";
import Faqs from "./Elements";
import Faq from "react-faq-component";
import Button from "../Button";

export default function MyFaq() {
  const data = {
    rows: [
      {
        title: "What is Bookmark?",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
      tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
      quis quam ornare mattis.`,
      },
      {
        title: "How can I request a new browser?",
        content: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
        ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
        aliquet convallis ultricies. Mauris augue massa, ultricies non
        ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
        ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
        imperdiet.`,
      },
      {
        title: "Is there a mobile app?",
        content: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
        sollicitudin ex et ultricies bibendum.`,
      },
      {
        title: " What about other Chromium browsers?",
        content: `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
        vitae neque eget nisl gravida pellentesque non ut velit.`,
      },
    ],
  };

  return (
    <Container>
      <div className="info">
        <h2>Frequently asked questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <Faqs>
        <Faq data={data} />
      </Faqs>
      <Container style={{ textAlign: "center" }}>
        <Button text={"More Info"} />
      </Container>
    </Container>
  );
}
