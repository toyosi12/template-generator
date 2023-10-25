import { TemplateProp } from "../../interfaces";
import styles from "./template3.module.scss";
import { ReactComponent as ZigZag } from "../../images/zigzag.svg";
import { adjustFontSize } from "../../utils";

const Template3: React.FC<TemplateProp> = ({ title, subtitle, img1, cta }) => {
  return (
    <div className={styles.template}>
      <ZigZag className={styles.templateTopZigZag} />
      <ZigZag className={styles.templateBottomZigZag} />

      <div className={styles.templateContentTop}>
        <p
          className={styles.templateContentTopTitle}
          style={adjustFontSize(70, title.length, 6)}
        >
          {title}
        </p>
        <div className={styles.templateContentTopImgContainer}>
          <img src={img1} alt="template" />
        </div>
      </div>
      <div className={styles.templateContentBottom}>
        <div>
          <p
            className={styles.templateContentBottomSubtitle}
            style={adjustFontSize(112, subtitle?.length || 1, 2.5)}
          >
            {subtitle}
          </p>
        </div>

        <div>
          <button className={styles.templateContentBottomBtn}>{cta}</button>
        </div>
      </div>
    </div>
  );
};

export default Template3;
