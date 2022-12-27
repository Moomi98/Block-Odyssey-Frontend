import styles from "../styles/select.module.scss";
import { useState } from "react";

interface selectProps {
  options: Array<string> | Array<number>;
}

const Select = ({ options }: selectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const setCurrentValue = (event: React.MouseEvent<HTMLLIElement>) => {
    const value = event.currentTarget.value;
    setSelectedValue(value);
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />

      <div className={styles.label}>{selectedValue}</div>
      {open ? (
        <span
          className={`material-symbols-outlined ${styles.arrow}`}
          onClick={() => setOpen((state) => (state = !state))}
        >
          expand_less
        </span>
      ) : (
        <span
          className={`material-symbols-outlined ${styles.arrow}`}
          onClick={() => setOpen((state) => (state = !state))}
        >
          expand_more
        </span>
      )}

      {open && (
        <ul className={styles.optionList}>
          {options.map((option) => (
            <li
              key={option}
              className={styles.optionItem}
              value={option}
              onClick={setCurrentValue}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
