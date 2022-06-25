import ReactModal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => (
  <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
    <h2>Cadastrar transação</h2>
  </ReactModal>
);
