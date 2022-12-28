import styles from "../styles/select.module.scss";
import React, { useState } from "react";

interface selectProps {
  options: Array<string> | Array<number>;
  onChange?: Function;
}

const Select = (props: selectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState(props.options[0]);

  const setCurrentValue = (event: React.MouseEvent<HTMLUListElement>) => {
    const value = (event.target as HTMLLIElement).value;
    setSelectedValue(value);
    setOpen(false);

    console.log(value);

    props.onChange && props.onChange(Number(value));
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
        <ul className={styles.optionList} onClick={setCurrentValue}>
          {props.options.map((option) => (
            <li key={option} className={styles.optionItem} value={option}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
