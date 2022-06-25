import incomeImage from "../../assets/icon-income.svg";
import outcomeImage from "../../assets/icon-outcome.svg";
import totalImage from "../../assets/icon-total.svg";
import { useTransactionsContext } from "../../contexts/TransactionsContext";
import { Container } from "./styles";

export const Summary: React.FC = () => {
  const { transactions } = useTransactionsContext();
  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas" />
        </header>

        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImage} alt="Saídas" />
        </header>

        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total" />
        </header>

        <strong>R$500,00</strong>
      </div>
    </Container>
  );
};
