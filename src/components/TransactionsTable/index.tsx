import { useTransactionsContext } from "../../contexts/TransactionsContext";
import { formatAmount } from "../../utils/formatAmount";
import { Container } from "./styles";

export const TransactionsTable: React.FC = () => {
  const { transactions } = useTransactionsContext();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formatAmount(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
