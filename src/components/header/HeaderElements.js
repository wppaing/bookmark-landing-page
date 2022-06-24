import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--container-width);
  padding: 3rem 2rem;
  margin: 0 auto;
  font-size: 1rem;

  a {
    color: var(--vary-dark-blue);
    text-decoration: none;

    &:hover {
      color: var(--soft-red);
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: inherit;
  }

  .btn-login {
    padding: 0.6rem 1.5rem;
    color: #ffffff;
    background-color: var(--soft-red);
    border-radius: var(--border-radius);
    border: 2px solid var(--soft-red);

    &:hover {
      color: var(--soft-red);
      background-color: transparent;
    }
  }

  #nav-toggler {
    all: unset;
    display: none;
    z-index: 2;

    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 600px) {
    ul {
      display: none;
      flex-direction: column;
      position: absolute;
      inset: 0;
      background-color: #ffffff;
    }

    #nav-toggler {
      display: block;
    }
  }

  .show {
    display: flex;
  }
`;
