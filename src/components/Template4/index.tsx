import { Template4Prop } from "../../interfaces";
import styles from "./template4.module.scss";
import { adjustFontSize } from "../../utils";
import Star from "../../images/Star";
import Arc from "../../images/Arc";
const Template4: React.FC<Template4Prop> = ({
  title,
  img1,
  img2,
  cta,
  logo,
  primaryColor,
  secondaryColor,
}) => {
  const templateStyles = {
    background: `linear-gradient(45deg, ${primaryColor}, #000, #000, ${secondaryColor})`,
  };
  return (
    <div className={styles.template} style={templateStyles}>
      <div className={styles.templateLogoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.templateTitleContainer}>
        <p style={adjustFontSize(40, title.length, 4.1)}>{title}</p>
      </div>
      <div className={styles.templateImg1Container}>
        <img src={img1} alt="img1" />
      </div>
      <div className={styles.templateImg2Container}>
        <img src={img2} alt="img2" />
      </div>
      <div className={styles.templateArcContainer}>
        <Arc pathColor={primaryColor} />
      </div>
      <div className={styles.templateStarContainer}>
        <div className={styles.templateStarContainerInner}>
          <p>SALE</p>
          <Star pathColor={primaryColor} />
        </div>
      </div>
    </div>
  );
};

export default Template4;
