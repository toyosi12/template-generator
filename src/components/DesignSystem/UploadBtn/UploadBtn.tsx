import { InputHTMLAttributes } from "react";
import styles from "./uploadBtn.module.scss";

interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const UploadBtn: React.FC<InputProp> = ({ label, name, onChange, id }) => {
  return (
    <div className={styles.uploadContainer}>
      <label htmlFor={id} className={styles.label}>
        Upload {label}
      </label>
      <input
        type="file"
        // id="image-upload"
        accept="image/*"
        name={name}
        onChange={onChange}
        id={id}
      />
    </div>
  );
};

export default UploadBtn;
