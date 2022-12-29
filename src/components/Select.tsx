import styles from "../styles/select.module.scss";
import React, { useState } from "react";

interface selectProps {
  options: Array<string> | Array<number>;
  onChange?: Function;
  width?: number;
  listDirection?: string;
  label?: string;
}

const Select = (props: selectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState(
    props.label || props.options[0]
  );

  const setCurrentValue = (event: React.MouseEvent<HTMLUListElement>) => {
    const value = (event.target as HTMLLIElement).innerText;
    setSelectedValue(value);
    setOpen(false);

    props.onChange && props.onChange(value);
  };

  return (
    <div className={styles.container} style={{ width: props.width || "100%" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />

      <div
        onClick={() => setOpen((state) => (state = !state))}
        className={styles.label}
      >
        {selectedValue}
      </div>
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
        <ul
          className={
            props.listDirection && props.listDirection === "down"
              ? styles.optionList_down
              : styles.optionList_up
          }
          onClick={setCurrentValue}
        >
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
