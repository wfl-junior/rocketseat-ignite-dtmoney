import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin-inline: auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: white;
    background-color: var(--blue-light);
    border: 0;
    padding-inline: 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s linear;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
