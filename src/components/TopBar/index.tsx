import { useTemplateContext } from "../../contexts/TemplateContext";
import { downloadDesign } from "../../utils";
import TemplateSelector from "../TemplateSelector";
import styles from "./topBar.module.scss";
const TopBar = () => {
  const { currentTemplate } = useTemplateContext();
  return (
    <nav className={styles.nav}>
      <div>
        <p className={styles.appTitle}>Design Generator</p>
        <TemplateSelector />
      </div>
      <div>
        <button
          className={styles.downloadBtn}
          onClick={() => downloadDesign(currentTemplate.label)}
        >
          Download Design
        </button>
      </div>
    </nav>
  );
};
export default TopBar;
