import ReactModal from "react-modal";
import closeImage from "../../assets/icon-close.svg";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button
      type="button"
      onClick={onRequestClose}
      className="react-modal-close"
    >
      <img src={closeImage} alt="Fechar modal" />
    </button>

    <Container onSubmit={e => e.preventDefault()}>
      <h2>Cadastrar transação</h2>

      <input type="text" placeholder="Título" />
      <input type="number" placeholder="Valor" />
      <input type="text" placeholder="Categoria" />

      <button type="submit">Cadastrar</button>
    </Container>
  </ReactModal>
);
