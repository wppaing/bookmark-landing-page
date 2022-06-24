import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .card {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    padding-top: 3rem;
    border-radius: 0.7rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    &:nth-child(2) {
      margin-top: 3rem;
    }

    &:last-child {
      margin-top: 6rem;
    }

    @media screen and (max-width: 768px) {
      &:nth-child(2) {
        margin-top: 0rem;
      }

      &:last-child {
        margin-top: 0rem;
      }
    }
  }

  p {
    color: var(--grayish-blue);
    line-height: initial;
    margin: 1rem 0 2rem;
  }

  img:not(:first-child) {
    margin: 0 -2rem 2rem;
  }

  img:first-child {
    width: 5rem;
    margin: 1rem auto;
  }
`;
