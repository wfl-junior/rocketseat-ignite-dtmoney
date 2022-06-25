import { useMemo } from "react";
import incomeImage from "../../assets/icon-income.svg";
import outcomeImage from "../../assets/icon-outcome.svg";
import totalImage from "../../assets/icon-total.svg";
import { useTransactionsContext } from "../../contexts/TransactionsContext";
import { formatAmount } from "../../utils/formatAmount";
import { Container } from "./styles";

export const Summary: React.FC = () => {
  const { transactions } = useTransactionsContext();

  const summary = useMemo(() => {
    return transactions.reduce(
      (summary, transaction) => {
        if (transaction.type === "deposit") {
          summary.deposits += transaction.amount;
          summary.total += transaction.amount;
        } else {
          summary.withdraws += transaction.amount;
          summary.total -= transaction.amount;
        }

        return summary;
      },
      {
        deposits: 0,
        withdraws: 0,
        total: 0,
      },
    );
  }, [transactions]);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas" />
        </header>

        <strong>{formatAmount(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImage} alt="Saídas" />
        </header>

        <strong>- {formatAmount(summary.withdraws)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total" />
        </header>

        <strong>{formatAmount(summary.total)}</strong>
      </div>
    </Container>
  );
};
