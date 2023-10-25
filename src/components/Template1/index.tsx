import { TemplateProp } from "../../interfaces";
import styles from "./template1.module.scss";
import { adjustFontSize } from "../../utils";
const Template1: React.FC<TemplateProp> = ({ title, subtitle, img1, cta }) => {
  const backgroundStyles = {
    backgroundImage: `url(${img1}), url('/images/pattern-bg.png')`,
  };

  return (
    <div className={styles.template} style={backgroundStyles}>
      <div className={styles.templateContent}>
        <div
          className={styles.templateContentTitle}
          style={adjustFontSize(45, title.length, 9)}
        >
          <p>{title}</p>
        </div>
        <div
          className={styles.templateContentSubtitle}
          style={adjustFontSize(165, subtitle?.length || 1, 3.5)}
        >
          <p>{subtitle}</p>
        </div>

        <button className={styles.templateContentBtn}>{cta}</button>
      </div>
    </div>
  );
};

export default Template1;
