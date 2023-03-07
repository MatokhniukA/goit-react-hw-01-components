import { PropTypes } from "prop-types";
import {TableContainer, TableHead} from './TransactionHistory.styled'

export const TransactionHistory = ({ items  }) => {
    return (
        <TableContainer className="transaction-history">
  <TableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TableHead>
            <tbody>
                {items.map(({ id, type, amount, currency })=>(
                    <tr key ={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
  </tbody>
</TableContainer>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        }),
    ).isRequired,
}