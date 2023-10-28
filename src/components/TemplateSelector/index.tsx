import Select from "react-select";
import styles from "./templateSelector.module.scss";
import { templateList } from "../../utils/templateList";
import { useTemplateContext } from "../../contexts/TemplateContext";

const TemplateSelector = () => {
  const { setCurrentTemplate } = useTemplateContext();
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "#000",
      color: "#fff",
      border: "solid 0.1rem #555",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "#000",
      color: "#fff",
    }),
  };
  return (
    <div className={styles.selectContainer}>
      <Select
        classNamePrefix="react-select"
        placeholder="Select Template"
        options={templateList}
        styles={customStyles}
        onChange={(e) => {
          const selectedTemplate = templateList.find(
            (t) => t.value === e?.value
          );
          if (selectedTemplate) {
            setCurrentTemplate(selectedTemplate);
          }
        }}
      />
    </div>
  );
};

export default TemplateSelector;
