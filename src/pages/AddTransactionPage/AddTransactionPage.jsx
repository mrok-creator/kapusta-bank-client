import styles from './AddTransactionPage.module.scss';

import AddTransactionForm from '../../components/AddTransactionForm';

import { Link } from 'react-router-dom';
import Back from '../../shared/images/png/Back.png';

const AddTransactionPage = () => {
  return (
    <section className={styles.section}>
      <Link className={styles.link} to="/">
        <img className={styles.img} src={Back} alt="Back" />
      </Link>
      <AddTransactionForm />
    </section>
  );
};

export default AddTransactionPage;
