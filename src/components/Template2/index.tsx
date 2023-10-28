import { useState } from "react";
import { adjustFontSize, handleFile } from "../../utils";
import styles from "./template2.module.scss";
import Workspace from "../Workspace";
import TextArea from "../DesignSystem/TextArea/TextArea";
import UploadBtn from "../DesignSystem/UploadBtn/UploadBtn";

interface TemplateFields {
  title: string;
  subtitle: string;
  img: string;
}

interface Template {
  fields: TemplateFields;
  setField: (key: string, value: any) => void;
}

const initialFields: TemplateFields = {
  title: "Lorem Impsum Dolor Text That is Dope And Cool.",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud e`,
  img: "/images/template2-img.svg",
};

const Canvas: React.FC<Template> = ({ fields, setField }) => {
  return (
    <div className="canvas">
      <div className={styles.template}>
        <img src={fields.img} className={styles.templateImg} alt="template2" />
        <div className={styles.templateContent}>
          <div className={styles.templateContentInner}>
            <p
              className={styles.templateContentTitle}
              style={adjustFontSize(58, fields.title.length, 7.7)}
            >
              {fields.title}
            </p>
            <p
              className={styles.templateContentSubtitle}
              style={adjustFontSize(210, fields.subtitle?.length || 1, 3.5)}
            >
              {fields.subtitle}
            </p>
          </div>
          <div className={styles.templateContentAuxImgContainer}>
            <img
              src="/images/template2-img1.svg"
              className={styles.auxImg}
              alt="template2_aux_image"
            />
            <img
              src="/images/template2-img1.svg"
              className={styles.auxImgTransparent}
              alt="template2_aux_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolBar: React.FC<Template> = ({ fields, setField }) => {
  const handleFileChange = async (e: React.ChangeEvent<any>) => {
    const uploadedImage = await handleFile(e.target.files[0]);
    setField("img", uploadedImage);
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

      <UploadBtn
        label="Image"
        name="img"
        id="t2Img"
        onChange={handleFileChange}
      />
    </div>
  );
};

const Template2 = () => {
  const [fields, setFields] = useState(initialFields);

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

export default Template2;
