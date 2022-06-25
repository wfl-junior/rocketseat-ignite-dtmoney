import styled from "styled-components";

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`;

export const App: React.FC = () => (
  <div className="App">
    <Title>Hello World</Title>
  </div>
);
