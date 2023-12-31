import { Template4Prop } from "../../interfaces";
import styles from "./template4.module.scss";
import { adjustFontSize, handleFile } from "../../utils";
import Star from "../../images/Star";
import Arc from "../../images/Arc";
import Workspace from "../Workspace";
import { useState } from "react";
import TextArea from "../DesignSystem/TextArea/TextArea";
import UploadBtn from "../DesignSystem/UploadBtn/UploadBtn";
import Input from "../DesignSystem/Input/Input";

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
  title: "Lore Ipsum Dolor Jarvis Dolores Umbridge",
  img1: "/images/template4-img1.png",
  img2: "/images/template4-img3.jpeg",
  cta: "SALE",
  primaryColor: "#FFB800",
  secondaryColor: "#00FFC2",
};
const Canvas: React.FC<Template> = ({ fields }) => {
  const templateStyles = {
    background: `linear-gradient(45deg, ${fields.primaryColor}, #000, #000, ${fields.secondaryColor})`,
  };
  return (
    <div className="canvas">
      <div className={`${styles.template} template`} style={templateStyles}>
        <div
          className={styles.templateLogoContainer}
          style={{ backgroundImage: `url(${fields.logo})` }}
        ></div>
        <div className={styles.templateTitleContainer}>
          <p style={adjustFontSize(40, fields.title.length, 4.1)}>
            {fields.title}
          </p>
        </div>
        <div
          className={styles.templateImg1Container}
          style={{ backgroundImage: `url(${fields.img1})` }}
        ></div>
        <div
          className={styles.templateImg2Container}
          style={{ backgroundImage: `url(${fields.img2})` }}
        ></div>
        <div className={styles.templateArcContainer}>
          <Arc pathColor={fields.primaryColor} />
        </div>
        <div className={styles.templateStarContainer}>
          <div className={styles.templateStarContainerInner}>
            <p style={adjustFontSize(6, fields.cta.length, 8)}>{fields.cta}</p>
            <Star pathColor={fields.primaryColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolBar: React.FC<Template> = ({ setField }) => {
  const handleFileChange = async (e: React.ChangeEvent<any>) => {
    const uploadedFile = await handleFile(e.target.files[0]);
    setField(e.target.name, uploadedFile.url);
  };
  return (
    <div className="toolBoxContainer">
      <TextArea
        label="Title"
        name="title"
        onChange={(e) => setField(e.target.name, e.target.value)}
        defaultValue={initialFields.title}
      />
      <Input
        type="color"
        name="primaryColor"
        label="Primary Color"
        defaultValue={initialFields.primaryColor}
        onChange={(e) => setField(e.target.name, e.target.value)}
      />
      <Input
        type="color"
        name="secondaryColor"
        label="Secondary Color"
        defaultValue={initialFields.secondaryColor}
        onChange={(e) => setField(e.target.name, e.target.value)}
      />
      <TextArea
        label="CTA"
        name="cta"
        onChange={(e) => setField(e.target.name, e.target.value)}
        defaultValue={initialFields.cta}
      />

      <UploadBtn
        label="Image1"
        id="img1"
        name="img1"
        onChange={handleFileChange}
      />

      <UploadBtn
        label="Image2"
        id="img2"
        name="img2"
        onChange={handleFileChange}
      />

      <UploadBtn
        label="Logo"
        name="logo"
        id="logo"
        onChange={handleFileChange}
      />
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
