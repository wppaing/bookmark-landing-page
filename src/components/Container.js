import styled from "styled-components";

const Container = styled.div`
  max-width: var(--container-width);
  padding: var(--default-padding);
  margin: 0 auto;

  .info {
    text-align: center;
  }

  p {
    color: var(--grayish-blue);
    line-height: 1.5;
    max-width: 500px;
    margin: 1.5rem auto;
  }
`;
export default Container;
