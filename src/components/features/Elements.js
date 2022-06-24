import styled from "styled-components";

export const Container = styled.div`
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

export const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const FeatureTab = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  border-bottom: 0.5px solid var(--grayish-blue);

  li {
    padding: 1.7rem;
    position: relative;

    &:hover {
      cursor: pointer;
      color: var(--soft-red);
    }

    &.active::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: var(--soft-red);
      width: 100%;
      height: 0.2rem;
    }
  }

  @media screen and (max-width: 576px) {
    width: 100vw;
    flex-direction: column;
    gap: 0;
    text-align: center;

    li {
      width: 100%;
      border-bottom: 0.2px solid var(--grayish-blue);

      &.active::after {
        width: 10rem;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

export const TabContent = styled.div``;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0rem;
  gap: 3rem;

  p {
    margin: 1.5rem 0rem !important;
  }

  img {
    width: 100%;
  }

  > div {
    flex: 1;
  }

  a {
    color: #ffffff;
    background-color: var(--soft-blue);
    padding: 0.7rem 1rem;
    border-radius: var(--border-radius);
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
`;
