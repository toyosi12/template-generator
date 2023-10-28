import TemplateSelector from "../TemplateSelector";
import styles from "./topBar.module.scss";
const TopBar = () => {
  return (
    <nav className={styles.nav}>
      <p className={styles.appTitle}>Design Generator</p>
      <TemplateSelector />
    </nav>
  );
};
export default TopBar;
