import styled from "styled-components";

export default function Button({ text }) {
  return <Wrapper>{text}</Wrapper>;
}

const Wrapper = styled.a`
  padding: var(--button-padding);
  background-color: var(--soft-blue);
  color: #ffffff;
  border-radius: var(--border-radius);

  &:hover {
    cursor: pointer;
  }
`;
