import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--soft-blue);

  .container {
    max-width: var(--container-width);
    padding: var(--default-padding);
    margin: 0 auto;
    text-align: center;
    color: #ffffff;
  }

  p {
    margin-top: 2rem;
    letter-spacing: 0.4rem;
  }

  h2 {
    max-width: 30rem;
    margin: 2rem auto;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media screen and (max-width: 576px) {
      flex-direction: column;
    }
  }

  input {
    outline: none;
    background-color: #ffffff;
    padding: var(--button-padding);
    padding-right: 2rem;
    border: 1px solid #ffffff;
    border-radius: var(--border-radius);

    &::placeholder {
      color: var(--grayish-blue);
    }
  }

  button {
    all: unset;
    padding: var(--button-padding);
    background-color: var(--soft-red);
    color: #ffffff;
    border: 1px solid var(--soft-red);
    border-radius: var(--border-radius);

    &:hover {
      cursor: pointer;
      border: 1px solid var(--soft-red);
      color: var(--soft-red);
      background-color: #ffffff;
    }
  }
`;
