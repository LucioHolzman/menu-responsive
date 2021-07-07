import React, { useState } from "react";
import styles from "../../styles/Menu.module.css";

export const Menu = ({ children }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={!checked ? styles.clipContent : styles.clipContentChecked}>
      <span className={!checked ? styles.clip : styles.clipChecked}>
        <label className={styles.menuCheckLabel} htmlFor="check">
          <input
            type="checkbox"
            id="check"
            onClick={(e) => {
              setChecked(e.target.checked);
            }}
            className={styles.menuCheckInput}
          />
          <span className={styles.menuSpan}></span>
          <span className={styles.menuSpan}></span>
          <span className={styles.menuSpan}></span>
        </label>
        {children}
      </span>
    </div>
  );
};
