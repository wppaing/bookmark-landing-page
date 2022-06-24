import { FooterContainer } from "./Elements";

export default function Footer() {
  return (
    <FooterContainer id="contact">
      <div className="container">
        <p>35,000+ already joined</p>
        <h2>Stay up-to-date with what we’re doing</h2>
        <form>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Contact Us</button>
        </form>
      </div>
    </FooterContainer>
  );
}
