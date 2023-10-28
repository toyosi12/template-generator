import { TextareaHTMLAttributes } from "react";
import styles from "./textarea.module.scss";

interface TextAreaProp extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: React.FC<TextAreaProp> = ({ label, ...rest }) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{label}</label>
      <textarea {...rest} rows={3} />
    </div>
  );
};
export default TextArea;
