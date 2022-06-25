import logoImage from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export const Header: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImage} alt="dt money logo" />

      <button type="button">Nova transação</button>
    </Content>
  </Container>
);
