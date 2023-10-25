import { TemplateProp } from "../../interfaces";
import { adjustFontSize } from "../../utils";
import styles from "./template2.module.scss";
const Template2: React.FC<TemplateProp> = ({ title, subtitle, img1 }) => {
  const backgroundStyles = {
    backgroundImage: `url(${img1}), url('/images/pattern-bg.png')`,
  };
  return (
    <div className={styles.template} style={backgroundStyles}>
      <div className={styles.templateContent}>
        <p
          className={styles.templateContentTitle}
          style={adjustFontSize(58, title.length, 7.7)}
        >
          {title}
        </p>
        <p
          className={styles.templateContentSubtitle}
          style={adjustFontSize(210, subtitle?.length || 1, 3.5)}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Template2;
