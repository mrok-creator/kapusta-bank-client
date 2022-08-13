import styles from './AddTransactionForm.module.scss';
import NumberFormat from 'react-number-format';
import Icon from 'shared/components/Icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTransactionForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    description: '',
    category: '',
    sum: '',
  });

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newValue = value.toLowerCase();
    setForm({ ...form, [name]: newValue });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...form });
    setForm({
      description: '',
      category: '',
      sum: '',
    });
  };

  const handleClear = e => {
    setForm({
      description: '',
      category: '',
      sum: '',
    });
  };
  const { description, category, sum } = form;
  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <input
        className={styles.input}
        onChange={handleChange}
        name="description"
        value={description}
        type="text"
        placeholder="Product description"
      />
      <select
        className={styles.select}
        onChange={handleChange}
        name="category"
        value={category}
        required
      >
        <option value="" disabled>
          Product category
        </option>
        <optgroup label="Expense" name="type">
          <option value="Health">Health</option>
          <option value="Alcohol">Alcohol</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Housing">Housing</option>
          <option value="Technique">Technique</option>
          <option value="Communal, Communications">
            Communal, Communications
          </option>
          <option value="Sports, Hobbies">Sports, Hobbies</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </optgroup>
        <optgroup label="Income" name="type">
          <option value="Sallary">Sallary</option>
        </optgroup>
      </select>
      <div className={styles.container}>
        <NumberFormat
          className={styles.sum}
          onChange={handleChange}
          name="sum"
          value={sum}
          type="text"
          decimalSeparator="."
          decimalScale={2}
          fixedDecimalScale={true}
          suffix=" UAH"
          placeholder="00.00 UAH"
          minLength={1}
        />
        <div className={styles.decoration}>
          <Icon width={20} height={20} name={`icon-calculator`} />
        </div>
      </div>
      <div className={styles.containerBtn}>
        <button className={styles.inputBtn} type="submit">
          INPUT
        </button>
        <button className={styles.clearBtn} onClick={handleClear} type="button">
          CLEAR
        </button>
      </div>
    </form>
  );
};

export default AddTransactionForm;
