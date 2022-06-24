import styled from "styled-components";

const Faqs = styled.div`
  max-width: 600px;
  margin: 0 auto 2rem;
  border-bottom: 0.2px solid var(--grayish-blue);

  .faq-row {
    &:first-child {
      border-top: 0.2px solid var(--grayish-blue);
    }

    .row-title:hover {
      color: var(--soft-red) !important;
    }

    .row-content {
      .row-content-text {
        margin: 1rem 0rem;
        color: var(--grayish-blue) !important;
      }
    }
  }
`;
export default Faqs;
