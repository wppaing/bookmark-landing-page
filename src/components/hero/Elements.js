import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: var(--default-padding);
  text-align: left;
  gap: 3rem;

  & > div {
    flex: 1;
  }

  p {
    margin: 1rem 1rem 1rem 0rem;
    line-height: 1.5;
    color: var(--grayish-blue);
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const Cta = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  .btn {
    font-size: 0.9rem;
    padding: 0.9rem 1.3rem;
    background-color: var(--soft-blue);
    color: #ffffff;
    border-radius: var(--border-radius);
    border: 2px solid var(--soft-blue);

    &:hover {
      color: var(--soft-blue);
      background-color: transparent;
    }

    &:last-child {
      background-color: transparent;
      color: var(--very-dark-blue);
      border: 2px solid transparent;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    &:last-child:hover {
      border: 2px solid var(--very-dark-blue);
    }
  }

  @media screen and (max-width: 768px) {
    gap: 1rem;
    justify-content: center;

    .btn {
      font-size: 0.9rem;
      padding: 0.8rem 1rem;
    }
  }
`;
