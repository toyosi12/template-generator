import { Template4Prop } from "../../interfaces";
import styles from "./template4.module.scss";
import { adjustFontSize } from "../../utils";
import Star from "../../images/Star";
import Arc from "../../images/Arc";
import Workspace from "../Workspace";
import { useState } from "react";

interface TemplateFields {
  title: string;
  img1: string;
  img2: string;
  logo: string;
  cta: string;
  primaryColor: string;
  secondaryColor: string;
}

interface Template {
  fields: TemplateFields;
  setField: (key: string, value: any) => void;
}

const initialFields: TemplateFields = {
  logo: "/images/figma.svg",
  title: "Lore Ipsum Dolor Jarvis Dolores jksld jlsdjfl",
  img1: "/images/template4-img1.png",
  img2: "/images/template4-img2.png",
  cta: "SALE",
  primaryColor: "#FFB800",
  secondaryColor: "#00FFC2",
};
const Canvas: React.FC<Template> = ({ fields, setField }) => {
  const templateStyles = {
    background: `linear-gradient(45deg, ${fields.primaryColor}, #000, #000, ${fields.secondaryColor})`,
  };
  return (
    <div className="canvas">
      <div className={styles.template} style={templateStyles}>
        <div className={styles.templateLogoContainer}>
          <img src={fields.logo} alt="logo" />
        </div>
        <div className={styles.templateTitleContainer}>
          <p style={adjustFontSize(40, fields.title.length, 4.1)}>
            {fields.title}
          </p>
        </div>
        <div className={styles.templateImg1Container}>
          <img src={fields.img1} alt="img1" />
        </div>
        <div className={styles.templateImg2Container}>
          <img src={fields.img2} alt="img2" />
        </div>
        <div className={styles.templateArcContainer}>
          <Arc pathColor={fields.primaryColor} />
        </div>
        <div className={styles.templateStarContainer}>
          <div className={styles.templateStarContainerInner}>
            <p>SALE</p>
            <Star pathColor={fields.primaryColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolBar: React.FC<Template> = ({ fields, setField }) => {
  const handleFileChange = (e: React.ChangeEvent<any>) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e?.target?.result) {
          setField("img", e.target?.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="toolBarContainer">
      <div>
        <label>title</label>
        <textarea
          name="title"
          onChange={(e) => setField(e.target.name, e.target.value)}
          defaultValue={initialFields.title}
        />
      </div>
      <div>
        <label>cta</label>
        <input
          name="cta"
          onChange={(e) => setField(e.target.name, e.target.value)}
          defaultValue={initialFields.cta}
        />
      </div>
      <div>
        <label>img</label>
        <input type="file" name="img" onChange={handleFileChange} />
      </div>
    </div>
  );
};

const Template4 = () => {
  const [fields, setFields] = useState<TemplateFields>(initialFields);

  const updateField = (key: string, value: string) => {
    setFields({
      ...fields,
      [key]: value,
    });
  };
  return (
    <Workspace>
      <>
        <Canvas fields={fields} setField={updateField} />
        <ToolBar fields={fields} setField={updateField} />
      </>
    </Workspace>
  );
};

export default Template4;
