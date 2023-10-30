import styles from "./template1.module.scss";
import { adjustFontSize, handleFile } from "../../utils";
import { useState } from "react";
import Workspace from "../Workspace";
import TextArea from "../DesignSystem/TextArea/TextArea";
import UploadBtn from "../DesignSystem/UploadBtn/UploadBtn";

interface TemplateFields {
  title: string;
  subtitle: string;
  img: string;
  cta: string;
}

interface Template {
  fields: TemplateFields;
  setField: (key: string, value: any) => void;
}

const initialFields = {
  title: "Lorem Impsum Dolor Text That is Dope And Cool.",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud e`,
  img: "/images/template1-bg.png",
  cta: "THE CTA COMES HERE",
};
const Canvas: React.FC<Template> = ({ fields, setField }) => {
  return (
    <div className="canvas">
      <div className={`${styles.template} template`}>
        <div className={styles.templateContent}>
          <div
            className={styles.templateContentTitle}
            style={adjustFontSize(45 * 1.2, fields.title.length, 9)}
          >
            <p>{fields.title}</p>
          </div>
          <div
            className={styles.templateContentSubtitle}
            style={adjustFontSize(165 * 1.2, fields.subtitle.length, 3.5)}
          >
            <p>{fields.subtitle}</p>
          </div>

          <button
            className={styles.templateContentBtn}
            style={adjustFontSize(20, fields.cta.length, 2)}
          >
            {fields.cta}
          </button>
        </div>
        <div
          className={styles.templateImgContainer}
          style={{ backgroundImage: `url(${fields.img})` }}
        ></div>
      </div>
    </div>
  );
};

const ToolBar: React.FC<Template> = ({ fields, setField }) => {
  const handleFileChange = async (e: React.ChangeEvent<any>) => {
    const uploadedImage = await handleFile(e.target.files[0]);
    setField("img", uploadedImage.url);
  };
  return (
    <div className="toolBoxContainer">
      <TextArea
        label="Title"
        name="title"
        onChange={(e) => setField(e.target.name, e.target.value)}
        defaultValue={initialFields.title}
      />

      <TextArea
        label="Subtitle"
        name="subtitle"
        onChange={(e) => setField(e.target.name, e.target.value)}
        defaultValue={initialFields.subtitle}
      />

      <TextArea
        label="CTA"
        name="cta"
        onChange={(e) => setField(e.target.name, e.target.value)}
        defaultValue={initialFields.cta}
      />

      <UploadBtn
        label="Image"
        name="img"
        id="t1Img"
        onChange={handleFileChange}
      />
    </div>
  );
};

const Template1 = () => {
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

export default Template1;
