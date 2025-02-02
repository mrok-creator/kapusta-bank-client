import styles from './DesktopTransactionList.module.scss';
import Icon from 'shared/components/Icon';

const DesktopTransactionList = ({
  filteredTransactions,
  handleDeleteClick,
  day,
  month,
  year,
  type,
}) => {
  return (
    <div className={styles.table_container}>
      <table className={styles.table}>
        <thead className={styles.table_header}>
          <tr>
            <th className={`${styles.table_th} ${styles.table_date}`}>Date</th>
            <th className={`${styles.table_th} ${styles.table_description}`}>
              Description
            </th>
            <th className={`${styles.table_th} ${styles.table_category}`}>
              Category
            </th>
            <th className={`${styles.table_th} ${styles.table_sum}`}>Sum</th>
            <th className={`${styles.table_th} ${styles.table_icon}`}></th>
          </tr>
        </thead>
      </table>
      <div className={styles.table_scroll}>
        <table className={`${styles.table} ${styles.table_body_transactions}`}>
          <tbody className={styles.table_body}>
            {filteredTransactions?.map(transaction => {
              return (
                <tr key={transaction._id} className={styles.table_transaction}>
                  <td className={styles.table_date}>
                    {day}.{month}.{year}
                  </td>
                  <td className={styles.table_description}>
                    {transaction.description.charAt(0).toUpperCase() +
                      transaction.description.slice(1)}
                  </td>
                  <td className={styles.table_category}>
                    {transaction.category.charAt(0).toUpperCase() +
                      transaction.category.slice(1)}
                  </td>
                  <td
                    className={`${styles.table_sum_income} ${
                      type !== 'income' && styles.table_expense
                    }`}
                  >
                    {type === 'income'
                      ? `${parseFloat(transaction.sum).toFixed(2)} грн.`
                      : `-${parseFloat(transaction.sum).toFixed(2)} грн.`}
                  </td>
                  <td className={styles.table_icon}>
                    <button
                      className={styles.delete_btn}
                      onClick={() => handleDeleteClick(transaction)}
                    >
                      <Icon
                        name={`icon-delete`}
                        width={18}
                        height={18}
                        className={`table_delete_icon`}
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DesktopTransactionList;
