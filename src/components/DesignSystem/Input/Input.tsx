import { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProp> = ({ label, ...rest }) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{label}</label>
      <input {...rest} />
    </div>
  );
};
export default Input;
