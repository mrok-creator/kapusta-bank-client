import styles from './balance.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getTotalBalance } from 'redux/auth/auth-selectors';
import NumberFormat from 'react-number-format';
import ModalBalance from './ModalBalance';
import { updateBalance, getBalance } from 'redux/auth/auth-operations';

const Balance = () => {
  const balance = useSelector(getTotalBalance, shallowEqual);
  const [balanceState, setBalanceState] = useState('');
  const dispatch = useDispatch();

  const [tooltipStatus, setTooltipStatus] = useState({
    isOpen: false,
    isShown: false,
  });

  // const updateTotalBalance = () => {};

  const handleChange = ({ target }) => {
    setBalanceState(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(getBalance(Number.parseFloat(Number.parseFloat(balanceState))));
  };

  useEffect(() => {
    setBalanceState(balance);
    if (!+balance && !tooltipStatus.isShown) {
      setTimeout(() => {
        setTooltipStatus(prevState => ({ ...prevState, isOpen: true }));
      }, 500);
    }
  }, [balance, tooltipStatus.isShown]);

  return (
    <div
      className={styles.container}
      onClick={() => setTooltipStatus({ isOpen: false, isShown: true })}
    >
      <p className={styles.balance}>Balance:</p>
      <form className={styles.form} action="">
        <NumberFormat
          className={styles.input}
          name="balance"
          type="text"
          value={balanceState}
          onChange={handleChange}
          // thousandSeparator=""
          decimalSeparator="."
          decimalScale={2}
          fixedDecimalScale={true}
          suffix="UAH"
          placeholder="00.00 UAH"
          minLength={1}
        />

        <button className={styles.button} type="submit" onClick={handleSubmit}>
          CONFIRM
        </button>
      </form>
      <ModalBalance isOpen={tooltipStatus.isOpen} />
    </div>
  );
};

export default Balance;
